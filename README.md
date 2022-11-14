# Jest
### Repositório para estudos de TDD usando Jest no ReactJS
  <br />

## 13/11
Primeiro teste. Realizado teste simples de uma função matemática (math.js). Aprendido a descrever os testes.
<br><br>

## Instruções para rodar o Jest em ECMAScript 6
**Instalar Babel**
<pre id="tmp" style="display: none">npm install --save-dev babel-jest</pre>

**Configurar package.json**
<pre id="tmp" style="display: none">{
  "scripts": {
    "test": "jest"
  },
  "jest": {
    "transform": {
      "^.+\\.[t|j]sx?$": "babel-jest"
    }
  }
}</pre>

**Configurar Babel**
<pre id="tmp" style="display: none">Criar babel.config.json</pre>
<pre id="tmp" style="display: none">npm install @babel/preset-env --save-dev</pre>
<pre id="tmp" style="display: none">Editar babel.config.json <br><br>{
  "presets": ["@babel/preset-env"]
}</pre>
