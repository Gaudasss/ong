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

O **Mãos Solidárias** centraliza essas informações em um site único, dividido em páginas temáticas, para que doadores, voluntários e parceiros encontrem rapidamente o que precisam:

| Página | O que resolve |
| --- | --- |
| **Início** | Visão geral da ONG, estatísticas de impacto e campanhas em destaque. |
| **Sobre** | História, missão e valores da instituição — dá confiança a quem vai doar. |
| **Campanhas** | Lista de campanhas ativas com progresso de arrecadação, filtráveis por categoria. |
| **Como Ajudar** | Chave PIX para doação financeira, pontos de coleta de itens e formulário de cadastro de voluntários. |
| **Contato** | Canal direto para dúvidas, parcerias e visitas. |

## Funcionalidades

- Layout responsivo dividido em componentes reutilizáveis (cabeçalho, rodapé, cards de campanha, cards de estatística);
- Estilização de texto (tipografia, hierarquia de títulos, cores e estados de hover/foco);
- Estilização de imagens (ilustrações em SVG com `object-fit`, `border-radius`, sombras e efeito de zoom no hover);
- Layouts construídos inteiramente com **Flexbox** (cabeçalho, cards, formulários, rodapé) e **CSS Grid** na grade de campanhas;
- Navegação entre páginas com **React Router**;
- Componentes com **estado** (`useState`) no filtro de campanhas por categoria e nos formulários controlados de voluntariado e contato, incluindo mensagem de sucesso ao enviar;
- Menu de navegação responsivo (menu "hambúrguer" em telas menores).

## Tecnologias utilizadas

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/) (build tool e dev server)
- [React Router](https://reactrouter.com/) (roteamento entre páginas)
- CSS puro (variáveis CSS, Flexbox e Grid, sem frameworks de estilização)

## Estrutura do projeto

```
src/
├── assets/illustrations/   # Ilustrações SVG usadas no site
├── components/             # Componentes reutilizáveis (Header, Footer, CampaignCard, StatCard, HelpCard)
├── data/                   # Dados mockados das campanhas
├── pages/                  # Páginas da aplicação (Home, Sobre, Campanhas, ComoAjudar, Contato)
├── App.jsx                 # Definição das rotas
├── main.jsx                # Ponto de entrada da aplicação
└── index.css                # Estilos globais e variáveis de tema
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
