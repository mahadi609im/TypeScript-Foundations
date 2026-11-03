// ========================================================
// 1. TOP TYPES (any & unknown)
// ========================================================

// 'any': এটি যেকোনো টাইপকে এলাও করে এবং টাইপ চেক বাইপাস করে
let one: any = 'Hello maha';
one = 343; // out: 343

// 'unknown': এটি একটি নিরাপদ টপ টাইপ। ব্যবহারের আগে অবশ্যই টাইপ চেক করতে হয়
let two: unknown = 'Hi Hello';

// two.toUpperCase();
//! Error: Object is of type 'unknown'. (চেক না করে মেথড কল করা যাবে না)

if (typeof two === 'string') {
  two.toUpperCase(); // out: "HI HELLO"
}

// ========================================================
// 2. CORE TYPES & ASSIGNMENT RULES (মূল টাইপ এবং অ্যাসাইনমেন্ট নিয়ম)
// ========================================================

let str: string = 'Hello';
let is: boolean = true;
let num: number = 34;

let Something: unknown;
let Something2: null;

// unknown টাইপে যেকোনো টাইপের ডেটা অ্যাসাইন করা যায়
Something = num; // out: 34

// নির্দিষ্ট null টাইপে অন্য কোনো টাইপ (number/string) অ্যাসাইন করা অবৈধ
// Something2 = num;
//! Error: Type 'number' is not assignable to type 'null'.

// Something2 = str;
//! Error: Type 'string' is not assignable to type 'null'.

// ========================================================
// 3. LITERAL & UNION TYPES (লিটারেল এবং ইউনিয়ন টাইপ)
// ========================================================

type Status = 'pending' | 'success';
let someStatus: string;

let currentStatus: Status = 'success';
someStatus = currentStatus; // valid

let text: string = 'success';
// let invalidStatus: Status = text;
//! Error: Type 'string' is not assignable to type 'Status'.

// ========================================================
// 4. NULLISH TYPES (নালিশ টাইপ)
// ========================================================

interface IUser {
  name: string;
}

// const currentUser: IUser = null;
//! Error: Type 'null' is not assignable to type 'IUser'.

interface IUser2 {
  name: string;
}

// Union এর মাধ্যমে null এলাও করা যায়
type LoggedInUser = IUser2 | null;
const currentUser2: LoggedInUser = null; // valid

// ========================================================
// 5. UNIT TYPES (void & undefined)
// ========================================================

// void: ফাংশন কিছু রিটার্ন না করলে ব্যবহৃত হয়
const greet = (): void => {
  console.log('Hello'); // out: Hello
};

Something = greet();
// Something2 = greet();
//! Error: Type 'void' is not assignable to type 'null'.

// undefined: Unit টাইপের একটি সাব-টাইপ
const anotherGreet = (): undefined => {
  console.log('Hello world!!'); // out: Hello world!!
  return undefined;
};

anotherGreet();

const greetings: void = anotherGreet();
console.log(greetings); // out: undefined

// ========================================================
// 6. NEVER TYPE (নেভার টাইপ)
// ========================================================

// 'never': কোনো মান গ্রহণ করে না। সাধারণত যে ফাংশনগুলো এরর থ্রো করে বা ইনফিনিট লুপ চালায় তাদের ক্ষেত্রে ব্যবহৃত হয়।
// const neverTypeOfValue: never = 'Hello';
//! Error: 'never' accepts no values.

const getError = (msg: string): never => {
  throw new Error(msg);
};

// * 'never' হলো Bottom Type (সবার সাব-টাইপ), তাই একে string, number বা যেকোনো টাইপে অ্যাসাইন করা ভ্যালিড।
// * TypeScript জানে ফাংশনটি কখনোই কোনো ডাটা রিটার্ন করবে না, তাই টাইপ কনফ্লিক্ট হওয়ার কোনো সুযোগ নেই।
const errorMsg: string = getError('Hello error message');
