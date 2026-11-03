//=== Types ===//
let myName: string = 'Mahadi';
let myAge: number = 34;
let perfect: boolean = true;

// myName = 34; // Type 'number' is not assignable to type 'string'.

const addFunc = (a: number, b: number): number => {
  return a + b;
};

console.log(addFunc(2, 4));

//=== Array ===//
const arr: number[] = [34, 43, 34];
const studentNames: string[] = ['Mahadi', 'Milon', 'Hasan'];
const rolls: number[] = [3, 34, 5, 3];

// studentNames.push('Maha', 43); // Argument of type 'number' is not assignable to parameter of type 'string'.

//=== Tuple ===//
let data: [string, number] = ['Maha', 30];

// Regular tuple: TS allows push() method, modifying the tuple length
data.push(34);

let data2: readonly [string, number] = ['Maha', 30];

// Error: 'push' does not exist because 'readonly' makes the tuple completely immutable
// data2.push(34);

console.log(data); // Output: ['Maha', 30, 34]
