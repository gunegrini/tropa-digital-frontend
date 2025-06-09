import SidebarLayout from '../components/SidebarLayout';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 20px;
`;

export default function InscricoesPage() {
  return (
    <SidebarLayout activePage="inscricoes">
      <Title>Inscrições</Title>
      <p>Veja aqui os usuários inscritos nos eventos e suas informações.</p>
    </SidebarLayout>
  );
}
