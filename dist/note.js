//=== Types ===//
let myName = 'Mahadi';
let myAge = 34;
let perfect = true;
// myName = 34; // Type 'number' is not assignable to type 'string'.
const addFunc = (a, b) => {
    return a + b;
};
console.log(addFunc(2, 4));
//=== Array ===//
const arr = [34, 43, 34];
const studentNames = ['Mahadi', 'Milon', 'Hasan'];
const rolls = [3, 34, 5, 3];
// studentNames.push('Maha', 43); // Argument of type 'number' is not assignable to parameter of type 'string'.
//=== Tuple ===//
let data = ['Maha', 30];
// Regular tuple: TS allows push() method, modifying the tuple length
data.push(34);
let data2 = ['Maha', 30];
// Error: 'push' does not exist because 'readonly' makes the tuple completely immutable
// data2.push(34);
console.log(data); // Output: ['Maha', 30, 34]
//=== Optional Parameters ===//
const concatName = (firstName, lastName) => {
    if (!lastName) {
        return firstName;
    }
    return firstName + ' ' + lastName;
};
console.log(concatName('Maha'));
//=== void & default parameters ===//
// 1. Bad Practice: Default param should not be first
const myFunc = (greeting = 'Hello', name) => {
    console.log(greeting + ' ' + name);
};
myFunc('Hello', 'maha'); // Works only because we passed both values
// 2. Error: 'maha' goes to greeting, so name is missing!
// 'void' = this function returns nothing (no 'return' keyword)
const myFunc2 = (greeting = 'Hello', name) => {
    console.log(greeting + ' ' + name);
};
// myFunc2('maha'); // TS Error: Expected 2 arguments, but got 1.
// 3. Best Practice: Put required param first, default last
// 'void' = runs the code, returns no value
const myFunc3 = (name, greeting = 'Hello') => {
    console.log(greeting + ' ' + name);
};
myFunc3('maha'); // Works! Output: Hello maha
//=== Rest parameters ===//
const totalOfSum = (...numbers) => {
    return numbers.reduce((total, sum) => total + sum, 1);
};
console.log(totalOfSum(2, 5));
const loginUser = (...args) => {
    const [name, age, isActive] = args;
    console.log(`My Name is ${name}, I am ${age} years old and i'm now ${isActive ? 'active' : 'deActive'}`);
};
loginUser('Maha', 34, true);
const user = {
    name: 'Maha',
    age: 20,
    salary: 3434343434,
    action: () => console.log('Alhamdulillah'),
    address: ['Dhaka', 'Bangladesh'],
};
const user2 = {
    name: 'yahhu',
    age: 15,
    salary: 34343434343,
    action: () => console.log('Alhamdulillah'),
    address: ['Dhaka', 'Bangladesh'],
};
const user3 = {
    name: 'Babuni',
    age: 15,
    salary: 34343434343,
    action: () => console.log('Alhamdulillah'),
    address: ['Dhaka', 'Bangladesh'],
};
export {};
