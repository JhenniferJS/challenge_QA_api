[![CI](https://github.com/JhenniferJS/challenge_QA_api/actions/workflows/main.yml/badge.svg)](https://github.com/JhenniferJS/challenge_QA_api/actions/workflows/main.yml)

## Tecnologias utilizadas
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![Mocha](https://img.shields.io/badge/-mochawesome-%238D6748?style=for-the-badge&logo=mocha&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)


• **NodeJS** *(Ambiente de execução Javascript)*
<br/>
• **NPM** *(Gerenciador de Pacotes)*
<br/>
• **JavaScript** *(Linguagem de desenvolvimento)*
<br/>
• **Cypress** *(Framework de teste)*
<br/>
• **Mochawesome** *(Reporter personalizado para estrutura de testes Javascript)*
<br/>
• **Postman** *(Framework de teste)*

## Testes de API manuais - Postman

Para a realização dos teste manuais de API, foi utilizada a ferramenta Postman.

A Collection desenvolvida se encontra no diretório: 
```
challenge_QA_api/postman-collection
```
Esta possui cenários de testes de sucesso e falha, sinalizando alguns bugs encontrados.

### Execução

Para executar os testes, é necessário importar a Collection no Postman e executar as requisições desejadas.

## Testes de API automatizados - Cypress

Para a realização dos teste automatizados, foi utilizada a ferramenta Cypress.

No desenvolvimento, foram selecionados alguns cenários de sucesso e de falha como exemplo.

### Pre requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

• [Git](https://git-scm.com/)

• [Node.js](https://nodejs.org/en/)

### Clone para Execução

Clone este repositório para sua máquina local usando comando abaixo:

```
$ git clone https://github.com/JhenniferJS/challenge_QA_api.git
```

### Intalação de dependências

Acessar a raiz do repositório
```
$ cd /{diretorio}/challenge_QA_api
```
Execute comando para instalar as dependências

```
npm install
```

### Execução na interface

Execute comando para abrir a UI do Cypress
```
npm run cy:open
```

Na UI do Cypress, clicar na opção `tests.spec.js`

### Execução em modo headless

Execute comando para executar os testes em modo headless
```
npm run cy:run
```

### Gerar relatório Mochawesome

O relatório HTML é gerado quando os testes são executados em modo headless

É possível acessá-lo pelo diretório

```
challenge_QA_api/mochawesome-report/mochawesome.html
```