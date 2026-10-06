# 🎬 CinePeople — Atores & Atrizes

<div align="center">

### Catálogo interativo de atores e atrizes

Projeto desenvolvido em **HTML, CSS e JavaScript** para o segundo CheckPoint, com foco em manipulação de arrays, renderização dinâmica de elementos e filtragem de dados em tempo real.

</div>

---

## 📌 Sobre o projeto

O **CinePeople** é uma aplicação web que apresenta um catálogo de atores e atrizes a partir de um **array de objetos JavaScript** disponibilizado no arquivo `dados.js`.

A aplicação permite visualizar os dados em um grid de cards e realizar uma busca pelo nome do ator ou atriz. O resultado é atualizado automaticamente enquanto o usuário digita.

O projeto foi desenvolvido seguindo os requisitos propostos para o **CheckPoint 02**.

---

## ✨ Funcionalidades

- 🎭 Exibição de todos os atores e atrizes cadastrados.
- 🖼️ Cards com imagem dos artistas.
- 👤 Nome do ator ou atriz.
- 🌎 País de origem.
- 📅 Data de nascimento.
- 🔎 Busca por nome em tempo real.
- 🔢 Contador de resultados encontrados.
- 🚫 Mensagem quando nenhum resultado é encontrado.
- ✨ Animações e efeitos de interação.
- 📱 Layout responsivo para diferentes tamanhos de tela.
- 🌙 Interface moderna com tema inspirado em plataformas de cinema.

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Utilização |
|---|---|
| **HTML5** | Estrutura da aplicação |
| **CSS3** | Estilização, responsividade e animações |
| **JavaScript** | Lógica, renderização e filtragem |
| **JSON / Array de objetos** | Armazenamento dos dados dos artistas |
| **Git & GitHub** | Versionamento e publicação do projeto |

---

## 🔍 Sistema de busca

A pesquisa é realizada conforme o usuário digita no campo de busca.

O projeto utiliza os recursos solicitados na atividade:

- `oninput`
- `filter()`
- `includes()`

Exemplo utilizado no projeto:

```javascript
function filtrarAtores() {
    const texto = document
        .getElementById("campoBusca")
        .value
        .toLowerCase()
        .trim();

    const resultado = atores.filter(ator =>
        ator.nome.toLowerCase().includes(texto)
    );

    renderizarAtores(resultado);
}
```

Dessa forma, ao digitar parte do nome de um artista, somente os cards correspondentes são exibidos.

---

## 📂 Estrutura do projeto

```text
Checkpoint_Atores_Estilizado/
│
├── 📄 index.html
├── 🎨 style.css
├── ⚙️ script.js
├── 📊 dados.js
└── 📖 README.md
```

### `index.html`

Responsável pela estrutura da página, incluindo:

- Cabeçalho;
- Título;
- Campo de busca;
- Área dos cards;
- Contador de resultados;
- Rodapé.

### `style.css`

Responsável pela identidade visual do projeto:

- Tema escuro;
- Cores e tipografia;
- Grid responsivo;
- Cards;
- Hover;
- Animações;
- Responsividade para dispositivos móveis.

### `script.js`

Responsável pela lógica da aplicação:

- Renderização dos atores;
- Criação dos cards;
- Formatação da data;
- Filtragem pelo nome;
- Atualização do contador.

### `dados.js`

Contém o array de objetos com os dados dos atores e atrizes utilizados pela aplicação.

---

## 🚀 Como executar

### 1. Clone o repositório

```bash
git clone https://github.com/SEU-USUARIO/Checkpoint-Atores.git
```

### 2. Acesse a pasta

```bash
cd Checkpoint-Atores
```

### 3. Abra o projeto

Abra o arquivo:

```text
index.html
```

em qualquer navegador moderno.

> Não é necessário instalar dependências ou utilizar um servidor para executar a versão básica do projeto.

---

## 🖥️ Demonstração

### Página inicial

A página apresenta todos os atores e atrizes cadastrados em um grid de cards.

### Filtro aplicado

Ao digitar um nome no campo de pesquisa, os resultados são filtrados automaticamente.

---

## 📸 Screenshots

Adicione aqui os dois snapshots solicitados no CheckPoint:

### Página inicial

> `screenshots/inicio.png`

### Filtro aplicado

> `screenshots/filtro.png`

---

## 🎯 Objetivos acadêmicos

Este projeto foi desenvolvido com o objetivo de praticar:

- Manipulação de arrays e objetos;
- Funções JavaScript;
- Eventos de interação;
- `filter()` e `includes()`;
- Manipulação do DOM;
- Criação dinâmica de elementos HTML;
- Organização de arquivos em um projeto web;
- Estilização com CSS;
- Design responsivo;
- Versionamento utilizando Git e GitHub.

---

## 👨‍💻 Autor

**Gabriel Lima**

Projeto acadêmico — **CheckPoint 02**

---

## 📄 Licença

Este projeto foi desenvolvido para fins **acadêmicos e educacionais**.
