const isFetching: boolean = true
const isLoading: boolean = false

//? number
let int: number = 42
// int = "hello"
const float: number = 4.2

//? str
const message: string = "hello typescript"

const numberArray: number[] = [1,2,3,4,5,6,7,8,9]
const numberArray2: Array<number> = [1,2,3,4,5,6,7,8,9]
const strArr: string[] = ['1,2,3,4,5']

//? tuple
const contact: [string, number] = ['nj', 1234]

//? any
let varieble: any = 42
varieble = 'new str'


function sayMyName(name: string): void{
   console.log(name);
}

//? type 
type Login = string
const login:Login = "admin";

type ID = string | number
const id1: ID = 1234;
const id2: ID = '1234'
const id3: ID = true;

