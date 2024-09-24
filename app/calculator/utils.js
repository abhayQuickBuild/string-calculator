export function add(numbers) {
    if (numbers === "") return 0;
  
    let delimiter = /,|\n/;
    if (numbers.startsWith("//")) {
      const parts = numbers.split("\n", 2); 
      delimiter = new RegExp(parts[0].substring(2)); 
      numbers = parts[1]; 
    }

    const numArray = numbers.split(delimiter);
    const output = numArray.flatMap(item => item.split('\\n').map(Number));

    const negatives = output.filter((num) => num < 0);
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed: ${negatives.join(', ')}`);
    }
  
    return output.reduce((acc, num) => acc + num, 0);
  }
  