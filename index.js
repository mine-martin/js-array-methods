//javascript array functions/methods
//map function

const nums = [1, 2, 3, 4, 5, 6];

//map through the array and return the square of each element
let newArr = nums.map((num, index) => {
  //return each array element squared
  return num * num;
});

console.log(newArr);
