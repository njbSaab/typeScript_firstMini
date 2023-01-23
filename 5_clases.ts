class TS {
   version: string

   constructor(version: string){
      this.version = version
   }
   info(name: string){
      return `[${name}] : ts version is ${this.version}`
   }
}


class Car{
   readonly model: string
   readonly numOfWheels: number = 4

   constructor(theModel: string) {
      this.model = theModel
   }
}


class Animal {
   protected voice: string = ''
   public color: string = 'black'

   constructor(){
      this.go()
   }

   private go(){
      console.log('go');
   }
}


class Cat extends Animal {
   public setVoice(voice:string): void{
      this.voice = voice
   }
}

const cat = new Cat()
cat.setVoice('test')
cat.voice('dasd')
cat.go('dsa')
cat.color('black')



