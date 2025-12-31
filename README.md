# 📚 Artefatos do NotebookLM

> Um **template/boilerplate** elegante e moderno para organizar e exibir todos os materiais e artefatos gerados pelo [Google NotebookLM](https://notebooklm.google.com/).

**🎯 Este é um template base** - Use este projeto como ponto de partida para criar seus próprios projetos NotebookLM. Veja a seção [🚀 Criando um Novo Projeto](#-criando-um-novo-projeto) abaixo.

![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## ✨ Características

- 🎨 **Interface Moderna**: Design dark mode elegante com animações suaves
- 📦 **Gerenciamento Dinâmico**: Catálogo centralizado em JSON
- 🎯 **Múltiplos Formatos**: Suporte para documentos, vídeos, áudios e imagens
- 🚀 **Fácil de Usar**: Script interativo para adicionar materiais
- 📱 **Totalmente Responsivo**: Funciona perfeitamente em todos os dispositivos
- ⚡ **Performance**: Construído com Next.js 14 e otimizações modernas
- 🎭 **Animações**: Transições suaves com Framer Motion

## 🚀 Criando um Novo Projeto

Este template foi projetado para ser usado como base para criar novos projetos NotebookLM. Siga os guias abaixo para adaptar este template ao seu projeto:

### ⚡ Início Rápido (10 minutos)

Para uma adaptação rápida, consulte o guia de início rápido:

- [📄 QUICK_START_ADAPTACAO.md](./QUICK_START_ADAPTACAO.md) - Guia rápido de 10 minutos

### 📘 Guia Completo de Adaptação

Para instruções detalhadas passo a passo:

- [📘 GUIA_ADAPTACAO_TEMPLATE.md](./GUIA_ADAPTACAO_TEMPLATE.md) - Guia completo de adaptação

### 🎯 Passos Essenciais

1. **Clone este repositório** como base do seu projeto
2. **Personalize** títulos, descrições e cores
3. **Adicione seus materiais** do NotebookLM
4. **Configure PWA** e metadados
5. **Faça deploy** na Vercel ou outra plataforma

---

## 🛠️ Desenvolvimento do Template

Se você quiser contribuir ou entender como o template funciona:

### Pré-requisitos

- Node.js 18+ ou superior
- npm, yarn ou pnpm

### Instalação

1. **Clone este repositório**

   ```bash
   git clone https://github.com/araguaci/notebooklm-showcase.git
   cd notebooklm-showcase
   ```

2. **Instale as dependências**

   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

3. **Execute o projeto em desenvolvimento**

   ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   ```

4. **Acesse no navegador**

   Abra <http://localhost:3000> para ver o resultado.

## 📥 Como Adicionar Materiais

### Método 1: Script Interativo (Recomendado)

```bash
npm run add-material
```

O script irá perguntar todas as informações necessárias e adicionar automaticamente ao catálogo.

### Método 2: Editar Manualmente

1. **Baixe os artefatos do NotebookLM** e mova para a pasta `./public/`
2. **Edite o arquivo** `public/materials.json`:

```json
{
  "materials": [
    {
      "id": "identificador-unico",
      "title": "Título do Material",
      "description": "Descrição detalhada",
      "type": "document|video|audio|image",
      "file": "nome-do-arquivo.extensao",
      "category": "documentos|videos|audios|imagens",
      "notebookUrl": "https://notebooklm.google.com/notebook/SEU-ID",
      "tags": ["Tag1", "Tag2"]
    }
  ]
}
```

## 📖 Documentação Completa

### Para Criar Novos Projetos

- [⚡ QUICK_START_ADAPTACAO.md](./QUICK_START_ADAPTACAO.md) - Guia rápido de adaptação (10 min)
- [📘 GUIA_ADAPTACAO_TEMPLATE.md](./GUIA_ADAPTACAO_TEMPLATE.md) - Guia completo de adaptação

### Para Adicionar Materiais

- [📘 GUIA_ADICIONAR_MATERIAIS.md](./GUIA_ADICIONAR_MATERIAIS.md) - Guia completo passo a passo
- [📋 README_MATERIAIS.md](./README_MATERIAIS.md) - Visão geral do sistema

## 🌟 Exemplos de Uso

Veja este boilerplate em ação em projetos reais:

### 🛰️ SWOT: Da Estratégia Empresarial ao Monitoramento Oceânico Global

**Repositório**: [notebooklm-SWOT](https://github.com/araguaci/notebooklm-SWOT)  
**Demo**: [swot-chi.vercel.app](https://swot-chi.vercel.app)

Este é um exemplo prático de implementação deste boilerplate, demonstrando como organizar e exibir materiais do NotebookLM sobre análise SWOT, desde aplicações empresariais até monitoramento oceânico global.

**Principais modificações implementadas:**

- Personalização do tema e cores para o contexto SWOT
- Organização de materiais por categorias específicas
- Integração com conteúdo real do NotebookLM
- Deploy em produção na Vercel

Para uma análise detalhada das modificações feitas neste exemplo, consulte [ANALISE_MODIFICACOES_SWOT.md](./ANALISE_MODIFICACOES_SWOT.md).

## 🎯 Tipos de Material Suportados

| Tipo      | Extensões            | Descrição                    |
| --------- | -------------------- | ---------------------------- |
| `document` | PDF, MD, TXT, DOCX   | Documentos e textos          |
| `video`    | MP4, WebM            | Vídeos explicativos          |
| `audio`    | M4A, MP3, WAV        | Resumos em áudio             |
| `image`    | PNG, JPG, SVG        | Infográficos, mapas mentais |

## 📁 Estrutura do Projeto

```text
notebooklm-showcase/
├── app/
│   ├── layout.tsx          # Layout principal (personalizar metadados)
│   ├── page.tsx            # Página principal (personalizar conteúdo)
│   └── globals.css          # Estilos globais
├── public/
│   ├── materials.json      # Catálogo de materiais (adicionar seus materiais)
│   └── [seus-arquivos]     # Seus materiais aqui
├── scripts/
│   └── adicionar-material.js  # Script auxiliar
├── QUICK_START_ADAPTACAO.md    # Guia rápido de adaptação
├── GUIA_ADAPTACAO_TEMPLATE.md  # Guia completo de adaptação
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

> **📝 Nota:** Arquivos marcados com comentários são os principais pontos de personalização ao criar um novo projeto.

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start

# Linter
npm run lint

# Adicionar novo material
npm run add-material
```

## 🎨 Personalização

> **💡 Dica:** Se você está criando um novo projeto a partir deste template, consulte os [Guias de Adaptação](#-criando-um-novo-projeto) acima para instruções detalhadas.

### Alterar Cores e Tema

Edite o arquivo `app/page.tsx` para personalizar:

- Cores do gradiente
- Background
- Estilos dos cards

### Alterar Metadados

Edite `app/layout.tsx` para alterar título e descrição.

### Checklist de Personalização

Ao adaptar este template para um novo projeto, você precisará modificar:

- ✅ Títulos e descrições em `app/layout.tsx`
- ✅ Hero section em `app/page.tsx`
- ✅ Cores e gradientes
- ✅ Arquivo `materials.json` com seus materiais
- ✅ Configuração PWA (`manifest.json`)
- ✅ Metadados Open Graph e Twitter Cards
- ✅ Ícones e favicons

Veja os [Guias de Adaptação](#-criando-um-novo-projeto) para instruções detalhadas.

## 📦 Deploy

### Vercel (Recomendado)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/seu-usuario/artefatos-notebooklm)

### Outras Plataformas

Este projeto pode ser deployado em qualquer plataforma que suporte Next.js:

- Netlify
- Railway
- AWS Amplify
- Cloudflare Pages

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor:

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

Veja [CONTRIBUTING.md](./CONTRIBUTING.md) para mais detalhes.

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

## 🙏 Agradecimentos

- [Google NotebookLM](https://notebooklm.google.com/) - Por criar uma ferramenta incrível
- [Next.js](https://nextjs.org/) - Framework React
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Framer Motion](https://www.framer.com/motion/) - Biblioteca de animações
- [Lucide Icons](https://lucide.dev/) - Ícones

## 📞 Suporte

- 🐛 [Reportar Bug](https://github.com/seu-usuario/artefatos-notebooklm/issues)
- 💡 [Sugerir Feature](https://github.com/seu-usuario/artefatos-notebooklm/issues)
- 📧 Email: seu-email@exemplo.com

## ⭐ Se este projeto foi útil, considere dar uma estrela

---

Feito com ❤️ para a comunidade
