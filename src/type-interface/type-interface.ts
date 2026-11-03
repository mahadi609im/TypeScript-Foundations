//=== Type alias vs Interface ===//

interface IIdentity {
  name: string;
  age: number;
  fathersName: string;
  mathersName: string;
}

interface IstudentInfo extends IIdentity {
  role: number;
  subject: string;
  isGoodStudent: boolean;
}

const studentData: IstudentInfo = {
  name: 'Maha',
  age: 20,
  fathersName: 'Monir',
  mathersName: 'Sheuly',
  role: 30,
  subject: 'political science',
  isGoodStudent: true,
};

console.log(studentData);

type Person = {
  name: string;
  age: number;
  fathersName: string;
  mathersName: string;
};

type personInfo = Person & {
  role: number;
  subject: string;
  isGoodStudent: boolean;
};

const personData: personInfo = {
  name: 'Mahadi',
  age: 20,
  fathersName: 'Monir',
  mathersName: 'Sheuly',
  role: 30,
  subject: 'political science',
  isGoodStudent: true,
};

console.log(personData);

// Interface Merge
interface ICartItem {
  id: number;
}

interface ICartItem {
  name: string;
}

const cart: ICartItem = {
  id: 343,
  name: 'maha',
};
//  duita e value dite hobe must

type Wishlist = {
  id: number;
  name: string;
};

// type Wishlist = {
//   price: number;
// }; //! duplicate error

// Primitive alias
type ID = string | number;

// Union Types (interface এটা সরাসরি পারে না)
type Status = 'pending' | 'success' | 'failed';

interface Istatus {
  status: 'pending' | 'success' | 'failed';
}

const userStatus: Istatus = {
  status: 'success',
};

console.log('User Status =', userStatus);

// Tuple
type KeyValuePair = [string, number];

// * Use 'interface' for:
// -  use Interface when i create object or class structure
// - Object shapes and OOP class structures (implements/extends)
// - Declaration merging (e.g., public libraries, plugins, type augmentation)

// * Use 'type' for:
// - Primitives, unions (|), and intersections (&)
// - Tuples, function signatures, and complex utility types (mapped/conditional)
