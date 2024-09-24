export function add(numbers) {
    if (numbers === "") return 0;
  
    const delimiters = /,|\n/;
    const numArray = numbers.split(delimiters).map(Number);
  
    return numArray.reduce((acc, num) => acc + num, 0);
  }