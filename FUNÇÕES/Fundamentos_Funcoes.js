// {}
// FUNÇÃO exemplo 1
function nome(){    
    console.log("Jeandra")
}
nome()

//Loop da função
for(let i=0;i<5;i++) {
    nome()
    soma2_10()
}

//função exemplo 2
function soma2_10() {
    let n1= 2
    let n2= 10
    let soma= n1+n2
    console.log(soma)
}
//soma2_10()

// função exemplo 3
function mudarTexto() {
    let d1= document.getElementById("d1")
    let d2= document.getElementById("d2")
    let d3= document.getElementById("d3")
    d1.innerHTML=("Jeandra")
    d2.innerHTML=("Cristina")
    d3.innerHTML=("Silva")
}
//mudarTexto()