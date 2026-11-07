//*=== Genaric ===*//
//Example 1
const showData = (value) => value;
console.log(showData([3, 3]));
console.log(showData(['3', '3']));
const getFirst = (value) => {
    return value[0];
};
console.log(getFirst([2, 4, 6, 8, 10]));
console.log(getFirst(['Maha', 'Haha']));
//Example 2
const firstSecond = (first, second) => {
    return [first, second];
};
console.log(firstSecond('Maha', 30));
console.log(firstSecond('yes', true));
const box1 = { content: 34 };
const box2 = { content: 'Maha' };
const vehicle = {
    success: true,
    data: ['Maha', 'age'],
};
const price = {
    success: true,
    data: 343,
};
export {};
