# 🚀 Teste Técnico - Desenvolvedor(a) Frontend | Tropa Digital

Este repositório contém a implementação do desafio prático para a vaga de Desenvolvedor(a) Frontend da Tropa Digital.

---

## 🔗 Projeto Online

Acesse a versão publicada na Vercel:  
👉 [https://tropa-digital-frontend-one.vercel.app](https://tropa-digital-frontend-one.vercel.app)

---

## 🧪 Requisitos Atendidos

- ✅ Tela de **Login funcional** com simulação de autenticação
- ✅ **Dashboard** acessível após login
- ✅ **Sidebar responsiva** com navegação entre páginas
- ✅ Página de **Alterar Dados** (nome, email e senha)
- ✅ Telas adicionais: **Eventos**, **Equipes**, **Inscrições**
- ✅ **Persistência de dados** com `localStorage`
- ✅ **Validação visual** de erros e feedback de sucesso
- ✅ **Responsivo**, compatível com mobile e desktop
- ✅ Layout baseado no [Figma do desafio](https://www.figma.com/design/xzsmAYKHPRaqMTNBBolJQH/Teste-FRONTEND---Tropa-Digital?node-id=803-8066)

---

## 🛠 Tecnologias Utilizadas

- **Framework**: [Next.js](https://nextjs.org/)
- **Estilização**: [Styled Components](https://styled-components.com/)
- **Ícones**: [Lucide React](https://lucide.dev/)
- **Autenticação**: Context API + localStorage
- **Hospedagem**: [Vercel](https://vercel.com/)

---

## 🔐 Fluxo de Autenticação

- O login é **simulado** com dados armazenados no `localStorage`.
- O usuário pode alterar seus dados em `/alterar-dados`, que são refletidos automaticamente.
- Ao relogar, os campos de login são preenchidos automaticamente com os dados salvos.

### Dados de Acesso Padrão

Email: admin@teste.com
Senha: 123456


## 🧭 Estrutura de Páginas

```bash
src/pages
├── index.tsx           # Login
├── dashboard.tsx       # Tela interna
├── alterar-dados.tsx   # Alteração de nome/email/senha
├── eventos.tsx         # Tela de eventos
├── equipes.tsx         # Tela de equipes
└── inscricoes.tsx      # Tela de inscrições

src/components
└── SidebarLayout.tsx   # Layout principal com navegação lateral

src/contexts
└── AuthContext.tsx     # Controle de autenticação global
