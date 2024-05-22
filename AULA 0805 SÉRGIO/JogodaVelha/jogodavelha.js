
let botao, quebralinha,Jogada=1

let velha = new Array(3)
for (let i = 0; i < velha.length; i++){
    velha[i]= new Array(3)
}

for (let i = 0; i < velha.length; i++){
    quebralinha= document.createElement('br')
    document.body.append(quebralinha)
    for (let j = 0; j < velha[i].length; j++){
        botao= document.createElement('button')
        botao.setAttribute('type', 'button')
        botao.setAttribute('id', 'bt' + i + "" + j)
        botao.setAttribute('class', 'btjogo' + i)
        botao.setAttribute('onclick', 'marca(' + i + "," + j + ")")
        botao.append(document.createTextNode(""))
        document.body.append(botao)
    }
}

function marca(linha, coluna){
    MarcaCasa("bt" + linha + "" + coluna)
}

function MarcaCasa(nomeBotao){
    if (Jogada % 2 == 0){
    document.getElementById(nomeBotao).innerText = "O"
    document.getElementById(nomeBotao).style.color= "black"
    }else{
    document.getElementById(nomeBotao).innerText = "X"
    document.getElementById(nomeBotao).style.color= "black"
    }
    document.getElementById(nomeBotao).disabled = true
    Jogada++
    if (Jogada>=5){
        encerrador()
    }
}

function encerrador(){
    if(
        document.getElementById("bt00").innerText == document.
        getElementById("bt01").innerText && document.getElementById
        ("bt01").innerText ==  document.getElementById("bt02").
        innerText && document.getElementById("bt00").innerText != "" ){
            alert("Jogo finalizado\nVencedor: " + document.getElementById("bt00").innerText)}

    if(
        document.getElementById("bt10").innerText == document.
        getElementById("bt11").innerText && document.getElementById
        ("bt11").innerText ==  document.getElementById("bt12").
        innerText && document.getElementById("bt10").innerText != "" ){
            alert("Jogo finalizado\nVencedor: " + document.getElementById("bt10").innerText)}
    if(
        document.getElementById("bt20").innerText == document.
        getElementById("bt21").innerText && document.getElementById
        ("bt21").innerText ==  document.getElementById("bt22").
        innerText && document.getElementById("bt20").innerText != "" ){
            alert("Jogo finalizado\nVencedor: " + document.getElementById("bt20").innerText)}

    if(
        document.getElementById("bt00").innerText == document.
        getElementById("bt10").innerText && document.getElementById
        ("bt10").innerText ==  document.getElementById("bt20").
        innerText && document.getElementById("bt00").innerText != "" ){
            alert("Jogo finalizado\nVencedor: " + document.getElementById("bt00").innerText)}

    if(
        document.getElementById("bt00").innerText == document.
        getElementById("bt10").innerText && document.getElementById
        ("bt10").innerText ==  document.getElementById("bt20").
        innerText && document.getElementById("bt00").innerText != "" ){
            alert("Jogo finalizado\nVencedor: " + document.getElementById("bt00").innerText)}
    if(
        document.getElementById("bt01").innerText == document.
        getElementById("bt11").innerText && document.getElementById
        ("bt11").innerText ==  document.getElementById("bt21").
        innerText && document.getElementById("bt01").innerText != "" ){
             alert("Jogo finalizado\nVencedor: " + document.getElementById("bt01").innerText)}
    if(
        document.getElementById("bt02").innerText == document.
        getElementById("bt12").innerText && document.getElementById
        ("bt12").innerText ==  document.getElementById("bt22").
        innerText && document.getElementById("bt02").innerText != "" ){
            alert("Jogo finalizado\nVencedor: " + document.getElementById("bt02").innerText)}
    if(
        document.getElementById("bt02").innerText == document.
        getElementById("bt11").innerText && document.getElementById
        ("bt11").innerText ==  document.getElementById("bt20").
         innerText && document.getElementById("bt02").innerText != "" ){
            alert("Jogo finalizado\nVencedor: " + document.getElementById("bt02").innerText)}
    if(
        document.getElementById("bt00").innerText == document.
        getElementById("bt11").innerText && document.getElementById
        ("bt11").innerText ==  document.getElementById("bt22").
        innerText && document.getElementById("bt22").innerText != "" ){
            alert("Jogo finalizado\nVencedor: " + document.getElementById("bt00").innerText)}
                        
}
