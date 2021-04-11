let nCards = 0
while(nCards<4 || nCards>14 || nCards%2==1){
    alert("Digite um número par entre 4 e 14!")
    nCards = prompt("Com quantas cartas você deseja jogar?")
}
let listOfCards = document.querySelector(".cards")

for(let i=0; i<nCards; i++){
    listOfCards.innerHTML += `<li class="card">
                                <div class="front-face face">
                                    <img src="imgs/front.png"/>
                                </div>
                                <div class="back-face face">
                                    <img src="imgs/explodyparrot.gif"/>
                                </div>
                            </li>`
}
