//*=== Genaric ===*//

//Example 1
const showData = <T>(value: T[]): T[] => value;

console.log(showData([3, 3]));
console.log(showData(['3', '3']));

const getFirst = <T>(value: T[]): T => {
  return value[0];
};

console.log(getFirst([2, 4, 6, 8, 10]));
console.log(getFirst(['Maha', 'Haha']));

//Example 2
const firstSecond = <A, B>(first: A, second: B): [A, B] => {
  return [first, second];
};

console.log(firstSecond('Maha', 30));
console.log(firstSecond('yes', true));

//Example 3
type Box<T> = { content: T };

const box1: Box<number> = { content: 34 };
const box2: Box<string> = { content: 'Maha' };

// Example 4
type ApiResponse<T> = {
  success: boolean;
  data: T;
};

const vehicle: ApiResponse<string[]> = {
  success: true,
  data: ['Maha', 'age'],
};

const price: ApiResponse<number> = {
  success: true,
  data: 343,
};
