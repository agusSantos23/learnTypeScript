function createArray<T>(items: T) {
  return items
}

let myNumArr = createArray([100,200,300])
let myStrArr = createArray(["100","200","300"])
let stringOrNumber = createArray([100,"200"])

console.log(myNumArr)
console.log(myStrArr)
console.log(stringOrNumber)

myNumArr.push(400)
myStrArr.push("400")
stringOrNumber.push("400")

console.log(myNumArr)
console.log(myStrArr)
console.log(stringOrNumber)


function isNumber<N>(value: N): boolean {
  return typeof value === "number"
}

function isString<S>(value: S): boolean {
  return typeof value === "string"
}

console.log(myNumArr.every(isNumber))
console.log(myNumArr.every(isString))
console.log(myStrArr.every(isNumber))
console.log(myStrArr.every(isString))
console.log(stringOrNumber.every((x) => isNumber(x)|| isString(x)))


function displayTupleType<N, S>([index, value]: [N, S], indexAsType: string, valueAsType: string){
  console.group("Tuple validation")
  
  console.log(typeof index === indexAsType)
  console.log(typeof value === valueAsType)
  
  console.groupEnd()
}

displayTupleType([3, "hola"], "string", "string")






