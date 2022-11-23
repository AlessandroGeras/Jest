# Jest
### Repositório para estudos de TDD usando Jest no ReactJS
  <br />

## 13/11
Instalação do Jest e configuração do Babel.<br>
Testes realizados em funções matemáticas para verificação de resultados esperados.<br>
Aprendido a descrever os testes.
<br>

## 14/11
Testes realizados com objetos.<br>
Testes realizados em uma função matemática para verificação de resultados não esperados.<br>
Realizado teste com boleanos.
<br>

## 15/11
Testes realizados com comparação de valores.<br>
Testes realizados com strings.<br>
Testes realizados com vetores.<br>
Testes realizados com decimais.<br>
Testes realizados com throw.<br>
Aprendido a chamar funções antes e depois dos testes.
<br>

## 21/11
Realizado testes únicos.<br>
Realizado testes em escopo.<br>
Realizado testes com Mock em consumo de API.
<br>

## 22/11
Realizado testes com Fake Timer.<br>
<br>

## 23/11
Testes concluídos e refatorados.<br>
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
