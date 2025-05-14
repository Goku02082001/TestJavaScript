
 function  reverseWords(str)
 {
    let val=str.split('').reverse().join('').split(' ').reverse().join(' ')

    return val
 }



const result = reverseWords("JavaScript is fun");



console.log(result);
