const form = document.getElementById("novoItem")
const formLista = document.getElementById("form-lista")
// const itens = []
const itens = JSON.parse(localStorage.getItem("itens")) || []

itens.forEach((e) => {
    // console.log(e.nome, e.quantidade)
    criaElementos(e)
});

form.addEventListener("submit", (e) => {
    e.preventDefault()
    // console.log(e)
    // console.log(e.target.elements['nome'].value)
    // console.log(e.target.elements['quantidade'].value)

    const nome = e.target.elements['nome']
    const quantidade = e.target.elements['quantidade']

    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    criaElementos(itemAtual)

    itens.push(itemAtual)

    localStorage.setItem("itens", JSON.stringify(itens))

    nome.value = ""
    quantidade.value = ""

})

function criaElementos (item) {
    const criaLista = document.createElement("li")
    const nuStrong = document.createElement("strong")
    const textLista = document.createTextNode(item.nome)
    criaLista.className = "item"
    nuStrong.textContent = item.quantidade
    criaLista.appendChild(nuStrong)
    criaLista.appendChild(textLista)
    
    formLista.appendChild(criaLista)

    
    // return criaLista
}