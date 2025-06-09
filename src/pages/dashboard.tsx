import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../contexts/AuthContext';
import SidebarLayout from '../components/SidebarLayout';
import styled from 'styled-components';


const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  padding-right: 16px; /* Reduz o espaço à direita para evitar que a mensagem fique muito no canto */
  flex-wrap: wrap; /* Permite quebra de linha em telas pequenas */
  gap: 16px; /* Espaço entre elementos em caso de quebra */

  @media (max-width: 767px) {
    padding-left: 48px; /* Espaço para o botão hamburguer em mobile */
    padding-right: 16px;
  }
`;

const Title = styled.h1`
  font-size: 22px;
  color: #1f2937;
  font-weight: 600;
`;

const LogoutButton = styled.button`
  background: #ef4444;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 30px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: #dc2626;
  }
`;

const Content = styled.div`
  background: white;
  padding: 24px;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  font-size: 16px;
  color: #374151;
  max-width: 800px; /* Limita a largura para evitar que o conteúdo se espalhe demais */
  margin: 0 auto; /* Centraliza o conteúdo */
  
  @media (max-width: 767px) {
    padding: 16px; /* Reduz o padding em mobile para melhor ajuste */
  }
`;

const Welcome = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
  text-align: left; /* Garante alinhamento à esquerda, mas com padding controlado */
`;

export default function Dashboard() {
  const { isAuthenticated, logout } = useAuth();
  const router = useRouter();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/');
    } else {
      const saved = localStorage.getItem('login');
      if (saved) {
        const { email } = JSON.parse(saved);
        const profile = localStorage.getItem(`user_${email}`);
        if (profile) {
          const { name } = JSON.parse(profile);
          setUserName(name || '');
        }
      }
    }
  }, [isAuthenticated, router]);

  return (
    <SidebarLayout activePage="dashboard" userName={userName}>
      <Header>
        <Title>Painel Interno</Title>
        <LogoutButton onClick={logout}>Sair</LogoutButton>
      </Header>
      <Content>
        <Welcome>Olá, {userName || 'usuário'}! 👋</Welcome>
        <p>
          Seja bem-vindo à área interna do sistema. Esta tela representa um exemplo
          de ambiente autenticado, acessível apenas após login.
        </p>
        <p>
          O layout, estilização e responsividade foram desenvolvidos com base no
          Figma proposto no desafio, utilizando Next.js, Styled Components e boas
          práticas de UI/UX.
        </p>
        <p>
          Embora o conteúdo seja estático, a estrutura está preparada para receber
          dados reais, componentes reutilizáveis e integrações futuras.
        </p>
      </Content>
    </SidebarLayout>
  );
}