# 📚 Gerenciamento de Materiais do NotebookLM

Este documento fornece uma visão geral do sistema de gerenciamento de materiais.

## 🚀 Como Funciona

1. **Arquivo JSON Centralizado**: Todos os materiais são catalogados em `public/materials.json`
2. **Página Dinâmica**: A página principal lê automaticamente do JSON e exibe todos os materiais
3. **Organização Automática**: Os materiais são organizados por tipo (documentos, vídeos, áudios, imagens)

## 📥 Fluxo de Trabalho

```
NotebookLM → Baixar Artefatos → Mover para ./public/ → Adicionar ao JSON → Aparece na Página
```

## 🎯 Recursos

- ✅ **Cards Interativos**: Cada material tem um card com hover effects
- ✅ **Tags**: Visualização de tags para categorização
- ✅ **Links Diretos**: Botões para baixar, abrir e acessar o NotebookLM
- ✅ **Players Integrados**: Vídeos, áudios e imagens com visualização direta
- ✅ **Responsivo**: Funciona perfeitamente em mobile, tablet e desktop
- ✅ **Loading States**: Indicadores de carregamento enquanto busca os materiais

## 📖 Documentação Completa

Para instruções detalhadas, consulte:
- [GUIA_ADICIONAR_MATERIAIS.md](./GUIA_ADICIONAR_MATERIAIS.md) - Guia passo a passo completo

