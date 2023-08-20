# Projeto Dashboard

## Objetivo

Colocar em prova habilidades em arquiterura limpa, codigo limpo, 
estrutura baseada em atomic design, roteamento e estilização utilizando Sass. 
Uma ideia bacana foi não utilizar componentes prontos, como os do material ui. 
Utilizando a IDE WebStorm da jetbrains, foquei em deixar o código livre de erros e warnings, assim como o console.


## Tecnologias

- React
- Sass
- Atomic Design
- React Router
- BEM

## Como rodar

- Clone o projeto
- Instale as dependencias com `yarn`
- Rode o projeto com `yarn start`
- [Acesse o projeto clicando aqui](https://dashboard-drab-alpha.vercel.app/)

## Logicas implementadas 

- [x] Controle de quantidade de palavras atraves da propriedade collapse, passada para o componente de Texto
- [x] Reaprovetamento de componentes
- [x] Controle de rotas pelo Id do Card
- [x] Filtrar por Título, Assunto, Tier (para teste coloquei apenas um Tier 30)
- [x] Componente de paginação
- [x] React Hooks
- [x] Estilização utilizando Icons Svg


## Estrutura de pastas

```
src
├── assets
│   ├── icons
├──componets
│   ├── atoms
│   ├── molecules
│   ├── organisms
│   ├── templates
│   ├── pages

```

## Observações

- Os dados tratados não vem de nenhuma api, está sendo utilizado um arquivo JS(mock.js) para simular uma api

## Autor

- [Linkedin](https://www.linkedin.com/in/luanafront/)
