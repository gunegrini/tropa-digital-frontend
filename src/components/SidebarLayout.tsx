import { ReactNode, useState } from 'react';
import styled from 'styled-components';
import {
  LayoutDashboard,
  Calendar,
  Users,
  User,
  Settings,
  LogOut,
  Menu as MenuIcon,
  X as CloseIcon,
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/router';


const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f3f4f6;
  font-family: 'Segoe UI', sans-serif;
`;

const Sidebar = styled.aside<{ isOpen: boolean }>`
  width: 240px;
  background-color: #ffffff;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid #e5e7eb;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh; /* Garante altura total da viewport */
  min-height: 100vh;
  z-index: 1000;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;

  @media (min-width: 768px) {
    position: static;
    transform: translateX(0);
    height: 100vh; /* Garante altura total em desktop */
    min-height: 100vh;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MenuItem = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 500;
  color: ${({ active }) => (active ? '#ffffff' : '#111827')};
  background-color: ${({ active }) => (active ? '#d65831' : 'transparent')};
  transition: background 0.2s;

  &:hover {
    background-color: ${({ active }) => (active ? '#d65831' : '#f3f4f6')};
  }
`;

const Footer = styled.div`
  padding-top: 16px;
  border-top: 1px solid #e5e7eb;
`;

const Content = styled.main`
  flex: 1;
  padding: 32px;
  box-sizing: border-box;
  margin-left: 0;

  @media (min-width: 768px) {
    margin-left: 240px;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  position: fixed;
  top: 16px;
  left: 16px;
  z-index: 1100;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  color: #1f2937;

  @media (max-width: 767px) {
    display: block;
  }
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  color: #1f2937;
  width: 100%;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 900;

  @media (min-width: 768px) {
    display: none;
  }
`;

interface SidebarLayoutProps {
  children: ReactNode;
  activePage?: 'dashboard' | 'eventos' | 'equipes' | 'inscricoes';
  userName?: string;
}

export default function SidebarLayout({
  children,
  activePage = 'dashboard',
  userName = 'Usuário',
}: SidebarLayoutProps) {
  const { logout } = useAuth();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <Wrapper>
      <HamburgerButton onClick={toggleSidebar}>
        <MenuIcon size={24} />
      </HamburgerButton>
      <Overlay isOpen={isSidebarOpen} onClick={closeSidebar} />
      <Sidebar isOpen={isSidebarOpen}>
        <div>
          <CloseButton onClick={closeSidebar}>
            <CloseIcon size={24} />
          </CloseButton>
          <img
            src="/logo.svg"
            alt="Tropa Digital"
            style={{ width: '100%', marginBottom: '32px' }}
          />
          <Menu>
            <MenuItem
              active={activePage === 'dashboard'}
              onClick={() => {
                router.push('/dashboard');
                closeSidebar();
              }}
            >
              <LayoutDashboard size={18} /> Dashboard
            </MenuItem>
            <MenuItem
              active={activePage === 'eventos'}
              onClick={() => {
                router.push('/eventos');
                closeSidebar();
              }}
            >
              <Calendar size={18} /> Eventos
            </MenuItem>
            <MenuItem
              active={activePage === 'equipes'}
              onClick={() => {
                router.push('/equipes');
                closeSidebar();
              }}
            >
              <Users size={18} /> Equipes
            </MenuItem>
            <MenuItem
              active={activePage === 'inscricoes'}
              onClick={() => {
                router.push('/inscricoes');
                closeSidebar();
              }}
            >
              <User size={18} /> Inscrições
            </MenuItem>
          </Menu>
        </div>
        <Footer>
          <div style={{ marginBottom: 12 }}>
            <strong>{userName}</strong>
            <br />
            <span style={{ fontSize: 13, color: '#6b7280' }}>Administrador</span>
          </div>
          <MenuItem
            onClick={() => {
              router.push('/alterar-dados');
              closeSidebar();
            }}
          >
            <Settings size={18} /> Alterar dados
          </MenuItem>
          <MenuItem
            onClick={() => {
              logout();
              closeSidebar();
            }}
          >
            <LogOut size={18} /> Sair
          </MenuItem>
        </Footer>
      </Sidebar>
      <Content>{children}</Content>
    </Wrapper>
  );
}