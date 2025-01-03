type authorType = 'admin' | 'developer' | 'editor'

interface Person {
  name: string
  lastName: string
  role: [number, authorType]
}

interface Post {
  id: number
  title: string
  createdAt: string
  author: Person
}


const admin: Person = {
  name: 'Jhon',
  lastName: 'Smith',
  role: [1, 'admin'],
}

const developer: Person = {
  name: 'James',
  lastName: 'Johnson',
  role: [2, 'developer'],
}

const editor: Person = {
  name: 'Emily',
  lastName: 'Brown',
  role: [3, 'editor'],
}

const Posts: Post[] = [
  {
    id: 1,
    title: 'learn TypeScript',
    createdAt: '03/03/2024',
    author: admin
  },
  {
    id: 2,
    title: 'learn JavaScript',
    createdAt: '04/03/2024',
    author: developer
  },
  {
    id: 3,
    title: 'learn Python',
    createdAt: '05/03/2024',
    author: editor
  }
]

const postLog = {}

function isAdmin(person){
  
  const [role, roleName, ...rest] = person.role

  return role === 1 && roleName === 'admin'
}

Posts.forEach(post => {
  if (post.author.role[0] === 1 && post.author.role[1] === 'admin') {
    console.log("El mensejae a sido editado")
    post.title += "(edited)"
  } else {
    console.log(`El mensejae no a sido editado porque ${post.author.name} ${post.author.lastName} no tiene permisos`)
    
  }
})