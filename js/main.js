const form = document.getElementById("novoItem")
const formLista = document.getElementById("form-lista")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    // console.log(e)
    // console.log(e.target.elements['nome'].value)
    // console.log(e.target.elements['quantidade'].value)

    const formNome = e.target.elements['nome'].value
    const formQuan = e.target.elements['quantidade'].value
    criaElementos(formNome, formQuan)
    
    e.target.elements['nome'].value = ""
    e.target.elements['quantidade'].value = ""

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

    // return criaLista
}