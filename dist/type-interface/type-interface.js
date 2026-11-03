//=== Type alias vs Interface ===//
const studentData = {
    name: 'Maha',
    age: 20,
    fathersName: 'Monir',
    mathersName: 'Sheuly',
    role: 30,
    subject: 'political science',
    isGoodStudent: true,
};
console.log(studentData);
const personData = {
    name: 'Mahadi',
    age: 20,
    fathersName: 'Monir',
    mathersName: 'Sheuly',
    role: 30,
    subject: 'political science',
    isGoodStudent: true,
};
console.log(personData);
const cart = {
    id: 343,
    name: 'maha',
};
const userStatus = {
    status: 'success',
};
console.log('User Status =', userStatus);
export {};
// * Use 'interface' for:
// -  use Interface when i create object or class structure
// - Object shapes and OOP class structures (implements/extends)
// - Declaration merging (e.g., public libraries, plugins, type augmentation)
// * Use 'type' for:
// - Primitives, unions (|), and intersections (&)
// - Tuples, function signatures, and complex utility types (mapped/conditional)
