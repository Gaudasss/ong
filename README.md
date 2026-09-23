# Mãos Solidárias — Site institucional de uma ONG

Projeto da disciplina **Programação Web I** (Prof. Gustavo Miranda) — Universidade Federal de Alagoas (UFAL).

> Site institucional (mock) de uma ONG fictícia de arrecadação de doações e mobilização de voluntários, construído em **React** para resolver um problema real: a falta de um canal organizado, transparente e acessível para conectar doadores/voluntários às causas que uma associação sem fins lucrativos atende.

## Sumário

- [O problema](#o-problema)
- [A solução](#a-solução)
- [Funcionalidades](#funcionalidades)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Como executar localmente](#como-executar-localmente)
- [Scripts disponíveis](#scripts-disponíveis)
- [Autoria](#autoria)

## O problema

Pequenas ONGs e associações comunitárias costumam organizar suas campanhas de doação e o cadastro de voluntários apenas por grupos de WhatsApp e posts avulsos no Instagram. Isso gera:

- Falta de um lugar único onde qualquer pessoa possa ver **quais campanhas estão ativas** e o que cada uma precisa;
- Dificuldade para quem quer **doar dinheiro ou itens** saber como e onde fazer isso;
- Ausência de um **cadastro estruturado de voluntários**, dependendo de mensagens perdidas em grupos;
- Falta de transparência sobre o impacto e a história da instituição.

## A solução

O **Mãos Solidárias** é um site de página única (inspirado em plataformas como o [Vakinha](https://vakinha.org.br/)), dividido em seções acessíveis por um menu fixo no topo, para que doadores, voluntários e parceiros encontrem rapidamente o que precisam:

| Seção | O que resolve |
| --- | --- |
| **Início (hero)** | Chamada principal com foto de impacto e botões de ação. |
| **Números** | Estatísticas de impacto da ONG (famílias atendidas, voluntários, campanhas, anos de atuação). |
| **Sobre** | História e missão da instituição — dá confiança a quem vai doar. |
| **Campanhas** | Cards com as campanhas ativas, imagem, categoria e progresso de arrecadação. |
| **Como Ajudar** | Chave PIX para doação financeira, endereço para doação de itens e formulário de cadastro de voluntários. |
| **Contato** | Endereço, telefone e e-mail da ONG. |

## Funcionalidades

- Página dividida em seções via HTML semântico, cada uma com sua responsabilidade;
- Estilização de texto (tipografia, hierarquia de títulos, cores e estados de hover);
- Estilização de imagens (fotos reais com `object-fit`, `border-radius` e imagem de fundo com overlay no hero);
- Layout construído inteiramente com **Flexbox** (cabeçalho, cards de campanha, formulário, rodapé);
- Componentes reutilizáveis: `Header`, `Footer` e `CampaignCard` (repetido para cada campanha via `props`);
- Estado com `useState` no formulário de voluntariado (campos controlados + mensagem de sucesso ao enviar);
- Menu de navegação responsivo (menu "hambúrguer" em telas menores) com rolagem até a seção via âncoras.

## Tecnologias utilizadas

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/) (build tool e dev server)
- CSS puro (variáveis CSS e Flexbox, sem frameworks de estilização)
- Fotos livres de [Pexels](https://www.pexels.com/)

## Estrutura do projeto

```
src/
├── components/       # Componentes reutilizáveis (Header, Footer, CampaignCard)
├── data/             # Dados mockados das campanhas (título, imagem, meta, arrecadado...)
├── App.jsx           # Página única com todas as seções (hero, sobre, campanhas, como ajudar, contato)
├── main.jsx          # Ponto de entrada da aplicação
└── index.css         # Estilos globais, variáveis de tema e layout (Flexbox)
```

## Como executar localmente

Pré-requisitos: [Node.js](https://nodejs.org/) 18 ou superior.

```bash
# 1. Clone o repositório
git clone https://github.com/<seu-usuario>/ong-maos-solidarias.git
cd ong-maos-solidarias

# 2. Instale as dependências
npm install

# 3. Rode o servidor de desenvolvimento
npm run dev
```

O site ficará disponível em `http://localhost:5173`.

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento com hot reload. |
| `npm run build` | Gera a build de produção na pasta `dist/`. |
| `npm run preview` | Serve a build de produção localmente para testes. |

## Autoria

Projeto desenvolvido por **João Soares Costa** para a disciplina de Programação Web I, sob orientação do Prof. Gustavo Miranda — UFAL, 6º período.
