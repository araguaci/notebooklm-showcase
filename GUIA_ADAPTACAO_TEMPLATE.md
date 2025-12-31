# 📘 Guia Completo: Adaptando o Template para Novos Projetos NotebookLM

Este guia documenta o processo completo de adaptação do template [notebooklm-showcase](https://github.com/araguaci/notebooklm-showcase) para criar novos projetos baseados em notebooks do Google NotebookLM.

---

## 📋 Índice

1. [Pré-requisitos](#pré-requisitos)
2. [Configuração Inicial](#configuração-inicial)
3. [Atualizar Materiais do NotebookLM](#atualizar-materiais-do-notebooklm)
4. [Personalizar Página Principal](#personalizar-página-principal)
5. [Configurar PWA](#configurar-pwa)
6. [Configurar Metatags e Compartilhamento](#configurar-metatags-e-compartilhamento)
7. [Corrigir Erros Comuns](#corrigir-erros-comuns)
8. [Checklist Final](#checklist-final)

---

## 🚀 Pré-requisitos

- Node.js 18+ instalado
- pnpm, npm ou yarn instalado
- Conta no Google NotebookLM
- Acesso ao notebook do NotebookLM que será usado

---

## 1️⃣ Configuração Inicial

### Passo 1.1: Clonar ou Usar o Template

```bash
# Opção 1: Usar o template como base
git clone https://github.com/araguaci/notebooklm-showcase.git meu-projeto-swot
cd meu-projeto-swot

# Opção 2: Criar novo projeto Next.js e copiar arquivos do template
npx create-next-app@latest meu-projeto-swot
```

### Passo 1.2: Instalar Dependências

```bash
cd meu-projeto-swot
pnpm install
# ou
npm install
# ou
yarn install
```

### Passo 1.3: Verificar Estrutura do Projeto

Certifique-se de que a estrutura está assim:

```
projeto/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── icon.svg
│   └── apple-icon.svg
├── public/
│   ├── materials.json
│   └── [seus-arquivos]
├── package.json
└── next.config.js
```

---

## 2️⃣ Atualizar Materiais do NotebookLM

### Passo 2.1: Obter URL do Notebook

1. Acesse seu notebook no [NotebookLM](https://notebooklm.google.com/)
2. Copie a URL completa do notebook
   - Exemplo: `https://notebooklm.google.com/notebook/b6025eba-787a-480f-8f3f-d70f2e5873a8`

### Passo 2.2: Baixar Artefatos do NotebookLM

1. No NotebookLM, baixe todos os artefatos gerados:
   - Documentos (PDF, MD, TXT)
   - Vídeos (MP4, WebM)
   - Áudios (M4A, MP3, WAV)
   - Imagens (PNG, JPG, SVG)
   - Mapas mentais
   - Outros materiais

2. Mova todos os arquivos para a pasta `./public/`

### Passo 2.3: Atualizar `materials.json`

Edite o arquivo `public/materials.json`:

```json
{
  "materials": [
    {
      "id": "identificador-unico",
      "title": "Título do Material",
      "description": "Descrição detalhada do material",
      "type": "document|video|audio|image",
      "file": "nome-do-arquivo.extensao",
      "category": "documentos|videos|audios|imagens",
      "notebookUrl": "https://notebooklm.google.com/notebook/SEU-ID",
      "tags": ["Tag1", "Tag2", "Tag3"]
    }
  ],
  "notebooks": [
    {
      "id": "seu-notebook-id",
      "url": "https://notebooklm.google.com/notebook/SEU-ID",
      "title": "Título do Seu Notebook",
      "description": "Descrição do notebook"
    }
  ]
}
```

**Exemplo prático:**

```json
{
  "materials": [
    {
      "id": "plano-estrategico-tows",
      "title": "Plano Estratégico Baseado na Análise SWOT Cruzada (TOWS)",
      "description": "Documento completo que articula um plano estratégico...",
      "type": "document",
      "file": "plano-estrategico-baseado-na-analise-swot-cruzada-tows.md",
      "category": "documentos",
      "notebookUrl": "https://notebooklm.google.com/notebook/b6025eba-787a-480f-8f3f-d70f2e5873a8",
      "tags": ["SWOT", "TOWS", "Planejamento Estratégico"]
    },
    {
      "id": "video-analise-swot",
      "title": "Análise SWOT: Do Diagnóstico à Ação",
      "description": "Vídeo explicativo sobre análise SWOT...",
      "type": "video",
      "file": "analise-swot-do-diagnostico-a-acao.mp4",
      "category": "videos",
      "notebookUrl": "https://notebooklm.google.com/notebook/b6025eba-787a-480f-8f3f-d70f2e5873a8",
      "tags": ["SWOT", "Vídeo", "Tutorial"]
    }
  ],
  "notebooks": [
    {
      "id": "b6025eba-787a-480f-8f3f-d70f2e5873a8",
      "url": "https://notebooklm.google.com/notebook/b6025eba-787a-480f-8f3f-d70f2e5873a8",
      "title": "NotebookLM - Análise SWOT",
      "description": "Notebook do Google NotebookLM para análise e organização de materiais sobre análise SWOT e estratégias TOWS"
    }
  ]
}
```

**Dica:** Use o script interativo:

```bash
pnpm run add-material
```

---

## 3️⃣ Personalizar Página Principal

### Passo 3.1: Atualizar Título e Descrição

Edite `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "🛰️ SEU TÍTULO AQUI",
  description: "Sua descrição detalhada aqui...",
};
```

### Passo 3.2: Personalizar Hero Section

Edite `app/page.tsx`, componente `Hero`:

```typescript
const Hero = () => (
  <section className="flex flex-col items-center justify-center pt-32 pb-20 px-4">
    <motion.div className="...">
      <BookOpen size={14} /> Seu Badge Aqui
    </motion.div>

    <motion.h1 className="...">
      🛰️ SEU TÍTULO PRINCIPAL
    </motion.h1>

    <motion.div className="...">
      <p>Seu primeiro parágrafo...</p>
      <p>Seu segundo parágrafo...</p>
      <p>Seu terceiro parágrafo...</p>
    </motion.div>
  </section>
);
```

### Passo 3.3: Criar Seção Informativa (Opcional)

Se quiser adicionar uma seção informativa como fizemos com SWOT, crie um componente similar a `SWOTInfoSection`:

```typescript
const InfoSection = () => (
  <section className="max-w-7xl mx-auto px-4 py-16">
    {/* Seus cards informativos aqui */}
  </section>
);
```

### Passo 3.4: Atualizar Cores e Tema

Edite as cores em `app/page.tsx`:

- **Gradientes:** Procure por `from-indigo-400 to-cyan-400`
- **Background:** Procure por `bg-[#030303]`
- **Cores de destaque:** Procure por `indigo-500`, `cyan-400`, etc.

---

## 4️⃣ Configurar PWA

### Passo 4.1: Criar `manifest.json`

Crie/edite `public/manifest.json`:

```json
{
  "name": "Nome Completo do Seu App",
  "short_name": "Nome Curto",
  "description": "Descrição do seu app",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#030303",
  "theme_color": "#6366f1",
  "orientation": "portrait-primary",
  "scope": "/",
  "icons": [
    {
      "src": "/icon-192.svg",
      "sizes": "192x192",
      "type": "image/svg+xml",
      "purpose": "any maskable"
    },
    {
      "src": "/icon-512.svg",
      "sizes": "512x512",
      "type": "image/svg+xml",
      "purpose": "any maskable"
    },
    {
      "src": "/apple-touch-icon.svg",
      "sizes": "180x180",
      "type": "image/svg+xml"
    }
  ],
  "categories": ["education", "productivity"],
  "lang": "pt-BR",
  "dir": "ltr"
}
```

### Passo 4.2: Criar Ícones SVG

Crie os seguintes arquivos SVG:

**`public/favicon.svg`** (32x32):
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#6366f1;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#06b6d4;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="32" height="32" rx="6" fill="url(#grad)"/>
  <text x="16" y="22" font-family="Arial" font-size="20" font-weight="bold" fill="white" text-anchor="middle">S</text>
</svg>
```

**`public/icon-192.svg`** (192x192):
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" width="192" height="192">
  <!-- Similar ao favicon, mas maior -->
</svg>
```

**`public/icon-512.svg`** (512x512):
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <!-- Similar ao favicon, mas maior -->
</svg>
```

**`public/apple-touch-icon.svg`** (180x180):
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" width="180" height="180">
  <!-- Similar ao favicon, mas maior -->
</svg>
```

**`app/icon.svg`** e **`app/apple-icon.svg`**:
- Copie os mesmos arquivos para a pasta `app/` para o Next.js reconhecer automaticamente

### Passo 4.3: Atualizar Layout com PWA

Em `app/layout.tsx`, adicione ao `metadata`:

```typescript
export const metadata: Metadata = {
  // ... outros metadados
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Nome Curto",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-192.svg", sizes: "192x192", type: "image/svg+xml" },
      { url: "/icon-512.svg", sizes: "512x512", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
  },
};
```

---

## 5️⃣ Configurar Metatags e Compartilhamento

### Passo 5.1: Atualizar Metadados Open Graph

Em `app/layout.tsx`, adicione:

```typescript
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://seu-site.vercel.app";
const siteName = "🛰️ Seu Título Aqui";
const description = "Sua descrição completa aqui...";

export const metadata: Metadata = {
  title: siteName,
  description: description,
  keywords: ["palavra1", "palavra2", "palavra3"],
  authors: [{ name: "seu-nome", url: "https://github.com/seu-usuario" }],
  creator: "seu-nome",
  publisher: "seu-nome",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title: siteName,
    description: description,
    siteName: "Nome do Site",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: description,
    creator: "@seu-usuario",
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
```

### Passo 5.2: Criar Imagem OG (Opcional mas Recomendado)

Crie uma imagem `public/og-image.png` com:
- Tamanho: 1200x630 pixels
- Formato: PNG
- Conteúdo: Título do projeto, logo, descrição breve

### Passo 5.3: Componente de Compartilhamento

O componente `ShareSection` já está implementado em `app/page.tsx`. Ele inclui:

- Botões para Facebook, Twitter, LinkedIn, WhatsApp
- Botão "Copiar Link"
- Botão nativo de compartilhamento (quando disponível)

**Personalizar textos de compartilhamento:**

Edite em `ShareSection`:

```typescript
const shareTitle = "🛰️ Seu Título Aqui";
const shareText = "Sua descrição para compartilhamento...";
```

---

## 6️⃣ Corrigir Erros Comuns

### Erro de Hidratação

**Problema:** `Hydration failed because the initial UI does not match what was rendered on the server`

**Solução:** Use estado `mounted` para garantir HTML idêntico:

```typescript
const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
  // Atualizar valores que dependem do cliente
}, []);

// No JSX, verificar mounted antes de usar valores do cliente
{mounted && (
  // Seu componente que usa window, navigator, etc.
)}
```

### Erro 500 no Servidor

**Problema:** Erros ao compilar ou servir arquivos

**Solução:**
1. Limpar cache: `rm -rf .next` (ou `Remove-Item -Recurse -Force .next` no PowerShell)
2. Reinstalar dependências: `pnpm install`
3. Verificar imports não utilizados

### Imagens não carregam

**Problema:** Imagens não aparecem

**Solução:**
- Verificar se os arquivos estão em `public/`
- Verificar caminhos em `materials.json` (devem começar com `/`)
- Usar tag `<img>` ao invés de `next/image` se necessário

---

## 7️⃣ Checklist Final

Antes de publicar, verifique:

### Configuração Básica
- [ ] Dependências instaladas
- [ ] `materials.json` atualizado com todos os materiais
- [ ] Arquivos dos materiais na pasta `public/`
- [ ] URL do notebook correta

### Personalização
- [ ] Título e descrição atualizados em `layout.tsx`
- [ ] Hero section personalizada
- [ ] Cores e tema ajustados
- [ ] Seções informativas criadas (se necessário)

### PWA
- [ ] `manifest.json` criado e configurado
- [ ] Ícones SVG criados (favicon, 192, 512, apple)
- [ ] Ícones na pasta `app/` também
- [ ] Metadados PWA em `layout.tsx`

### SEO e Compartilhamento
- [ ] Metadados Open Graph configurados
- [ ] Twitter Cards configurados
- [ ] Imagem OG criada (opcional)
- [ ] Componente de compartilhamento funcionando
- [ ] URL do site configurada (variável de ambiente)

### Testes
- [ ] Build funciona: `pnpm run build`
- [ ] Sem erros de lint: `pnpm run lint`
- [ ] Servidor de desenvolvimento funciona: `pnpm run dev`
- [ ] Página carrega sem erros
- [ ] Links de compartilhamento funcionam
- [ ] Materiais carregam corretamente

### Deploy
- [ ] Variável `NEXT_PUBLIC_SITE_URL` configurada
- [ ] Build de produção testado
- [ ] Deploy realizado (Vercel, Netlify, etc.)
- [ ] PWA instalável no dispositivo

---

## 📝 Exemplo de Variáveis de Ambiente

Crie um arquivo `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://seu-projeto.vercel.app
```

---

## 🎯 Dicas Finais

1. **Mantenha o template atualizado:** O template original pode receber melhorias
2. **Teste em diferentes dispositivos:** Verifique responsividade
3. **Otimize imagens:** Use formatos modernos (WebP) quando possível
4. **Monitore performance:** Use ferramentas como Lighthouse
5. **Documente mudanças:** Mantenha um changelog das suas modificações

---

## 📚 Recursos Adicionais

- [Template Original](https://github.com/araguaci/notebooklm-showcase)
- [Documentação Next.js](https://nextjs.org/docs)
- [PWA Guide](https://web.dev/progressive-web-apps/)
- [Open Graph Protocol](https://ogp.me/)

---

## 🤝 Contribuindo

Se você melhorar este guia ou encontrar problemas, considere:

1. Abrir uma issue no repositório
2. Fazer um pull request com melhorias
3. Compartilhar seu projeto como exemplo

---

**Última atualização:** Janeiro 2025

**Versão do template:** 1.0.0

---

Feito com ❤️ baseado no template de [@araguaci](https://github.com/araguaci) e [@artesdosul](https://artesdosul.com/)

