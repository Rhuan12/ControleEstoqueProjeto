# 🚀 GUIA RÁPIDO DE INSTALAÇÃO

## Passo 1: Configurar o Supabase

1. Acesse [supabase.com](https://supabase.com) e crie uma conta (se ainda não tiver)
2. Crie um novo projeto:
   - Nome do projeto: "stock-control-system" (ou o nome que preferir)
   - Database Password: Escolha uma senha forte (você precisará dela)
   - Region: Escolha a mais próxima do Brasil (South America)
   - Plano: Free (é suficiente para começar)

3. Aguarde a criação do projeto (leva ~2 minutos)

4. Após criar, vá em **Settings** > **API** e copie:
   - **Project URL** (parecido com: https://xxxxx.supabase.co)
   - **anon public** key (uma string bem longa)

5. Vá em **SQL Editor** e execute os scripts na seguinte ordem:
   - Primeiro: `/docs/database/schema.sql` (copia todo o conteúdo e cola no SQL Editor, depois clica em RUN)
   - Segundo: `/docs/database/seed.sql` (dados de exemplo - OPCIONAL)

## Passo 2: Configurar o Projeto

1. Extraia a pasta `stock-control-system` onde você quiser trabalhar

2. Abra o terminal/CMD na pasta do projeto

3. Instale as dependências:
```bash
npm install
```

4. Crie o arquivo `.env.local` na raiz do projeto (copie do .env.example):
```bash
cp .env.example .env.local
```

5. Edite o arquivo `.env.local` e adicione suas chaves do Supabase:
```
NEXT_PUBLIC_SUPABASE_URL=cole_aqui_seu_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=cole_aqui_sua_anon_key
```

## Passo 3: Rodar o Projeto

```bash
npm run dev
```

Acesse: http://localhost:3000

## Passo 4: Criar seu primeiro usuário

1. No Supabase, vá em **Authentication** > **Users** > **Add user**
2. Email: seu-email@exemplo.com
3. Password: crie uma senha
4. Auto Confirm User: ATIVE (importante!)

5. Após criar o usuário, copie o **User UID** (um ID como: abc123-def456-...)

6. Vá no **SQL Editor** do Supabase e execute:
```sql
-- Insira o usuário na tabela users (substitua os IDs)
INSERT INTO users (id, organization_id, role, full_name) VALUES
('COLE_AQUI_O_USER_UID', '00000000-0000-0000-0000-000000000001', 'admin', 'Seu Nome');
```

Pronto! Agora você pode fazer login no sistema.

## 🎯 Próximos Passos

Agora que a base está rodando, vamos desenvolver:
1. ✅ Tela de Login
2. ✅ Dashboard principal
3. ✅ CRUD de Produtos
4. E muito mais...

## ⚠️ Problemas Comuns

**Erro: "Missing Supabase environment variables"**
- Verifique se o arquivo `.env.local` existe e está com as chaves corretas

**Erro ao instalar dependências**
- Certifique-se de ter Node.js instalado (versão 18 ou superior)
- Tente: `npm install --legacy-peer-deps`

**Não consigo fazer login**
- Verifique se o usuário foi inserido na tabela `users` no Supabase
- Verifique se a organização existe (ID: 00000000-0000-0000-0000-000000000001)

---

**Dúvidas?** Pode me chamar que te ajudo! 🚀
