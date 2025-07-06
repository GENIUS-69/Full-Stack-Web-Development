// default import
import multiply from './MathOperationsM.js';


// named imports
import { add, subtract, divide } from './MathOperationsM.js';

console.log("Addition:", add(5, 3)); // 8
console.log("Subtraction:", subtract(5, 3)); // 2
console.log("Division:", divide(5, 3)); // 1.6666666666666667
console.log("Multiplication:", multiply(5, 3)); // 15
