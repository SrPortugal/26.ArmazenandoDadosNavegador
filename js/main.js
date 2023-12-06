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

    const nome = e.target.elements['nome']
    const quantidade = e.target.elements['quantidade']

    const existe = itens.find( e => e.nome === nome.value)

    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    if (existe){
        itemAtual.id = existe.id

        atualizaElemento(itemAtual)
    } else {
        itemAtual.id = itens.length
        criaElementos(itemAtual)
        itens.push(itemAtual)
    }


    // localStorage.setItem("itens", JSON.stringify(itens))
    atualizaLocalStorage(itens)

    nome.value = ""
    quantidade.value = ""

})

function criaElementos (item) {
    const criaLista = document.createElement("li")
    const nuStrong = document.createElement("strong")
    const textLista = document.createTextNode(item.nome)
    criaLista.className = "item"
    nuStrong.textContent = item.quantidade
    nuStrong.setAttribute("data-id", item.id)
    criaLista.appendChild(nuStrong)
    criaLista.appendChild(textLista)

    formLista.appendChild(criaLista)
}

function atualizaElemento (e) {

    itens[e.id].quantidade = e.quantidade
    document.querySelector(`[data-id="${e.id}"]`).textContent = e.quantidade

    atualizaLocalStorage(itens)
    
}

function atualizaLocalStorage (e) {
    localStorage.setItem("itens", JSON.stringify(e))
}
