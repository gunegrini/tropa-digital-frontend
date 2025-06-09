import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import SidebarLayout from '../components/SidebarLayout';

const Container = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  position: relative;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #374151;
`;

const Input = styled.input`
  padding: 12px;
  width: 100%;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 16px;
  margin-bottom: 20px;
  outline: none;

  &:focus {
    border-color: #d65831;
    box-shadow: 0 0 0 3px rgba(214, 88, 49, 0.1);
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #d65831;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background-color: #c2410c;
  }
`;

const Message = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #10b981;
  color: white;
  padding: 16px 24px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  font-size: 16px;
  font-weight: 500;
  z-index: 1000;
  opacity: 0;
  animation: fadeInOut 2s ease-in-out;

  @keyframes fadeInOut {
    0% { opacity: 0; transform: translate(-50%, -60%); }
    10% { opacity: 1; transform: translate(-50%, -50%); }
    90% { opacity: 1; transform: translate(-50%, -50%); }
    100% { opacity: 0; transform: translate(-50%, -60%); }
  }
`;

const ErrorMessage = styled(Message)`
  background-color: #ef4444;
`;

export default function AlterarDados() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const saved = localStorage.getItem('login');
    if (saved) {
      const { email, password } = JSON.parse(saved);
      setEmail(email);
      setPassword(password);

      const profile = localStorage.getItem(`user_${email}`);
      if (profile) {
        const { name } = JSON.parse(profile);
        setName(name || '');
      }
    }
  }, []);

  const salvar = () => {
    if (!name.trim() || !email.trim() || !password.trim()) {
      setShowError(true);
      setTimeout(() => setShowError(false), 2000);
      return;
    }

    const oldData = localStorage.getItem('login');
    if (oldData) {
      const { email: oldEmail } = JSON.parse(oldData);
      if (oldEmail !== email) {
        localStorage.removeItem(`user_${oldEmail}`);
      }
    }

    localStorage.setItem('login', JSON.stringify({ email, password }));
    localStorage.setItem(`user_${email}`, JSON.stringify({ name }));

    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      router.push('/dashboard');
    }, 2000);
  };

  return (
    <SidebarLayout activePage="dashboard">
      <Container>
        <Title>Alterar Dados</Title>

        <Label htmlFor="nome">Nome</Label>
        <Input
          id="nome"
          placeholder="Digite seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Label htmlFor="email">E-mail</Label>
        <Input
          id="email"
          placeholder="Digite seu e-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Label htmlFor="senha">Senha</Label>
        <Input
          id="senha"
          placeholder="Digite sua senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button onClick={salvar}>Salvar</Button>

        {showSuccess && <Message>Dados salvos com sucesso!</Message>}
        {showError && <ErrorMessage>Preencha todos os campos corretamente.</ErrorMessage>}
      </Container>
    </SidebarLayout>
  );
}
