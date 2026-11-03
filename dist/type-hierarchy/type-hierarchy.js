// ========================================================
// 1. TOP TYPES (any & unknown)
// ========================================================
// 'any': এটি যেকোনো টাইপকে এলাও করে এবং টাইপ চেক বাইপাস করে
let one = 'Hello maha';
one = 343; // out: 343
// 'unknown': এটি একটি নিরাপদ টপ টাইপ। ব্যবহারের আগে অবশ্যই টাইপ চেক করতে হয়
let two = 'Hi Hello';
// two.toUpperCase();
//! Error: Object is of type 'unknown'. (চেক না করে মেথড কল করা যাবে না)
if (typeof two === 'string') {
    two.toUpperCase(); // out: "HI HELLO"
}
// ========================================================
// 2. CORE TYPES & ASSIGNMENT RULES (মূল টাইপ এবং অ্যাসাইনমেন্ট নিয়ম)
// ========================================================
let str = 'Hello';
let is = true;
let num = 34;
let Something;
let Something2;
// unknown টাইপে যেকোনো টাইপের ডেটা অ্যাসাইন করা যায়
Something = num; // out: 34
let someStatus;
let currentStatus = 'success';
someStatus = currentStatus; // valid
let text = 'success';
const currentUser2 = null; // valid
// ========================================================
// 5. UNIT TYPES (void & undefined)
// ========================================================
// void: ফাংশন কিছু রিটার্ন না করলে ব্যবহৃত হয়
const greet = () => {
    console.log('Hello'); // out: Hello
};
Something = greet();
// Something2 = greet();
//! Error: Type 'void' is not assignable to type 'null'.
// undefined: Unit টাইপের একটি সাব-টাইপ
const anotherGreet = () => {
    console.log('Hello world!!'); // out: Hello world!!
    return undefined;
};
anotherGreet();
const greetings = anotherGreet();
console.log(greetings); // out: undefined
// ========================================================
// 6. NEVER TYPE (নেভার টাইপ)
// ========================================================
// 'never': কোনো মান গ্রহণ করে না। সাধারণত যে ফাংশনগুলো এরর থ্রো করে বা ইনফিনিট লুপ চালায় তাদের ক্ষেত্রে ব্যবহৃত হয়।
// const neverTypeOfValue: never = 'Hello';
//! Error: 'never' accepts no values.
const getError = (msg) => {
    throw new Error(msg);
};
// * 'never' হলো Bottom Type (সবার সাব-টাইপ), তাই একে string, number বা যেকোনো টাইপে অ্যাসাইন করা ভ্যালিড।
// * TypeScript জানে ফাংশনটি কখনোই কোনো ডাটা রিটার্ন করবে না, তাই টাইপ কনফ্লিক্ট হওয়ার কোনো সুযোগ নেই।
const errorMsg = getError('Hello error message');
export {};
