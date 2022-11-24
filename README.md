## Tecnologias utilizadas
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![Mocha](https://img.shields.io/badge/-mochawesome-%238D6748?style=for-the-badge&logo=mocha&logoColor=white)


• **NodeJS** *(Ambiente de execução Javascript)*
<br/>
• **NPM** *(Gerenciador de Pacotes)*
<br/>
• **JavaScript** *(Linguagem de desenvolvimento)*
<br/>
• **Cypress** *(Framework de teste)*
<br/>
• **Mochawesome** *(Reporter personalizado para estrutura de testes Javascript)*

## Pre requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

• [Git](https://git-scm.com/)

• [Node.js](https://nodejs.org/en/)

## Clone para Execução

Clone este repositório para sua máquina local usando comando abaixo:

```
$ git clone https://github.com/JhenniferJS/challenge_QA_api.git
```

### Execução na interface

Acessar a raiz do repositório
```
$ cd /{diretorio}/challenge_QA_api
```
Execute comando para instalar as dependências

```
npm install
```

Execute comando para abrir a UI do Cypress
```
npm run cy:open
```

Na UI do Cypress, clicar na opção `tests.spec.js`

### Gerar relatório Mochawesome

Execute comando para executar os testes em modo Headless
```
npm run cy:run
```
Acessar o relatório HTML no diretório

```
challenge_QA_api/mochawesome-report/mochawesome.html
```