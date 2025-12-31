# 📚 Artefatos do NotebookLM

> Um boilerplate elegante e moderno para organizar e exibir todos os materiais e artefatos gerados pelo [Google NotebookLM](https://notebooklm.google.com/).

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

## 🚀 Início Rápido

### Pré-requisitos

- Node.js 18+ ou superior
- npm, yarn ou pnpm

### Instalação

1. **Clone ou baixe este repositório**

```bash
git clone https://github.com/seu-usuario/artefatos-notebooklm.git
cd artefatos-notebooklm
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

Abra [http://localhost:3000](http://localhost:3000) para ver o resultado.

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

## 📖 Guia Completo

Para instruções detalhadas sobre como baixar e organizar materiais do NotebookLM, consulte:

- [📘 GUIA_ADICIONAR_MATERIAIS.md](./GUIA_ADICIONAR_MATERIAIS.md) - Guia completo passo a passo
- [📋 README_MATERIAIS.md](./README_MATERIAIS.md) - Visão geral do sistema

## 🎯 Tipos de Material Suportados

| Tipo | Extensões | Descrição |
|------|-----------|-----------|
| `document` | PDF, MD, TXT, DOCX | Documentos e textos |
| `video` | MP4, WebM | Vídeos explicativos |
| `audio` | M4A, MP3, WAV | Resumos em áudio |
| `image` | PNG, JPG, SVG | Infográficos, mapas mentais |

## 📁 Estrutura do Projeto

```
artefatos-notebooklm/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página principal
│   └── globals.css          # Estilos globais
├── public/
│   ├── materials.json      # Catálogo de materiais
│   └── [seus-arquivos]     # Seus materiais aqui
├── scripts/
│   └── adicionar-material.js  # Script auxiliar
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

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

### Alterar Cores e Tema

Edite o arquivo `app/page.tsx` para personalizar:
- Cores do gradiente
- Background
- Estilos dos cards

### Alterar Metadados

Edite `app/layout.tsx` para alterar título e descrição.

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

## ⭐ Se este projeto foi útil, considere dar uma estrela!

---

Feito com ❤️ para a comunidade

