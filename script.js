const API_URL = 'https://bibliotech-api-tnjq.onrender.com';

async function carregarLivros() {
    const resposta = await fetch(`${API_URL}/livros`);
    const livros = await resposta.json();
    exibirTabela(livros);
}

function exibirTabela(livros) {
    const corpo = document.querySelector("#tabela tbody");
    corpo.innerHTML = "";

    livros.forEach(livro => {
        const linha = document.createElement("tr");

        linha.innerHTML = `
            <td>${livro.id}</td>
            <td>${livro.titulo}</td>
            <td>${livro.autor}</td>
            <td>${livro.editora}</td>
            <td>${livro.genero}</td>
            <td>${livro.ano_publicacao}</td>
            <td>
                <button onclick="editarLivro(${livro.id})">📝</button>
                <button onclick="excluirLivro(${livro.id})">🗑️</button>
            </td>
        `;

        corpo.appendChild(linha);
    });
}

function ordenarTitulo(crescente) {
    const corpo = document.querySelector("#tabela tbody");
    const linhas = Array.from(corpo.children);

    linhas.sort((a, b) => {
        const tituloA = a.children[1].textContent.toLowerCase();
        const tituloB = b.children[1].textContent.toLowerCase();
        return crescente ? tituloA.localeCompare(tituloB) : tituloB.localeCompare(tituloA);
    });

    corpo.innerHTML = "";
    linhas.forEach(linha => corpo.appendChild(linha));
}

function ordenarAno(crescente) {
    const corpo = document.querySelector("#tabela tbody");
    const linhas = Array.from(corpo.children);

    linhas.sort((a, b) => {
        const anoA = parseInt(a.children[5].textContent);
        const anoB = parseInt(b.children[5].textContent);
        return crescente ? anoA - anoB : anoB - anoA;
    });

    corpo.innerHTML = "";
    linhas.forEach(linha => corpo.appendChild(linha));
}

document.getElementById("filtro").addEventListener("input", function () {
    const filterText = this.value.toLowerCase();
    const rows = document.querySelectorAll("#tabela tbody tr");

    rows.forEach(row => {
        // Pega o texto de todas as células (exceto a de ações)
        const cellsText = Array.from(row.children)
            .slice(1, 6) // pega colunas: título, autor, editora, gênero, ano
            .map(td => td.textContent.toLowerCase())
            .join(" ");
        row.style.display = cellsText.includes(filterText) ? "" : "none";
    });
});

carregarLivros();

document.getElementById("adicionarLivroBtn").addEventListener("click", function () {
    const tabela = document.querySelector("#tabela tbody");

    const novaLinha = document.createElement("tr");

    novaLinha.innerHTML = `
        <td></td> <!-- ID será gerado automaticamente -->
        <td><input type="text" name="titulo"></td>
        <td><input type="text" name="autor"></td>
        <td><input type="text" name="editora"></td>
        <td><input type="text" name="genero"></td>
        <td><input type="number" name="ano_publicacao"></td>
        <td><button onclick="salvarLivro(this)">OK</button></td>
    `;

    tabela.appendChild(novaLinha);
})

async function salvarLivro(btn) {
    const linha = btn.closest("tr");
    const livro = {
        titulo: linha.querySelector('input[name="titulo"]').value,
        autor: linha.querySelector('input[name="autor"]').value,
        editora: linha.querySelector('input[name="editora"]').value,
        genero: linha.querySelector('input[name="genero"]').value,
        ano_publicacao: parseInt(linha.querySelector('input[name="ano_publicacao"]').value)
    };

    const resposta = await fetch(`${API_URL}/livros`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(livro)
    });

    if (resposta.ok) {
        carregarLivros();
    } else {
        alert("Error saving book");
    }
}

async function excluirLivro(id) {
    const confirmacao = confirm("Are you sure you want to delete this book?");
    if (!confirmacao) return;

    const resposta = await fetch(`${API_URL}/livros/${id}`, {
        method: "DELETE",
    });

    if (resposta.ok) {
        carregarLivros();
    } else {
        alert("Error deleting book!");
    }
}

async function editarLivro(id) {
    const linha = Array.from(document.querySelectorAll("#tabela tbody tr"))
        .find(tr => tr.firstElementChild.textContent == id);

    if (!linha) return;

    const tds = linha.querySelectorAll("td");
    const [ , title, author, publisher, genre, year ] = Array.from(tds).map(td => td.textContent);

    // Substitui por inputs editáveis
    linha.innerHTML = `
        <td>${id}</td>
        <td><input type="text" name="titulo" value="${title}"></td>
        <td><input type="text" name="autor" value="${author}"></td>
        <td><input type="text" name="editora" value="${publisher}"></td>
        <td><input type="text" name="genero" value="${genre}"></td>
        <td><input type="number" name="ano_publicacao" value="${year}"></td>
        <td>
            <button onclick="salvarEdicaoLivro(this, ${id})">💾</button>
            <button onclick="carregarLivros()">❌</button>
        </td>
    `;
}

async function salvarEdicaoLivro(btn, id) {
    const linha = btn.closest("tr");
    const livro = {
        titulo: linha.querySelector('input[name="titulo"]').value,
        autor: linha.querySelector('input[name="autor"]').value,
        editora: linha.querySelector('input[name="editora"]').value,
        genero: linha.querySelector('input[name="genero"]').value,
        ano_publicacao: parseInt(linha.querySelector('input[name="ano_publicacao"]').value)
    };

    const resposta = await fetch(`${API_URL}/livros/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(livro)
    });

    if (resposta.ok) {
        carregarLivros();
    } else {
        alert("Error editing book!");
    }
}