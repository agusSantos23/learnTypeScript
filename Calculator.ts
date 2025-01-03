let money = 1000

function playTheGame(money: number): never | number {

  const actionRandom: number = Math.floor(Math.random() * 4) + 1
  console.log("Accion:",actionRandom)
  
  switch (actionRandom) {
    case 1:
      return money + 1000
    
    case 2:
      return money - 1000
    
    case 3:
      return money * 1000
    
    case 4:
      return money / 1000
  
    default:
      throw new Error("Error game");
      
  }
}

while(money > 0 && money < 1000000){
  console.log(money)
  money = playTheGame(money)
}

if (money <= 0) {
  console.log("Has perdido:", money)
  
} else {
  console.log("Has ganado:", money)
  
}