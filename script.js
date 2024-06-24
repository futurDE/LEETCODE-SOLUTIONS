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
let b = -121, x = b, array = [], message = true, string = "";
let n = Math.floor(Math.log10(x)) + 1;

if (n == 1 && b >= 0) {
    message = true;
} else if (b < 0) {
    message = false;
} else {
    if (n > 1) {
        for (let i = 0; i < n; i++) {
            let modNum = x % 10;
            array.push(modNum);
            x = Math.floor(x / 10);
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