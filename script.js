//PALINDROME NUMBER
/*
Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.

Example1:
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

Constraints
-2^31 <= x <= 2^31 - 1

Follow up: Could you solve it without converting the integer to a string?
*/

//PALINDROME NUMBER SOLUTION
let b = -121, x = b, array = [], message = true, string = ""; //`x` copies the original number, `array` is used to reverse the original number, the contents of `array` will be converted to a string using `string`, message is used for information about wether the number is a palindrome.
let n = Math.floor(Math.log10(x)) + 1; //`n` is used to check the number of digits in the original number 

if (n == 1 && b >= 0) { //if the original number is a single number and is greater than or equal to 0
    message = true;
} else if (b < 0) { //if the original number is less than 0
    message = false;
} else {
    if (n > 1) { //if the orignal number is greater than 1 and has more than one digit
        for (let i = 0; i < n; i++) { //The processes below are performed for as many digits the original number has
            let modNum = x % 10; //Reverse the original number by finding the modulo and pushing the result to array
            array.push(modNum);
            x = Math.floor(x / 10); //Use Math.floor the to remove one digit from the original number.
        }
    }

    for (let i = 0; i < array.length; i++) {
        string += array[i];
    }
    let compareNum = Number(string);
    if (compareNum == b) {
        message = true;
    } else {
        message = false;
    }

    console.log(message);   
}

// Example usage:
console.log(isPalindrome(121)); // Output: true
console.log(isPalindrome(-121)); // Output: false
console.log(isPalindrome(10)); // Output: false









////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D, and M.
Symbol          Value
I                 1
V                 5
X                 10
L                 50
C                 100
D                 500
M                 1000

For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numeras are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.

Example 1:
Input: s = "III"
Output: 3
Explanation: III = 3

Example 2:
Input: s = "LVII"
Output: 58
Explanation: L = 50, V = 5, III = 3

Example 3:
Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4

constraints 1 <= s. length <= 15

s contains only the characters ("I", "V", "X", "L", "C", "D", "M").

It is guaranteed that s is a valid roman numeral in the range[1, 3999].
*/

let romanNum = "MCMXCIV";

const romanNumeralObject = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
};

let i = 0;
let sum = 0;

while (i < romanNum.length) {
    let foundPair = false;
    for (let x in romanNumeralObject) {
        if (romanNum.slice(i, i + 2) == x) {
            sum += romanNumeralObject[x];
            i += 2;
            foundPair = true;
            break;
        }
    }

    if (!foundPair) {
        for (let y in romanNumeralObject) {
            if (romanNum[i] == y) {
                sum += romanNumeralObject[y];
                i++;
            }
        }
    }
}

console.log(sum);

//TWO SUM
/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
*/


let nums = [3, 2, 4];
let target = 6;
let match = false;

for (let i = 0; i < nums.length; i++) {
    if (match) {
        break;
    }
    for (let k = i + 1; k < nums.length; k++) {
        if (nums[i] + nums[k] == target) {
            console.log(`This is target index: ${i}, ${k}`);
            match = true;
            break;
        }
    }
}