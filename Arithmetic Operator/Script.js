//addition
let a = 1 + 1;
console.log(a);

let b = 10;
let c = a + b;

console.log(c);

b += 1;
console.log(b);

b++;
console.log(b);

//subtraction
let x = 10 - 5;
console.log(x);

let y = b + x;
console.log(y);

x = x - 1;
console.log(x);

// multiplication
let unityPrice = 2;
let units = 10;
let total = units * unityPrice;
console.log(total);

// division
let n = 10;
let result = n / 2;
console.log(result);

//modulus
let r = 5 % 2;
console.log(r);

//challange
let baseWeight = 10000;
let foodWeight = 100;
let passengerWeight = 10;

let fuelUnitWeight = 2; // weught of 1 unit fuel
let fuelUnits = 100; //total fuel we need

let totalFuelWeight = fuelUnitWeight * fuelUnits;

let totalWeight = baseWeight + foodWeight + passengerWeight + totalFuelWeight;
console.log('total weight = ' + totalWeight);