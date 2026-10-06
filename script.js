const gridAtores = document.getElementById("gridAtores");
const mensagem = document.getElementById("mensagem");
const contador = document.getElementById("contador");

// Renderiza os atores e atrizes em cards
function renderizarAtores(lista) {
    gridAtores.innerHTML = "";

    contador.textContent = lista.length;

    if (lista.length === 0) {
        mensagem.textContent = "Nenhum ator ou atriz encontrado para essa busca.";
        return;
    }

    mensagem.textContent = "";

    lista.forEach((ator, index) => {
        const card = document.createElement("article");
        card.className = "card";

        const dataNascimento = ator.nascimento.split("-").reverse().join("/");

        card.innerHTML = `
            <div class="card-image">
                <img src="${ator.foto}" alt="Foto de ${ator.nome}">
                <span class="card-number">${String(index + 1).padStart(2, "0")}</span>
            </div>

            <div class="card-info">
                <h2>${ator.nome}</h2>

                <div class="info-row">
                    <span>PAÍS</span>
                    <span>${ator.pais}</span>
                </div>

                <div class="info-row">
                    <span>NASCIMENTO</span>
                    <span>${dataNascimento}</span>
                </div>
            </div>
        `;

        gridAtores.appendChild(card);
    });
}

// Filtra pelo nome usando oninput + filter() + includes()
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

// Exibe todos os atores ao abrir a página
renderizarAtores(atores);
