# 📘 Guia Completo: Como Adicionar Materiais do NotebookLM

Este guia detalhado explica passo a passo como baixar e adicionar novos materiais do NotebookLM ao projeto.

## 📋 Índice

1. [Baixar Artefatos do NotebookLM](#1-baixar-artefatos-do-notebooklm)
2. [Organizar Arquivos no Projeto](#2-organizar-arquivos-no-projeto)
3. [Adicionar ao Catálogo JSON](#3-adicionar-ao-catálogo-json)
4. [Tipos de Material Suportados](#4-tipos-de-material-suportados)
5. [Dicas e Boas Práticas](#5-dicas-e-boas-práticas)

---

## 1. Baixar Artefatos do NotebookLM

### 📊 Infográficos

1. Acesse o [NotebookLM](https://notebooklm.google.com/) e abra seu caderno
2. No painel **"Estúdio"**, selecione **"Infográfico"**
3. Aguarde a geração do infográfico
4. Clique no **menu de três pontos (⋮)** ao lado do infográfico
5. Escolha **"Baixar"** para salvar como arquivo PNG

**Referência**: [Central de Ajuda - Infográficos](https://support.google.com/notebooklm/answer/16758265)

### 🎵 Resumos em Áudio

1. No painel **"Estúdio"**, selecione **"Resumo em Áudio"**
2. Aguarde a geração do resumo
3. Clique no **menu de três pontos (⋮)**
4. Escolha **"Baixar"** para salvar o arquivo de áudio (formato M4A)

### 🗺️ Mapas Mentais

**Opção 1: Exportação Direta**
1. Abra o mapa mental no NotebookLM
2. Use a extensão do Chrome **"NotebookLM Mind Map Extractor"** (opcional)
3. Ou clique em **"Editar no Xmind"** e exporte de lá
4. Salve como PNG ou outro formato de imagem

**Opção 2: Screenshot**
1. Abra o mapa mental em tela cheia
2. Use a ferramenta de captura de tela do seu sistema
3. Salve como PNG

**Referência**: [Xmind - Exportar Mapas Mentais](https://xmind.com/pt/blog/export-notebooklm-mind-map)

### 📊 Apresentações de Slides

1. No painel **"Estúdio"**, selecione **"Apresentação de Slides"**
2. Aguarde a geração da apresentação
3. Clique no **menu de três pontos (⋮)**
4. Escolha **"Baixar"** como PDF ou PPTX

### 📄 Documentos de Texto

1. Copie o conteúdo do documento gerado
2. Salve como arquivo `.md` (Markdown) ou `.txt`
3. Ou exporte diretamente se o NotebookLM oferecer essa opção

---

## 2. Organizar Arquivos no Projeto

### Estrutura de Diretórios

```
./public/
├── materials.json          # Catálogo (não deletar!)
├── documento1.pdf
├── video1.mp4
├── audio1.m4a
└── imagem1.png
```

### Regras de Nomenclatura

✅ **BOM:**
- `analise-swot-2024.pdf`
- `mapa-mental-estrategia.png`
- `resumo-audio-episodio-1.m4a`

❌ **RUIM:**
- `Análise SWOT 2024.pdf` (espaços e acentos)
- `mapa mental.png` (espaços)
- `resumo_audio_1.m4a` (pode funcionar, mas hífens são preferidos)

**Dicas:**
- Use apenas letras minúsculas
- Substitua espaços por hífens (`-`)
- Evite caracteres especiais e acentos
- Seja descritivo mas conciso

---

## 3. Adicionar ao Catálogo JSON

### Método 1: Script Interativo (Recomendado)

Execute o comando:

```bash
npm run add-material
```

O script irá perguntar:
- ID único
- Título
- Descrição
- Tipo (document/video/audio/image)
- Nome do arquivo
- Categoria
- URL do NotebookLM (opcional)
- Tags (separadas por vírgula)

### Método 2: Edição Manual

1. Abra `public/materials.json`
2. Adicione uma nova entrada no array `materials`:

```json
{
  "id": "identificador-unico-sem-espacos",
  "title": "Título do Material",
  "description": "Descrição detalhada do que o material contém e sua importância.",
  "type": "document",
  "file": "nome-do-arquivo.extensao",
  "category": "documentos",
  "notebookUrl": "https://notebooklm.google.com/notebook/SEU-ID-AQUI",
  "tags": ["Tag1", "Tag2", "Tag3"]
}
```

### Exemplo Completo

```json
{
  "materials": [
    {
      "id": "analise-swot-empresa-2024",
      "title": "Análise SWOT - Empresa 2024",
      "description": "Análise completa de forças, fraquezas, oportunidades e ameaças da empresa para o ano de 2024.",
      "type": "document",
      "file": "analise-swot-empresa-2024.pdf",
      "category": "documentos",
      "notebookUrl": "https://notebooklm.google.com/notebook/0dc51553-0d01-49f0-acfc-c2142a87e2ee",
      "tags": ["SWOT", "Análise", "2024", "Estratégia"]
    }
  ]
}
```

---

## 4. Tipos de Material Suportados

### 📄 Document (document)

**Extensões suportadas:** PDF, MD, TXT, DOCX, DOC

**Exemplo:**
```json
{
  "type": "document",
  "file": "guia-completo.pdf",
  "category": "documentos"
}
```

### 🎥 Video (video)

**Extensões suportadas:** MP4, WebM, MOV

**Exemplo:**
```json
{
  "type": "video",
  "file": "explicacao-estrategia.mp4",
  "category": "videos"
}
```

### 🎵 Audio (audio)

**Extensões suportadas:** M4A, MP3, WAV, OGG

**Exemplo:**
```json
{
  "type": "audio",
  "file": "resumo-audio.m4a",
  "category": "audios"
}
```

### 🖼️ Image (image)

**Extensões suportadas:** PNG, JPG, JPEG, SVG, WEBP

**Exemplo:**
```json
{
  "type": "image",
  "file": "mapa-mental.png",
  "category": "imagens"
}
```

---

## 5. Dicas e Boas Práticas

### ✅ Faça

- **Use IDs únicos e descritivos**: `analise-swot-2024` é melhor que `doc1`
- **Adicione descrições detalhadas**: Ajuda outros usuários a entender o conteúdo
- **Use tags relevantes**: Facilita a busca e organização
- **Mantenha o JSON formatado**: Use um editor com validação JSON
- **Inclua a URL do notebook**: Facilita referência futura
- **Organize por categorias**: Use categorias consistentes

### ❌ Evite

- **IDs duplicados**: Cada material deve ter um ID único
- **Nomes de arquivo com espaços**: Use hífens
- **Arquivos muito grandes**: Considere comprimir vídeos/imagens
- **Tags genéricas demais**: Seja específico
- **Esquecer de mover arquivos**: Sempre mova para `./public/`

### 🔍 Organização por Categorias

Use categorias consistentes:
- `documentos` - Para PDFs, Markdown, textos
- `videos` - Para vídeos explicativos
- `audios` - Para resumos em áudio
- `imagens` - Para infográficos, mapas mentais

### 📊 Estrutura de Tags

Use tags para facilitar a busca:
- **Tema**: `SWOT`, `Oceano Azul`, `Estratégia`
- **Tipo**: `Análise`, `Guia`, `Resumo`
- **Ano**: `2024`, `2023`
- **Categoria**: `Negócios`, `Marketing`, `Tecnologia`

---

## 🔗 Links Úteis

- [Central de Ajuda do NotebookLM](https://support.google.com/notebooklm/)
- [Como exportar infográficos](https://support.google.com/notebooklm/answer/16758265)
- [Extensão Xmind para mapas mentais](https://xmind.com/pt/blog/export-notebooklm-mind-map)
- [Documentação do Next.js](https://nextjs.org/docs)

---

## ❓ Problemas Comuns

### O material não aparece na página

1. Verifique se o arquivo está em `./public/`
2. Confirme que o nome do arquivo no JSON corresponde ao arquivo real
3. Verifique se o JSON está válido (sem erros de sintaxe)
4. Recarregue a página (Ctrl+F5 ou Cmd+Shift+R)

### Erro ao carregar JSON

1. Valide o JSON em [jsonlint.com](https://jsonlint.com/)
2. Verifique vírgulas e chaves
3. Certifique-se de que não há vírgulas extras no final

### Vídeo/Áudio não reproduz

1. Verifique se o formato é suportado pelo navegador
2. Confirme que o arquivo não está corrompido
3. Tente abrir o arquivo diretamente no navegador

---

**Precisa de ajuda?** Abra uma [issue](https://github.com/seu-usuario/artefatos-notebooklm/issues) no GitHub!

