let nCards = 0

while(nCards<4 || nCards>14 || nCards%2==1){
    alert("Digite um número par entre 4 e 14!")
    nCards = prompt("Com quantas cartas você deseja jogar?")
}

const imagesList = []
const List = ["imgs/bobrossparrot.gif","imgs/explodyparrot.gif","imgs/fiestaparrot.gif","imgs/metalparrot.gif","imgs/revertitparrot.gif","imgs/tripletsparrot.gif","imgs/unicornparrot.gif"]
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

function verifyTurnedCard(){
    let cards = document.querySelectorAll(".card")
    for(let i=0; i<cards.length; i++){
        if(cards[i].querySelector(".front-face").style.transform === "rotateY(-180deg)"){
            return true
        }
    }
    return false
}

function turnCard(element){
    if(!verifyTurnedCard()){
        element.querySelector(".front-face").style.transform = "rotateY(-180deg)"
        element.querySelector(".back-face").style.transform = "rotateY(0deg)"
    }

}

function comparator() { 
	return Math.random() - 0.5; 
}