let nCards = 0
let nRounds = 0
let lastTurnedCard
let id
setTimeout(askNumberOfCards,100)
function askNumberOfCards(){
    while(nCards<4 || nCards>14 || nCards%2==1){
        alert("Digite um número par entre 4 e 14!")
        nCards = prompt("Com quantas cartas você deseja jogar?")
    }
    sortCards()
    id = setInterval(timeCounter,1000)
}


const imagesList = []
const List = ["imgs/bobrossparrot.gif","imgs/explodyparrot.gif","imgs/fiestaparrot.gif","imgs/metalparrot.gif","imgs/revertitparrot.gif","imgs/tripletsparrot.gif","imgs/unicornparrot.gif"]
function sortCards(){
    List.sort(comparator)
    for(let i=0; i<=imagesList.length-(nCards/2); i++){
        List.pop()
    }
    for(let i=0; i<nCards; i++){
        imagesList.push(List[i%(nCards/2)])
    }
    imagesList.sort(comparator)
    const listOfCards = document.querySelector(".cards")
    for(let i=0; i<nCards; i++){
        listOfCards.innerHTML += `<li class="card" onclick="turnCard(this)">
                                    <div class="front-face face">
                                        <img src="imgs/front.png"/>
                                    </div>
                                    <div class="back-face face">
                                        <img src="${imagesList[i]}"/>
                                    </div>
                                </li>`
    }
}

function verifyTurnedCards(){
    let counter = 0
    let cards = document.querySelectorAll(".card")
    for(let i=0; i<cards.length; i++){
        if(cards[i].querySelector(".front-face").style.transform === "rotateY(-180deg)"){
            counter++
        }
    }
    return counter
}

function verifyMatchOfCards(element){
    let cards = document.querySelectorAll(".card")
    let counter=0
    for(let i=0; i<cards.length; i++){
        if(cards[i].querySelector(".back-face img").src === element.querySelector(".back-face img").src){
            if(cards[i].querySelector(".front-face").style.transform === "rotateY(-180deg)"){
                counter++
            }        
        }
    }
    return counter
}

function turnCard(element){
    if(verifyTurnedCards()===0){
        showCard(element)
    }
    else{
        if(verifyMatchOfCards(element)===1){
            showCard(element)
        }
        else if(verifyMatchOfCards(element)===0){
            if(verifyTurnedCards()%2===0){
                showCard(element)
            }
            else {
                showCard(element)
                setTimeout(hideCard,1000,element)
                setTimeout(hideCard,1000,lastTurnedCard)
            }
        } 
        
    }
    lastTurnedCard = element
    setTimeout(verifyEndOfGame,100)
}

function showCard(element){
    element.querySelector(".front-face").style.transform = "rotateY(-180deg)"
    element.querySelector(".back-face").style.transform = "rotateY(0deg)"
}
function hideCard(element){
    element.querySelector(".front-face").style.transform = "rotateY(0deg)"
    element.querySelector(".back-face").style.transform = "rotateY(180deg)"
}

function verifyEndOfGame(){
    nRounds++
    if(verifyTurnedCards()==nCards){
        let time = document.querySelector("span").innerText
        alert(`Você ganhou em ${nRounds} jogadas e demorou ${time} segundos!`)
        clearInterval(id)
        setTimeout(SetnextGame,100)
    }
}

function timeCounter(){
    document.querySelector("span").innerText++
}

function SetnextGame(){
    let answer = prompt("Deseja reiniciar a partida?")
    if(answer.toLocaleLowerCase()==="sim"){
        location.reload()
    }
}

function comparator() { 
	return Math.random() - 0.5; 
}