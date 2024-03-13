//Q1
function secondLargest(nums) {
    console.time()
    const largestNum = Math.max(...nums);
    nums.splice(nums.findIndex(num => num === largestNum), 1);
    while(largestNum==Math.max(...nums)) {
        nums.splice(nums.findIndex(num => num === Math.max(...nums)),1);
        if(nums.length==0) return null;
    }
    console.timeEnd()
    return Math.max(...nums);
}
// console.log(secondLargest([1,2,40,5,6,2,4,9,10]));

//Q2
function isPalindrome(word) {
    console.time();
    const reversed = word.trim().split(" ").join("").split("").reverse().join("");
    word = word.trim().split(" ").join("").split("").join("");
    console.timeEnd();
    return word == reversed;
}
// console.log(isPalindrome("hi hii hih"));

//Q3
function longestWord(str) {
    console.time();
    const words = str.split(" ");
    let longest = words[0];
    for(let i=1;i < words.length;i++){
        if(longest.length < words[i].length) longest = words[i];
    }
    console.timeEnd();
    return longest;
}
// console.log(longestWord("Hi There Daniel How Are You Doing? I hope it's been amazingly great."));

//Q4
function reversed(word){
    console.time();
    word = word.split("").reverse().join("");
    console.timeEnd();
    return word;
}
// console.log(reversed("Let's go to Venice!"));

//Q5
function firstCap(word){
    console.time();
    const list = word.split(" ");
    let newWord = [];
    for(let i=0;i<list.length;i++){
        let w = list[i].split("");
        w[0] = w[0].toUpperCase();
        newWord.push(w.join(""));
    }
    console.timeEnd();
    return newWord.join(" ");
}
// console.log(firstCap("Let's go to Venice!"));

//Q6
function removeDuplicates(arr){
    console.time();
    let newArr = arr;
    for(let i=0;i<newArr.length;i++){
        for(let e=i+1;e<newArr.length;e++){
            if(newArr[i]==newArr[e]){
                newArr.splice(e, 1);
                e--;
            }
        }
    }
    console.timeEnd();
    return newArr;
}
console.log(removeDuplicates([1,2,4,6,32,3,2,1,32,7,1,3,0,5,7,5,44]));