const fs = require('fs');

const content = fs.readFileSync('README.md','utf8');

const words = content.split(' ');

const wordReact = Array.from(words).filter(a => a.toLowerCase().includes('react'));
const reactWordCount = content.match(/react/gi ?? []).length;

console.log('Nº Palabras', words.length);
console.log('Palabras con React', wordReact.length);
console.log('Palabras con React 2', reactWordCount);