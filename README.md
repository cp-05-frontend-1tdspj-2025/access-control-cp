#  Checkpoint 05 - Página de Cadastro e Login
 
## Sobre o projeto
Esse projeto consiste no nosso Checkpoint 05 da matéria de **Front-end Design Engineering** da turma **1TDSPJ** ministrada pelo **Prof. Alexandre Carlos de Jesus** na **FIAP**
 
O objetivo do projeto é treinar o trabalho em equipe construindo uma aplicação web que permite cadastrar usuários e validar os cadastros em **Login**, onde verifica a existência e/ou a validação do usuário 

## Estrutura do Projeto

```bash
access-control-cp
│
└── src
│    ├── components
│    │   ├── Cabecalho
│    │   ├── Menu
│    │   └── Rodape
│    ├── img
│    ├── routes
│    │   ├── Cadastro
│    │   ├── Error
│    │   ├── Home
│    │   ├── Integrantes
│    │   └── Login
│    ├── types
│    ├── App.tsx
│    ├── globals.css
│    └── main.tsx
├── .gitignore
├── .env
├── db.json
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Como rodar o projeto
 
### 1. Clone o Repositório
 
Primeiro, clone este repositório para o seu ambiente local usando o terminal:
 
```bash
git clone https://github.com/cp-05-frontend-1tdspj-2025/access-control-cp.git
cd access-control-cp
```
### 2. Instale as dependências do projeto
Dentro da pasta do projeto, instale todas as dependências necessárias utilizando o npm (ou o seu gerenciador de pacotes preferido):
 
```bash
npm install
 
```
Este comando irá ler o arquivo package.json e baixar todas as bibliotecas listadas (como React, Vite, Tailwind CSS, etc.).

```bash 
npm i json-server
```
 
Esse comando irá baixar e instalar o json-server, necessário para rodar a API
 
### 3. Execute o Projeto
 
Após a instalação das dependências, inicie o servidor de desenvolvimento do Vite:
 
```bash
npm run dev
```
 
Em outro terminal, rode o comando 
 
```bash
npx json-server --watch db.json --port 3000
```
Esse comando irá rodar a API localmente e fará com que o projeto funcione corretamente
 
### 4. Acesse a Aplicação
 
O terminal mostrará uma mensagem indicando que o servidor está rodando. Geralmente, a aplicação estará disponível no seguinte endereço:
 
```
http://localhost:5173
```
 
Abra o seu navegador e acesse essa URL para ver o projeto em execução!

## Tecnologias Utilizadas
As tecnologias utilizadas no projeto foram: 
 
![NPM](https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![Tailwind CSS](https://statics.teams.cdn.office.net/evergreen-assets/safelinks/2/atp-safelinks.html)
 
## Integrantes do projeto
- Erik Miyasato - RM: 565771
- Hector Soria - RM: 565498
- João Leal - RM: 564361
- Gutemberg Rocha - RM: 562267
## Link do repositório
https://github.com/cp-05-frontend-1tdspj-2025/access-control-cp.git
