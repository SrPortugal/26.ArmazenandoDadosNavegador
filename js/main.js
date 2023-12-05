const form = document.getElementById("novoItem")
const formLista = document.getElementById("form-lista")
const itens = []
form.addEventListener("submit", (e) => {
    e.preventDefault()
    // console.log(e)
    // console.log(e.target.elements['nome'].value)
    // console.log(e.target.elements['quantidade'].value)

    const nome = e.target.elements['nome']

    const quantidade = e.target.elements['quantidade']

    criaElementos(nome.value, quantidade.value)
    
    nome.value = ""
    quantidade.value = ""

})

function criaElementos (nome, quant) {
    const criaLista = document.createElement("li")
    const nuStrong = document.createElement("strong")
    const textLista = document.createTextNode(nome)
    criaLista.className = "item"
    nuStrong.textContent = quant
    criaLista.appendChild(nuStrong)
    criaLista.appendChild(textLista)
    
    formLista.appendChild(criaLista)

    const itemAtual = {
        "nome": nome,
        "quantidade": quant
    }
    itens.push(itemAtual)
    localStorage.setItem("item", JSON.stringify(itens))
    
    // return criaLista
}