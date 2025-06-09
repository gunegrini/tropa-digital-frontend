import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import styled from 'styled-components';
import { Eye, EyeOff } from 'lucide-react';


const Container = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background: #f3f4f6;
  font-family: 'Segoe UI', sans-serif;
  padding: 16px;
`;

const Card = styled.div`
  background: #ffffff;
  padding: 48px 40px;
  border-radius: 20px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: 100%;
  max-width: 200px;
  margin-bottom: 24px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 40px;
  font-size: 24px;
  color: #1f2937;
  font-weight: 600;
`;

const InputGroup = styled.div`
  position: relative;
  margin-bottom: 24px;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  height: 60px;
  padding: 0 18px;
  border-radius: 30px;
  font-size: 16px;
  border: 1px solid #d1d5db;
  background-color: #fff;
  box-sizing: border-box;
  transition: border 0.3s;

  &:focus {
    outline: none;
    border-color: #d65831;
    box-shadow: 0 0 0 2px rgba(214, 88, 49, 0.2);
  }

  &.error {
    border-color: red;
  }
`;

const TogglePassword = styled.button`
  position: absolute;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
`;

const Button = styled.button`
  width: 100%;
  height: 50px;
  background-color: #d65831;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #b64525;
  }
`;

export default function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('login');
    if (saved) {
      const { email, password } = JSON.parse(saved);
      setEmail(email);
      setPassword(password);
    }
  }, []);

  const handleLogin = () => {
 
    const defaultEmail = 'admin@teste.com';
    const defaultPassword = '123456';
  
   
    const loginData = localStorage.getItem('login');
    const saved = loginData ? JSON.parse(loginData) : { email: defaultEmail, password: defaultPassword };
  
    if (email === saved.email && password === saved.password) {
      login(email, password);
    } else {
      setError(true);
    }
  };
  
  

  return (
    <Container>
      <Card>
        <Logo src="/logo.svg" alt="Tropa Digital" />
        <Title>Login</Title>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
          style={{ width: '100%' }}
        >
          <InputGroup>
            <Input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={error ? 'error' : ''}
              required
            />
          </InputGroup>
          <InputGroup>
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={error ? 'error' : ''}
              required
            />
            <TogglePassword
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </TogglePassword>
          </InputGroup>
          <Button type="submit">Entrar</Button>
        </form>
      </Card>
    </Container>
  );
}
