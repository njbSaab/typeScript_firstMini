function add(a: number, b: number): number{
   return a+b
}

function toUpperCase(str: string): string{
   return str.trim().toUpperCase()
}


interface Myposition{
   x: number | undefined
   y: number | undefined
}

interface MyPosDefault extends Myposition{
   default: string
}
function position(): Myposition
function position(a: number): MyPosDefault
function position(a?: number, b?: number){
   if(!a && !b){
      return {x: undefined, y: undefined}
   }

   if(a && !b){
      return {x: a, y: undefined, default: a.toString()}
   }

   return {x:a, y:b}
}


console.log('Empty: ', position());
console.log('One param: ', position(42));
console.log('Two param: ', position(10, 15));