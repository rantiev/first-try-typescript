function test(target: Object,
              propertyKey: string,
              descriptor: TypedPropertyDescriptor<any>): any {
  return descriptor;
}

class A {
  a: number = 1
  b: number = 2

  @test
  myMethod () {}
}

const a = new A()

/*
for (let prop in a) {
  console.log(`a has ${prop}`)
}

a.a = 2
a.b = 1
a.myMethod = () => {console.log('rewrited')}*/
