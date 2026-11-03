"use strict";
console.log('object');
function maha(...args) {
    return args.reduce((total, sum) => total + sum, 0);
}
console.log(maha(2, 4, 6, 8, 10));
