class StringCalculator {
    
    add(numbers) {
      if (!numbers) return 0; // Return 0 for an empty string
  
      let delimiter = /,|\n/; // Default delimiters: comma and newline
  
      // Check for custom delimiter
      if (numbers.startsWith("//")) {
        const parts = numbers.split("\n", 2); // Split into two parts
        let customDelimiter = parts[0].slice(2); // Extract the custom delimiter
        if (customDelimiter.startsWith("[")) {
            // Handle multi-character delimiters like //[***]\n
            customDelimiter = customDelimiter
              .slice(1, -1) // Remove square brackets
              .replace(/[\[\]]/g, "|"); // Replace brackets for multiple delimiters
        }
        numbers = parts[1]; // Update numbers string
        delimiter = customDelimiter; // Use the custom delimiter
     }
  
      // Split the numbers using the delimiter
      const numArray = numbers.split(delimiter).map(Number);
      
      // Find negative numbers
      const negatives = numArray.filter(num => num < 0);
      if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
      }
  
      // Calculate the sum of the numbers
      return numArray.reduce((acc, num) => acc + num, 0);
    }
  }


  
module.exports = StringCalculator;
  