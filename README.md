# Teste Técnico - Desenvolvedor(a) Frontend | Tropa Digital

Este repositório contém a implementação do desafio prático solicitado pela equipe da Tropa Digital para a vaga de Desenvolvedor(a) Frontend.

## 🔗 Link do Projeto Publicado

Acesse o projeto online em: [https://seu-projeto.vercel.app](https://seu-projeto.vercel.app)

## 🧪 Desafio Proposto

O desafio consiste no desenvolvimento de:

- ✅ Tela de Login funcional (com simulação de autenticação)
- ✅ Tela Interna (Dashboard)
- ✅ Navegação lateral (Sidebar)
- ✅ Funcionalidade de alteração de dados (nome)
- ✅ Páginas adicionais: Eventos, Equipes e Inscrições
- ✅ Layout responsivo, fiel ao Figma
- ✅ Armazenamento e persistência de dados com `localStorage`
- ✅ Feedback visual de erros e sucesso

## 🛠 Tecnologias Utilizadas

- **Framework**: [Next.js](https://nextjs.org/)
- **Estilização**: [Styled Components](https://styled-components.com/)
- **Ícones**: [Lucide React](https://lucide.dev/)
- **Deploy**: [Vercel](https://vercel.com/)
- **Gerenciamento de Autenticação**: Context API + `localStorage`

## 🔐 Fluxo de Autenticação

- O login é simulado e armazenado no `localStorage`.
- Dados persistem entre sessões.
- Tela de login pré-preenche os campos se os dados estiverem salvos.
- Usuário pode alterar o **nome** cadastrado através da tela "Alterar Dados".

## 🧭 Estrutura de Páginas

```bash
/pages
├── index.tsx           # Tela de login
├── dashboard.tsx       # Tela principal após login
├── alterar-dados.tsx   # Página para alterar nome do usuário
├── eventos.tsx         # Página de eventos
├── equipes.tsx         # Página de equipes
├── inscricoes.tsx      # Página de inscrições


📁 Organização
bash
Copiar
Editar
/components
└── SidebarLayout.tsx   # Componente de layout com Sidebar responsiva

/contexts
└── AuthContext.tsx     # Gerencia estado global de autenticação


💾 Dados para Login
Email: admin@teste.com
Senha: 123456