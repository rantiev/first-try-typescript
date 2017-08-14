function propDecorator (target: any, propKey: string) {
  Object.defineProperty(target, propKey, {
    enumerable: false,
    writable: false,
    value: 100500,
  });
}

function propDecoratorConditional (value: boolean) {
  return function (target: any, propKey: string) {

    if (value) {
      Object.defineProperty(target, propKey, {
        enumerable: false,
        writable: false,
        value: 3400,
      });
    }

  }
}

function methodDecorator (target: any,
                          propertyKey: string,
                          descriptor: any) {

  descriptor.enumerable = false;
  return descriptor
}

function classDecorator (target: any) {
  target.propDecorated = true
}

function classDecoratorConditional (need: boolean) {
  console.log('applying decorator')

  return function (target: any) {
    if (need) {
      target.propDecoratedConditional = true
    }
  }
}

@classDecorator
@classDecoratorConditional(true)
class MyClass {
  @propDecorator
  myProp: number = 1;

  @propDecoratorConditional(true)
  myProp2: number = 2;

  //@methodDecorator
  myMethod () {}
}

@classDecorator
@classDecoratorConditional(false)
class MyClass2 {
  @propDecorator
  myProp: number = 1;

  @propDecoratorConditional(false)
  myProp2: number = 2;

  //@methodDecorator
  myMethod () {}
}

const myClassInstance = new MyClass()
const myClassInstance2 = new MyClass2()

for (let prop in myClassInstance) {
  console.log(`myClassInstance has ${prop}`)
}

for (let prop in myClassInstance2) {
  console.log(`myClassInstance2 has ${prop}`)
}

/*
a.a = 2
a.b = 1
a.myMethod = () => {console.log('rewrited')}*/
