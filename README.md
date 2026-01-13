# 📦 Stock Control System

Sistema completo de controle de estoque, gestão de produtos e vendas desenvolvido com Next.js 14, TypeScript, Supabase e Tailwind CSS.

## 🚀 Tecnologias

- **Frontend**: Next.js 14 (App Router), React 18, TypeScript
- **Estilização**: Tailwind CSS
- **Backend**: Next.js API Routes + Supabase
- **Banco de Dados**: PostgreSQL (Supabase)
- **Autenticação**: Supabase Auth
- **Storage**: Cloudinary / Supabase Storage
- **Gráficos**: Recharts
- **Ícones**: Lucide React
- **State Management**: Zustand

## 📋 Funcionalidades

### ✅ Implementadas
- Setup inicial do projeto
- Configuração de TypeScript e Tailwind CSS
- Página inicial

### 🚧 Em Desenvolvimento
- [ ] Sistema de autenticação (Login/Registro)
- [ ] Dashboard principal
- [ ] Gestão de produtos (CRUD completo)
- [ ] Upload de imagens
- [ ] Categorias e subcategorias
- [ ] Variações de produtos (tamanhos, cores)
- [ ] Controle de estoque (entrada/saída)
- [ ] Relatórios e gráficos
- [ ] Sistema de vendas
- [ ] Multi-tenant (organizações)
- [ ] Controle de permissões

## 🛠️ Setup do Projeto

### 1. Instalar dependências

```bash
npm install
```

### 2. Configurar variáveis de ambiente

Copie o arquivo `.env.example` para `.env.local` e preencha com suas credenciais:

```bash
cp .env.example .env.local
```

Edite o arquivo `.env.local` com suas chaves do Supabase.

### 3. Configurar Supabase

1. Crie um projeto no [Supabase](https://supabase.com)
2. Copie as chaves de API (URL e anon key)
3. Execute o schema SQL (disponível na pasta `/docs/database`)

### 4. Rodar o projeto

```bash
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

## 📁 Estrutura do Projeto

```
stock-control-system/
├── src/
│   ├── app/              # App Router (páginas e rotas)
│   ├── components/       # Componentes reutilizáveis
│   ├── lib/             # Utilitários e configurações
│   ├── hooks/           # Custom hooks
│   └── types/           # TypeScript types
├── public/              # Arquivos estáticos
└── docs/                # Documentação e schemas
```

## 🎯 Roadmap

### Fase 1 - MVP (4-6 semanas)
- ✅ Setup inicial
- 🚧 Autenticação
- 🚧 CRUD de produtos
- 🚧 Controle de estoque básico
- 🚧 Dashboard inicial

### Fase 2 - Funcionalidades Core
- Sistema de vendas
- Relatórios avançados
- Exportação Excel/PDF
- Alertas de estoque baixo

### Fase 3 - Otimizações
- Performance
- UX/UI refinamento
- Testes automatizados
- Documentação completa

### Fase 4 - Features Premium
- App mobile
- Integração com e-commerce
- API pública
- Impressão de etiquetas

## 📝 Licença

Propriedade privada - Todos os direitos reservados.

---

**Status**: 🚧 Em Desenvolvimento
**Versão**: 0.1.0
**Última atualização**: Janeiro 2025
