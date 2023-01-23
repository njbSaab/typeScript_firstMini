interface Person {
   name: string
   age: number
}

type PersonKyes = keyof Person // name | age


type User = {
   _id: number
   name: string
   email: string
   creat: Date
}


type UserKeysNoMeta = Exclude<keyof User, '_id' | 'createdAt'> // 'name' | 'email'
type UserKeysNoMeta = Pick<User, 'name' | 'email'> // 'name' | 'email'