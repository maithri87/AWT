const arr = [10, 20, 30, 40, 50];
const [first, , third = 100, ...rest] = arr;
console.log(first); 
console.log(third); 
console.log(rest); 
