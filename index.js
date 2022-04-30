
//javascript array functions/methods
//map function

const nums = [1, 2, 3, 4, 5, 6];

//map through the array and return the square of each element
let newArr = nums.map((num, index) => {
  //return each array element squared
  return num * num;
});

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = nums.filter((num) => {
  return num % 2 == 0; //returns even numbers
});

console.log(result); //returns [2, 4, 6, 8, 10]
