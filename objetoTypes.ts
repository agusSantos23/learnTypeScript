type HexadecimalColor = `#${string}`

const color: HexadecimalColor = '#fff'

type Email = `${string}@${string}.${string}`

const correo: Email = "agustin@gmail.com"




type HeroId = `${string}-${string}-${string}-${string}-${string}`

// Union Type
type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal'

type HeroBasicInfo = {
  name: string,
  age: number,
}

type HeroProperties = {
  readonly id?: HeroId,
  isActive?: boolean,
  heroScale?: HeroPowerScale
}

type Hero = HeroBasicInfo & HeroProperties


function createHero(basic: HeroBasicInfo): Hero {
  const { name, age } = basic
  
  return { id: crypto.randomUUID(), name, age, isActive: true}
}

const thor = createHero({name:'Thor', age:1500})

//thor.id?.toString
//thor.id = 23904832 //Pasa a ser un valor de solo lectura




