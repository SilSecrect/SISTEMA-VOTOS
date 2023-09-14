// function verificar() {
//     const nome = window.document.getElementById("fname")
//     const sobre = window.document.getElementById("lname")
//     const idade = window.document.getElementById("number")
//     const texto = window.document.getElementById("texto")
//     const resultado = (nome.value)
//     const resultado1 = (sobre.value)
//     const resultado2 = Number(idade.value)
//     texto.innerHTML += `Seu nome é ${resultado} ${resultado1}, sua idade é ${resultado2} `

//     if (resultado2 > 16) {
//         texto.innerText += ` voce  pode votar`
//     } else{
//         texto.innerText += ` voce nao  pode votar`
//     }
  
    
// }

function verificar() {
    const nome = window.document.getElementById("fname")
    const sobre = window.document.getElementById("lname")
    const idade = window.document.getElementById("number")
    const texto = window.document.getElementById("texto")
    const resultado = (nome.value)
    const resultado1 = (sobre.value)
    const resultado2 = Number(idade.value)
    

    if (resultado2 > 16) {
        alert(`Seu nome é ${resultado} ${resultado1}, sua idade é ${resultado2} VOCE PODE VOTAR`)
    } else{
        alert(`Seu nome é ${resultado} ${resultado1}, sua idade é ${resultado2}! VOCE NAO PODE VOTAR `)
    }
  
    
}
    const btn = document.querySelector("#refresh")
    btn.addEventListener("click", () => {
        location.reload()
    })