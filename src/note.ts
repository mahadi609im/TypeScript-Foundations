//=== Types ===//
let myName: string = 'Mahadi';
let myAge: number = 34;
let perfect: boolean = true;

// myName = 34; // Type 'number' is not assignable to type 'string'.

const addFunc = (a: number, b: number): number => {
  return a + b;
};

console.log(addFunc(2, 4));
