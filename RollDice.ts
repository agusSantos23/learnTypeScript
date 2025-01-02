function rollTheDice(name: string, trys: number ) {
  let result: boolean[] = []

  for (let i = 1; i <= trys; i++) {
    
    Math.floor(Math.random() * 6) + 1 < 5 ? result.push(true) : result.push(false)
  }

  return `${name} ${result}`
}

console.log(rollTheDice("Agus", 5));

