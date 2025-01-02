interface Heroe {
  id: string
  name: string
  age: number
  saludar: () => void
}

const heroe: Heroe = {
  id: '1',
  name: 'Spiderman',
  age: 21,
  saludar: () => console.log("hola")
}




interface Producto {
  id: number,
  nombre: string,
  precio: number
}

interface CarritoDeCompras{
  totalPrice: number,
  productos: Producto[]
}

const carrito: CarritoDeCompras = {
  totalPrice: 100,
  productos: [
    {
      id: 1,
      nombre: "llogur",
      precio: 3
    }
  ]
}


