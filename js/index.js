const evenNumbers = (array) => {
  const numbers = array.filter((num) => num % 2 === 0);
  return numbers;
}


console.log(evenNumbers([0, 1, 2, 3, 4, 5, 6]));



////////////////////////////////////////////


const largestNumber = (array) => {
  return Math.max(...array);
}

console.log(largestNumber([0,1,2,4,5,8,10,15]))





const largestNumber2 = (array) => {
  let largestNumber = 0

  array.map(num => {
    if (num > largestNumber) {
      largestNumber = num
      }
  })
  return largestNumber
}

console.log(largestNumber2([0, 1, 2, 4, 5, 8, 10, 80]));

///////////////////////////////////////////////////

const reverse = (str) => {
  return str.split("").reverse().join("");
}

console.log(reverse("Hello World"))


////////////////////////////////////////////////////


const removeDuplicate = (array) => {
  return [...new Set(array)];
}
console.log(removeDuplicate([1, 2, 2, 2 , 2 , 3 , 4]));



const removeDuplicate2 = (array) => {
  return array.filter((item, index) => array.indexOf(item) === index
  );
}
console.log(removeDuplicate2([1, 2, 2, 2 , 2, 5 , 7]))