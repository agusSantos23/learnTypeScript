interface ContainerInterface {
  capacity: number
  className: string
  items: string[]

  addItem(item:string): boolean
}

class Container implements ContainerInterface{
  capacity: number
  className: string
  items: string[]

  constructor(capacity: number, className: string){
    this.capacity = capacity
    this.className = className
    this.items = []
  }

  addItem(item: string): boolean{
    if (this.items.length < this.capacity) {
      
      this.items.push(item)
      console.log(`Objeto ${item} agregado, elementos guardados en ${this.className} son los siguientes: ${this.items.join(', ')}.`);
      return true

    } else {

      console.log(`Objeto ${item} no a sido agregado, elementos guardados en ${this.className} son los siguientes: ${this.items.join(', ')}.`);
      return false
    }
  }

}

class BackPack extends Container {
  constructor(){
    super(4,"Backpack")
  }
}

class Bag extends Container {
  constructor(){
    super(2,"Bag")
  }
}

const backPack = new BackPack
const bagOne = new Bag
const bagTwo = new Bag

let full: boolean = false

const floorObjects = [
  "Moneda de oro",
  "Moneda de plata",
  "Pocion de salud",
  "Pocion de mana",
  "Palo de madera",
  "Espada oxidada",
  "Botas de cuero",
  "Escudo viejo",
  "Pergamino magico",
  "Antorcha",
  "Pan",
  "Manzana",
  "Botella de agua",
  "Piedra",
  "Mineral de hierro"
]


while (!full) {
  const object: string = floorObjects[Math.floor(Math.random() * 15)]

  if (!backPack.addItem(object)) {
    
    if (!bagOne.addItem(object)) {
      
      if (!bagTwo.addItem(object)) {
        full = true
      }
    }
  }
}

console.log("Has perdido te has llenado de objetos")
