//Basic Types

const b: boolean = true

const s: string = 'String'

const n: number = 1


const ab: boolean[] = [true, false, true]

const as: string[] = ['a', 'b', 'c']

const an: number[] = [1, 2, 3]

let arrS: string[] = []

arrS.push("a")


const any: any = [false, 'b', 2]



// Advance Types

let t: [number, string | true] = [3, true]


type Hexadecimal = `#${string}`
const color: Hexadecimal = '#328484'

type PersonType = {
  name: string
  age?: number
}
const personOne: PersonType = {
  name: "Manuel"
}
const personTwo: PersonType = {
  name: "Manuel",
  age: 34
}


interface Car {
  model: string
  color: Hexadecimal
  age: number
  startUp(): boolean
}

const carOne: Car = {
  model: "Audi",
  color: "#423234",
  age: 12,
  startUp: () => {return true}
}


const myObject: Record<string, string> = {}

// No se sabe si se va a mutar o no
myObject.name = "Carlos"


type PersonName = {
  name: string
}

type PersonAge = {
  age: number
}

type PersonUnion = PersonName & PersonAge
const personThree: PersonUnion = {
  name: "Paco",
  age: 33
}


type scalePower = "minimum" | "medium" | "maximum"

const power: scalePower = "medium"

// Funtions

function hi(name: string): void {
  console.log("Hi,", name)
}

function bye(name: string): string  {
  return "Bye, " + name
}

const sum = (a: number, b?: number) => {
  return b ? a + b : null
}
sum(1,3) // 4
sum(1) // null



let functionTotal: Function
functionTotal = hi
//functionTotal = "" //Da error por que no asignas una funcion 


function generadoError(message: string): never {
  throw new Error(message)
}


// POO
type genderType = 'M' | 'F'

class Person {
  gender: genderType
  readonly age: number
  static race = 'human'

  constructor(gender: genderType, age: number){
    this.gender = gender
    this.age = age
  }


  public sayHello(){
    console.log("Hi my gender is", this.gender)
  }

  setGender(gender: genderType){
    this.gender = gender
  }
}

class Developer extends Person{
  language: string

  constructor(language: string, gender: genderType, age:number){
    super(gender,age)
    this.language = language
  }
}

const person = new Person('M', 22)
const dev = new Developer('js','F', 18, )


// generics & casting

function indentity<T, Z>(arg: T, ar: Z): T {
  return arg
}

const str = indentity<string, number>('one', 3)
const num = indentity<number, string>(3, 'a')


interface Person {
  name: string
}

const object = {
  name: 'John'
} as Person

const item = 'hi' as any as number
