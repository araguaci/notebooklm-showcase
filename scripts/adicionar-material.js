#!/usr/bin/env node

/**
 * Script auxiliar para adicionar novos materiais ao materials.json
 * 
 * Uso:
 * node scripts/adicionar-material.js
 * ou
 * npm run add-material
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

async function adicionarMaterial() {
  console.log('\n📦 Adicionar Novo Material do NotebookLM\n');
  console.log('Preencha as informações abaixo:\n');

  const id = await question('ID único (ex: analise-swot-empresa-x): ');
  const title = await question('Título: ');
  const description = await question('Descrição: ');
  const type = await question('Tipo (document/video/audio/image): ');
  const file = await question('Nome do arquivo (ex: arquivo.pdf): ');
  const category = await question('Categoria (documentos/videos/audios/imagens): ');
  const notebookUrl = await question('URL do NotebookLM (opcional): ');
  const tagsInput = await question('Tags (separadas por vírgula): ');

  const tags = tagsInput.split(',').map(tag => tag.trim()).filter(tag => tag);

  const novoMaterial = {
    id,
    title,
    description,
    type,
    file,
    category,
    ...(notebookUrl && { notebookUrl }),
    ...(tags.length > 0 && { tags })
  };

  // Ler arquivo JSON atual
  const jsonPath = path.join(__dirname, '../public/materials.json');
  const jsonData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

  // Adicionar novo material
  jsonData.materials.push(novoMaterial);

  // Salvar arquivo
  fs.writeFileSync(jsonPath, JSON.stringify(jsonData, null, 2), 'utf8');

  console.log('\n✅ Material adicionado com sucesso!');
  console.log('\n📋 Resumo:');
  console.log(JSON.stringify(novoMaterial, null, 2));
  console.log('\n⚠️  Lembre-se de mover o arquivo para a pasta ./public/');
  console.log(`   Arquivo esperado: ./public/${file}\n`);

  rl.close();
}

adicionarMaterial().catch(console.error);

