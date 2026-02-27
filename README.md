# Star Wars Spaceships Showcase

Bem-vindo ao repositório do projeto **Star Wars Spaceships Showcase**! Este é um projeto desenvolvido com **Next.js** e **TypeScript**, criado para explorar o universo de espaçonaves de Star Wars, permitindo visualizar detalhes de naves icônicas e filtrá-las por categorias.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

-   **[Next.js 15+](https://nextjs.org/)**: Framework React para produção.
-   **[React](https://react.dev/)**: Biblioteca para construção de interfaces de usuário.
-   **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática.
-   **[Tailwind CSS v4](https://tailwindcss.com/)**: Framework CSS utilitário para estilização rápida e responsiva.
-   **ESLint**: Ferramenta de linting para manter a qualidade do código.

## ✨ Funcionalidades

-   **Página Inicial**: Apresentação visual com navegação para as seções principais.
-   **Catálogo de Espaçonaves**: Listagem de diversas naves famosas da saga Star Wars.
-   **Detalhes da Nave**: Página dinâmica com informações detalhadas sobre cada nave (modelo, descrição, imagem).
-   **Categorias**: Filtragem de naves por tipo (ex: Starfighter, Freighter, Capital Ship).
-   **Design Responsivo**: Layout adaptável para diferentes tamanhos de tela.

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

-   [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
-   Gerenciador de pacotes (npm, yarn, pnpm ou bun)

## 🔧 Instalação e Execução

Siga os passos abaixo para rodar o projeto localmente:

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/seu-usuario/03-pagina-starwars.git
    cd 03-pagina-starwars
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    # ou
    yarn install
    # ou
    pnpm install
    # ou
    bun install
    ```

3.  **Execute o servidor de desenvolvimento:**

    ```bash
    npm run dev
    # ou
    yarn dev
    # ou
    pnpm dev
    # ou
    bun dev
    ```

4.  **Acesse o projeto:**

    Abra seu navegador e visite [http://localhost:3000](http://localhost:3000) para ver o resultado.

## 📂 Estrutura do Projeto

A estrutura de pastas principal é organizada da seguinte forma:

```
03-pagina-starwars/
├── app/                # Rotas e páginas do Next.js (App Router)
│   ├── categories/     # Páginas de categorias
│   ├── spaceships/     # Páginas de listagem e detalhes de naves
│   ├── layout.tsx      # Layout principal da aplicação
│   └── page.tsx        # Página inicial
├── public/             # Arquivos estáticos (imagens, ícones)
├── src/
│   └── data/           # Dados JSON das espaçonaves
└── ...arquivos de configuração
```

## 📝 Licença

Este projeto é destinado a fins de estudo e aprendizado.

---

Desenvolvido com 💙 durante o curso da **OneBitCode**.
