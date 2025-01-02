
function saludarName({name}: {name:string}) {
  console.log("Hola,", name)
  
}

saludarName( {name: "Paco"} )

//Tipado de ArrowFunction
const sumar = (a: number, b: number): number =>{
  return a + b
}



const sayHiFunction = (fn: (name: string) => void) =>{
  fn("Manuel")
}

sayHiFunction((name: string) => console.log("Hola,", name))



function throwError(message: string): never {
  throw new Error(message)
}