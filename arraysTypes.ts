const languages: (string | number)[] = []

languages.push("pais")
languages.push(4)


type CellValue = 'X' | 'O' | ''

type GameBoard = [
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue]
]

const gameBoard: GameBoard = [
  ['X', 'O', 'X'],
  ['X', 'X', 'O'],
  ['', 'O', 'O']
]