# 📄 Guia: Visualização Formatada de Documentos Markdown

Este guia explica como adicionar a funcionalidade de visualização formatada de documentos Markdown ao template [notebooklm-showcase](https://github.com/araguaci/notebooklm-showcase).

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Implementação](#implementação)
- [Personalização](#personalização)
- [Uso](#uso)
- [Exemplos](#exemplos)

## 🎯 Visão Geral

Esta funcionalidade permite que documentos Markdown (`.md`) sejam exibidos como páginas web formatadas e estilizadas, em vez de apenas serem baixados ou abertos como arquivos brutos. Os documentos são renderizados com:

- ✅ Tipografia elegante e legível
- ✅ Títulos com gradientes coloridos
- ✅ Tabelas responsivas
- ✅ Blocos de código destacados
- ✅ Listas e citações estilizadas
- ✅ Design consistente com o tema do projeto
- ✅ Navegação intuitiva com botões de voltar, baixar e abrir

## 📦 Pré-requisitos

- Projeto Next.js 14+ configurado
- TypeScript habilitado
- Tailwind CSS configurado
- Framer Motion instalado (já incluído no template)

## 🚀 Instalação

### Passo 1: Instalar Dependências

Execute o seguinte comando no terminal:

```bash
npm install react-markdown remark-gfm rehype-raw
# ou
yarn add react-markdown remark-gfm rehype-raw
# ou
pnpm add react-markdown remark-gfm rehype-raw
```

**Bibliotecas instaladas:**
- `react-markdown`: Renderiza Markdown como componentes React
- `remark-gfm`: Suporte para GitHub Flavored Markdown (tabelas, checkboxes, etc.)
- `rehype-raw`: Permite HTML dentro do Markdown

## 🛠️ Implementação

### Passo 2: Criar o Componente MarkdownViewer

Crie o arquivo `app/components/MarkdownViewer.tsx`:

```typescript
"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

interface MarkdownViewerProps {
  content: string;
}

export default function MarkdownViewer({ content }: MarkdownViewerProps) {
  return (
    <div className="prose prose-invert prose-lg max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          // Títulos
          h1: ({ node, ...props }) => (
            <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-12 first:mt-0 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent border-b border-white/10 pb-4" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-3xl md:text-4xl font-bold mb-5 mt-10 bg-gradient-to-r from-indigo-300 to-cyan-300 bg-clip-text text-transparent border-b border-white/10 pb-3" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="text-2xl md:text-3xl font-bold mb-4 mt-8 text-indigo-300" {...props} />
          ),
          h4: ({ node, ...props }) => (
            <h4 className="text-xl md:text-2xl font-bold mb-3 mt-6 text-indigo-200" {...props} />
          ),
          // Parágrafos
          p: ({ node, ...props }) => (
            <p className="text-gray-300 leading-relaxed mb-4 text-base md:text-lg" {...props} />
          ),
          // Listas
          ul: ({ node, ...props }) => (
            <ul className="list-disc list-inside mb-6 space-y-2 text-gray-300 marker:text-indigo-400" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="list-decimal list-inside mb-6 space-y-2 text-gray-300 marker:text-indigo-400" {...props} />
          ),
          li: ({ node, ...props }) => (
            <li className="ml-4 mb-2 text-base md:text-lg leading-relaxed" {...props} />
          ),
          // Links
          a: ({ node, ...props }) => (
            <a
              className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              {...props}
            />
          ),
          // Citações
          blockquote: ({ node, ...props }) => (
            <blockquote
              className="border-l-4 border-indigo-500/50 pl-6 py-2 my-6 italic text-gray-400 bg-white/5 rounded-r-lg"
              {...props}
            />
          ),
          // Código inline
          code: ({ node, inline, ...props }: any) => {
            if (inline) {
              return (
                <code
                  className="px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded text-sm font-mono border border-indigo-500/30"
                  {...props}
                />
              );
            }
            return (
              <code
                className="block p-4 bg-gray-900/50 text-gray-200 rounded-lg overflow-x-auto text-sm font-mono border border-white/10 my-4"
                {...props}
              />
            );
          },
          // Blocos de código
          pre: ({ node, ...props }) => (
            <pre className="bg-gray-900/50 rounded-lg p-4 overflow-x-auto my-4 border border-white/10" {...props} />
          ),
          // Tabelas
          table: ({ node, ...props }) => (
            <div className="overflow-x-auto my-6 rounded-lg border border-white/10">
              <table className="min-w-full divide-y divide-white/10" {...props} />
            </div>
          ),
          thead: ({ node, ...props }) => (
            <thead className="bg-indigo-500/10" {...props} />
          ),
          tbody: ({ node, ...props }) => (
            <tbody className="divide-y divide-white/10" {...props} />
          ),
          tr: ({ node, ...props }) => (
            <tr className="hover:bg-white/5 transition-colors" {...props} />
          ),
          th: ({ node, ...props }) => (
            <th className="px-6 py-3 text-left text-xs font-bold text-indigo-300 uppercase tracking-wider" {...props} />
          ),
          td: ({ node, ...props }) => (
            <td className="px-6 py-4 text-sm text-gray-300" {...props} />
          ),
          // Separadores
          hr: ({ node, ...props }) => (
            <hr className="my-8 border-t border-white/10" {...props} />
          ),
          // Texto forte e itálico
          strong: ({ node, ...props }) => (
            <strong className="font-bold text-white" {...props} />
          ),
          em: ({ node, ...props }) => (
            <em className="italic text-gray-200" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
```

### Passo 3: Criar a Página Dinâmica para Markdown

Crie a estrutura de pastas e o arquivo `app/markdown/[slug]/page.tsx`:

```typescript
"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Download, ExternalLink, FileText } from "lucide-react";
import MarkdownViewer from "../../components/MarkdownViewer";

export default function MarkdownPage() {
  const params = useParams();
  const router = useRouter();
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    const slug = params?.slug as string;
    if (!slug) {
      setError("Documento não encontrado");
      setLoading(false);
      return;
    }

    // Buscar o conteúdo do markdown
    // O arquivo está em public/, então o caminho é direto
    fetch(`/${slug}.md`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Documento não encontrado");
        }
        return res.text();
      })
      .then((text) => {
        // Extrair título do markdown (primeira linha ou primeiro H1)
        const lines = text.split("\n");
        let extractedTitle = slug;

        // Tentar encontrar o primeiro H1 ou usar a primeira linha
        for (const line of lines) {
          const trimmed = line.trim();
          if (trimmed.startsWith("# ")) {
            extractedTitle = trimmed.replace(/^#+\s*/, "").trim();
            break;
          } else if (trimmed && !trimmed.startsWith("#") && trimmed.length > 0) {
            extractedTitle = trimmed;
            break;
          }
        }

        setTitle(extractedTitle || slug);
        setContent(text);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar markdown:", err);
        setError(err.message || "Erro ao carregar documento");
        setLoading(false);
      });
  }, [params]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#030303] text-white flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-400 mb-4"></div>
          <p className="text-gray-400">Carregando documento...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#030303] text-white flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-4">📄</div>
          <h1 className="text-2xl font-bold mb-4 text-red-400">Erro ao carregar documento</h1>
          <p className="text-gray-400 mb-6">{error}</p>
          <button
            onClick={() => router.push("/")}
            className="px-6 py-3 bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-400 rounded-lg transition-colors border border-indigo-500/30"
          >
            Voltar para a página inicial
          </button>
        </div>
      </div>
    );
  }

  const slug = params?.slug as string;

  return (
    <div className="min-h-screen bg-[#030303] text-white">
      {/* Background Glows */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] h-[40%] w-[40%] rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] h-[50%] w-[50%] rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-[#030303]/80 backdrop-blur-md border-b border-white/10">
          <div className="max-w-5xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <button
                onClick={() => router.push("/")}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/10"
              >
                <ArrowLeft size={18} />
                <span>Voltar</span>
              </button>

              <div className="flex items-center gap-2">
                <a
                  href={`/${slug}.md`}
                  download
                  className="flex items-center gap-2 px-4 py-2 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 rounded-lg transition-colors border border-indigo-500/30"
                >
                  <Download size={18} />
                  <span className="hidden sm:inline">Baixar</span>
                </a>
                <a
                  href={`/${slug}.md`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/10"
                >
                  <ExternalLink size={18} />
                  <span className="hidden sm:inline">Abrir</span>
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="max-w-5xl mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                <FileText size={24} />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                {title}
              </h1>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl bg-white/[0.02] border border-white/10 p-8 md:p-12"
          >
            <MarkdownViewer content={content} />
          </motion.div>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/10 mt-20 py-8 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <button
              onClick={() => router.push("/")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 rounded-lg transition-colors border border-indigo-500/30"
            >
              <ArrowLeft size={18} />
              Voltar para a página inicial
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
```

### Passo 4: Atualizar o Componente MaterialCard

No arquivo `app/page.tsx`, localize o componente `MaterialCard` e faça as seguintes alterações:

1. **Adicionar import do Link do Next.js:**

```typescript
import Link from "next/link";
```

2. **Atualizar a lógica do MaterialCard para detectar arquivos Markdown:**

Localize a função `getTypeColor` e adicione após ela:

```typescript
// Verificar se é um arquivo markdown
const isMarkdown = file.endsWith('.md');
const fileSlug = isMarkdown ? file.replace('.md', '') : null;
const viewUrl = isMarkdown ? `/markdown/${fileSlug}` : `/${file}`;
```

3. **Atualizar os links no card:**

Substitua o link do ícone de "Abrir" (ExternalLink) por:

```typescript
{isMarkdown ? (
  <Link
    href={viewUrl}
    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
  >
    <ExternalLink size={18} className="text-gray-400" />
  </Link>
) : (
  <a
    href={`/${file}`}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
    onClick={(e) => {
      if (type === "image") {
        e.preventDefault();
        window.open(`/${file}`, "_blank");
      }
    }}
  >
    <ExternalLink size={18} className="text-gray-400" />
  </a>
)}
```

4. **Atualizar o botão "Abrir" na seção de ações:**

Substitua o botão "Abrir" por:

```typescript
{isMarkdown ? (
  <Link
    href={viewUrl}
    className="flex items-center gap-2 px-4 py-2 bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 rounded-lg text-sm font-medium transition-colors"
  >
    <FileText size={16} />
    Ver Formatado
  </Link>
) : (
  <a
    href={`/${file}`}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-gray-300 rounded-lg text-sm font-medium transition-colors"
  >
    <ExternalLink size={16} />
    Abrir
  </a>
)}
```

### Passo 5: Adicionar Estilos CSS

No arquivo `app/globals.css`, adicione os estilos adicionais para Markdown:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Estilos adicionais para Markdown */
@layer utilities {
  .prose {
    @apply text-gray-300;
  }
  
  .prose h1,
  .prose h2,
  .prose h3,
  .prose h4,
  .prose h5,
  .prose h6 {
    @apply font-bold text-white;
  }
  
  .prose p {
    @apply mb-4 leading-relaxed;
  }
  
  .prose a {
    @apply text-indigo-400 hover:text-indigo-300 transition-colors;
  }
  
  .prose code {
    @apply font-mono;
  }
  
  .prose pre {
    @apply overflow-x-auto;
  }
  
  .prose blockquote {
    @apply border-l-4 border-indigo-500/50 pl-6 py-2 my-6 italic;
  }
  
  .prose ul,
  .prose ol {
    @apply mb-6 space-y-2;
  }
  
  .prose li {
    @apply mb-2;
  }
  
  .prose table {
    @apply w-full border-collapse;
  }
  
  .prose th,
  .prose td {
    @apply border border-white/10 px-4 py-2;
  }
  
  .prose hr {
    @apply my-8 border-t border-white/10;
  }
}
```

## 🎨 Personalização

### Alterar Cores

Para personalizar as cores do Markdown renderizado, edite as classes no componente `MarkdownViewer.tsx`:

- **Títulos H1/H2**: Altere `from-indigo-400 to-cyan-400` para suas cores preferidas
- **Links**: Altere `text-indigo-400 hover:text-indigo-300`
- **Código**: Altere `bg-indigo-500/20 text-indigo-300`
- **Tabelas**: Altere `bg-indigo-500/10` e `text-indigo-300`

### Alterar Tema de Fundo

Na página `app/markdown/[slug]/page.tsx`, altere:

- **Background principal**: `bg-[#030303]` para sua cor preferida
- **Background do conteúdo**: `bg-white/[0.02]` para ajustar a opacidade
- **Glows de fundo**: Ajuste as cores `bg-indigo-500/10` e `bg-blue-500/5`

### Ajustar Tipografia

No componente `MarkdownViewer.tsx`, você pode ajustar:

- **Tamanhos de fonte**: Altere `text-4xl`, `text-3xl`, etc.
- **Espaçamento**: Altere `mb-6`, `mt-12`, etc.
- **Altura de linha**: Altere `leading-relaxed`

## 📖 Uso

### Como Funciona

1. **Adicione um arquivo Markdown** na pasta `public/`
2. **Registre no `materials.json`** com `type: "document"` e a extensão `.md`
3. **O card automaticamente detecta** que é um arquivo Markdown
4. **Clique em "Ver Formatado"** para ver o documento renderizado

### Estrutura de URL

A URL segue o padrão:
```
/markdown/[nome-do-arquivo-sem-extensao]
```

**Exemplo:**
- Arquivo: `public/guia-pratico-5w2h.md`
- URL: `/markdown/guia-pratico-5w2h`

### Exemplo de materials.json

```json
{
  "materials": [
    {
      "id": "guia-pratico",
      "title": "Guia Prático 5W2H",
      "description": "Guia completo sobre metodologia 5W2H",
      "type": "document",
      "file": "guia-pratico-5w2h.md",
      "category": "documentos",
      "tags": ["5W2H", "Planejamento"]
    }
  ]
}
```

## ✨ Exemplos

### Exemplo 1: Documento Simples

```markdown
# Título Principal

Este é um parágrafo de exemplo.

## Subtítulo

- Item 1
- Item 2
- Item 3
```

### Exemplo 2: Com Tabela

```markdown
# Tabela de Exemplo

| Coluna 1 | Coluna 2 | Coluna 3 |
|----------|----------|----------|
| Dado 1   | Dado 2   | Dado 3   |
| Dado 4   | Dado 5   | Dado 6   |
```

### Exemplo 3: Com Código

```markdown
# Exemplo de Código

Aqui está um exemplo de código inline: `console.log('Hello')`

E um bloco de código:

```javascript
function exemplo() {
  return "Hello World";
}
```
```

## 🔧 Troubleshooting

### Problema: Documento não carrega

**Solução:**
- Verifique se o arquivo está na pasta `public/`
- Verifique se o nome do arquivo no `materials.json` corresponde ao arquivo real
- Verifique se o slug na URL corresponde ao nome do arquivo (sem extensão)

### Problema: Estilos não aparecem

**Solução:**
- Verifique se os estilos foram adicionados ao `globals.css`
- Verifique se o Tailwind CSS está configurado corretamente
- Limpe o cache do navegador

### Problema: Tabelas não renderizam

**Solução:**
- Certifique-se de que `remark-gfm` está instalado
- Verifique se está sendo passado no array `remarkPlugins`

## 📚 Recursos Adicionais

- [Documentação do react-markdown](https://github.com/remarkjs/react-markdown)
- [GitHub Flavored Markdown](https://github.github.com/gfm/)
- [Next.js Dynamic Routes](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)

## 🤝 Contribuindo

Se você encontrar problemas ou tiver sugestões de melhorias, sinta-se à vontade para abrir uma issue ou pull request no repositório.

## 📝 Notas

- Esta funcionalidade funciona apenas com arquivos `.md` (Markdown)
- Arquivos PDF, DOCX e outros formatos continuam funcionando normalmente
- O título é extraído automaticamente do primeiro H1 ou da primeira linha do documento
- Os estilos são totalmente personalizáveis através do Tailwind CSS

---

**Feito com ❤️ para a comunidade**

