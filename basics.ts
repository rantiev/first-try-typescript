/*
 * Simple variables and function example
 */
const x: number = 1
const y: string = 's'
let z: string

function stringSum (x: number, y: string): string {
  return x + y
}

z = stringSum(x, y)

console.log(`stringSum is ${z}`)

/*
 * Simple interface example
 */
interface MyInterface {
  x: number;
  y: string;
  z: number[];
  w: string[];
}

const o: MyInterface = {
  x: 1,
  y: 's',
  z: [1, 2],
  w: ['s1', 's2'],
}

console.log(`MyInterface is ${JSON.stringify(o)}`)

/*
 * Simple class example
 */
class Animal {
  speed:number = 0

  constructor (public name: string, public hunger: number = 10) {
    console.log(`Hello my name is ${name}`)
  }

  eat (food: number): number {
    this.hunger += food

    console.log(`I have eaten ${food}kg`)
    return this.hunger
  }

  run (speed: number): void {
    this.speed += speed
    console.log(`I'm running ${speed}km/h`)
  }
}

class Rabbit extends Animal {
  height: number = 0

  jump (height: number): void {
    this.height += height
    console.log(`I'm jumping ${height}m high`)
  }
}

class Snake extends Animal {
  volume: number = 0

  hiss (volume: number): void {
    this.volume += volume
    console.log(`I'm hissing ${volume}db loud`)
  }
}

let strangeAnimal:Animal = new Animal('Stranger')
let rabbit:Rabbit = new Rabbit('Vasya')
let snake:Snake = new Snake('Valery')

strangeAnimal.eat(10)
strangeAnimal.run(10)
rabbit.jump(10)
snake.hiss(10)