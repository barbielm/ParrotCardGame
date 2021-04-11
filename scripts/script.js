let nCards = 0
while(nCards<4 || nCards>14 || nCards%2==1){
    
    nCards = prompt("Com quantas cartas você deseja jogar?")
    if(nCards<4 || nCards>14 || nCards%2==1){
        alert("Digite um número par entre 4 e 14!")
    }
}