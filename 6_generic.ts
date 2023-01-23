const arrOfnum: Array<number> = [1,2,3,4,5]
const arrOfstr: Array<string> = ["1,2,3,4,5"]

function reverse<T>(array : T[]): T[] {
   return array.reverse()
}

reverse(arrOfnum)
reverse(arrOfstr)