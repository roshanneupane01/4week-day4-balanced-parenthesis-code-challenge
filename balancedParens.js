// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:

let leftParenthesis = 0
let rightParenthesis = 0

let parenthesisFunc = sample1 => {
    for(let i = 0; i<sample1.length; i++){
        if(sample1.charAt(i) === '('){
            leftParenthesis += 1
        }else if(sample1.charAt(i) === ')'){
            rightParenthesis += 1
        }
    }
    console.log(leftParenthesis === rightParenthesis)
}

parenthesisFunc(sample1)