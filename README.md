# Jest
### Repositório para estudos de TDD usando Jest no ReactJS
  <br />

## 13/11
Instalação do Jest e configuração do Babel.<br>
Realizado teste em uma função matemática como acerto (math.js).<br>
Aprendido a descrever os testes.
<br>

## 14/11
Realizado teste em um objeto (vector.js).<br>
Realizado teste em uma função matemática como erro (math.js).<br>
Realizado teste com boleanos.
<br>

## 15/11
Realizado testes comparativos de menor ou maior que um determinado valor (math.js).<br>
Realizado teste com string.<br>
Realizado teste com vetor (shopping.js).<br>
Realizado teste com decimal.<br>
Realizado teste com throw (error.js).<br>
Aprendido a chamar funções antes e depois dos testes.
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
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}</pre>
