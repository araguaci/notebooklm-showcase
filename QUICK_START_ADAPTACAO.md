# ⚡ Início Rápido: Adaptando o Template

Guia rápido para adaptar o template para um novo projeto NotebookLM em 10 minutos!

## 🎯 Passos Essenciais

### 1. Materiais (5 min)
```bash
# 1. Baixe artefatos do NotebookLM → pasta ./public/
# 2. Atualize public/materials.json com seus materiais
# 3. Adicione URL do notebook em materials.json
```

### 2. Personalização (3 min)
```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: "🛰️ SEU TÍTULO",
  description: "Sua descrição...",
};

// app/page.tsx - Hero Section
const Hero = () => (
  // Atualize título e descrições
);
```

### 3. PWA (2 min)
```bash
# 1. Edite public/manifest.json (nome, descrição)
# 2. Crie ícones SVG (ou use os existentes)
# 3. Atualize app/layout.tsx com metadados PWA
```

### 4. Metatags (1 min)
```typescript
// app/layout.tsx
const siteUrl = "https://seu-site.vercel.app";
// Configure Open Graph e Twitter Cards
```

## ✅ Checklist Rápido

- [ ] Materiais em `public/`
- [ ] `materials.json` atualizado
- [ ] Título/descrição em `layout.tsx`
- [ ] Hero section personalizada
- [ ] `manifest.json` configurado
- [ ] Ícones SVG criados
- [ ] Metadados Open Graph
- [ ] Build funciona: `pnpm run build`

## 📚 Guia Completo

Para instruções detalhadas, veja: [GUIA_ADAPTACAO_TEMPLATE.md](./GUIA_ADAPTACAO_TEMPLATE.md)

---

**Tempo estimado:** 10-15 minutos para configuração básica

