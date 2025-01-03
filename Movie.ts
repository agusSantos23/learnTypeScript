
type Name = {
  name: string
}

type MoviesFull = {
  title: string
  director?: Name
  actors?: Name[]
}

const moviesFull: MoviesFull[] = [
  {
    title: 'Movie 1',
    director: { name: 'Carlos Ramirez' },
    actors: [
      { name: 'Actor one' },
      { name: 'Actor two' }
    ]
  },
  {
    title: 'Movie 2',
    director: { name: 'Luis Perez' }
  },
  {
    title: 'Movie 3',
    actors: [
      { name: 'Actor one' },
      { name: 'Actor two' }
    ]
  }
]

function getDirector(movie: MoviesFull): Name | string {
  return movie?.director ? movie?.director : "Unknown Director"
}

function getActors(movie: MoviesFull): Name[] | string {
  return movie?.actors ? movie?.actors : "Unknown Actor"
}


console.log(getDirector(moviesFull[0]))
console.log(getDirector(moviesFull[2]))
console.log(getActors(moviesFull[0]))
console.log(getActors(moviesFull[1]))


