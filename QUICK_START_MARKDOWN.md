# ⚡ Quick Start: Visualização de Markdown (5 minutos)

Guia rápido para adicionar visualização formatada de Markdown ao template [notebooklm-showcase](https://github.com/araguaci/notebooklm-showcase).

## 🚀 Passos Rápidos

### 1. Instalar Dependências (30 segundos)

```bash
pnpm add react-markdown remark-gfm rehype-raw
```

### 2. Criar Estrutura de Pastas (10 segundos)

```bash
mkdir -p app/components
mkdir -p app/markdown/[slug]
```

### 3. Copiar Arquivos (2 minutos)

**Criar `app/components/MarkdownViewer.tsx`** - Copie o conteúdo do arquivo completo do guia principal.

**Criar `app/markdown/[slug]/page.tsx`** - Copie o conteúdo do arquivo completo do guia principal.

### 4. Atualizar `app/page.tsx` (1 minuto)

Adicione no topo:
```typescript
import Link from "next/link";
```

No componente `MaterialCard`, adicione após `getTypeColor()`:
```typescript
const isMarkdown = file.endsWith('.md');
const fileSlug = isMarkdown ? file.replace('.md', '') : null;
const viewUrl = isMarkdown ? `/markdown/${fileSlug}` : `/${file}`;
```

Atualize os links conforme o guia completo.

### 5. Atualizar `app/globals.css` (30 segundos)

Adicione os estilos do guia completo ao final do arquivo.

### 6. Testar (1 minuto)

1. Adicione um arquivo `.md` em `public/`
2. Registre no `materials.json`
3. Execute `pnpm dev`
4. Clique em "Ver Formatado" no card

## ✅ Checklist

- [ ] Dependências instaladas
- [ ] Componente `MarkdownViewer.tsx` criado
- [ ] Página `app/markdown/[slug]/page.tsx` criada
- [ ] `app/page.tsx` atualizado com detecção de Markdown
- [ ] `app/globals.css` atualizado com estilos
- [ ] Testado com um arquivo `.md`

## 🎯 Pronto!

Agora seus documentos Markdown serão exibidos formatados! 

Para personalização avançada, consulte o [GUIA_VISUALIZACAO_MARKDOWN.md](./GUIA_VISUALIZACAO_MARKDOWN.md).

