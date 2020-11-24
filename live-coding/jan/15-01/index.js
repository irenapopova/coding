//Declare two variables "a" with the value of true and "b" with the value of false.

const a = true;
b = false;

// 1 Check the result of:

// 1a

console.log(`Q1a: ${a && b}`); // false

// 1b

console.log(`Q1b: ${a || b}`);

// 1c

console.log(`Q1c: ${!(a && b)}`);

// 2 Declare three more variables "x", "y", "z". Give these variables number values.

const x = 5;
const y = 10;
const z = 2;

// 3 Check the result of whether:

// 3a x is greater than z AND x is greater than y.

console.log(`Q3a: ${x > z && x > y}`);

// 3b x is NOT equal to y.

console.log(`Q3b: ${x !== y}`);

// 3c z is less than y OR z is greater than x.

console.log(`Q3c: ${z < y || z > x}`);

// 3d x is equal to z OR x is NOT equal to y.

console.log(`Q3d: ${x == z || x !== y}`);

// 3e x is greater than or equal to 10 AND y is less than or equal to 10.

console.log(`Q3e: ${x >= 10 && y <= 10}`);

// 3f x multiplied by z is less than 100 OR whether x multiplied by y is greater than 100.

console.log(`Q3f: ${x * z < 100 || x * y > 100}`);

//1. Calculate the perimeter of a square. Assume each side is 4.75cm.
const sqSideLength = 4.75;
const sqPerimeter = sqSideLength + sqSideLength + sqSideLength + sqSideLength;
console.log(`Perimeter of square = ${sqPerimeter}cm`);

//2. Calculate the perimeter of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.
const triPerimeter = 5 + 6 + 7;
//
console.log(`Perimeter of triangle = ${triPerimeter}cm`);

//3. Calculate the area of a square. Each side is 5cm.
const sqArea = 5 * 5;
console.log(`Area of square = ${sqArea}cm²`);

//4. Calculate the area of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.

const triSideLength1 = 5;
const triSideLength2 = 6;
const triSideLength3 = 7;
const halfPerimeter = (triSideLength1 + triSideLength2 + triSideLength3) / 2;
const areaTriangle = Math.sqrt(
  halfPerimeter *
    (halfPerimeter - triSideLength1) *
    (halfPerimeter - triSideLength2) *
    (halfPerimeter - triSideLength3)
);
console.log(`Area of triangle = ${areaTriangle}cm²`);

//5. Calculate the volume of a cube. Length of each side is 9cm.
const cubeSideLength = 9;
const cubeVol = cubeSideLength * cubeSideLength * cubeSideLength;
console.log(`Volume of cube = ${cubeVol}cm³`);

//6. Calculate the three bills including tips:
//€22.35 + 10% tip
//€26.67 + 15% tip
//€35.92 + 20% tip
//6. Calculate the three bills including tips: €22.35 + 10% tip €26.67 + 15% tip €35.92 + 20% tip

const billOne = 22.35;
const billTwo = 26.67;
const billThree = 35.92 + 35.92 * 0.2;
const tenPercentTip = 1.1;
const fifteenPercentTip = 1.15;
const twentyPercentTip = 1.2;
console.log(
  `Bill One: EUR${billOne * tenPercentTip}
Bill Two: EUR${billTwo * fifteenPercentTip}
Bill Three: EUR${billThree * twentyPercentTip}`
);
