import SidebarLayout from '../components/SidebarLayout';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 20px;
`;

export default function EventosPage() {
  return (
    <SidebarLayout activePage="eventos">
      <Title>Eventos</Title>
      <p>Aqui você pode visualizar e gerenciar os eventos do sistema.</p>
    </SidebarLayout>
  );
}
