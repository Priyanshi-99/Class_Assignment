//question 1


function reverse(str,letter){
    var arr = str.split(" ");
    

    arr.forEach(function(element,index) {
        if(element.startsWith(letter)){
            arr[index] = element.split("").reverse().join("");
              
        }                 
    });

    var final = arr.join(" ");
    return final;
    
}
console.log(reverse("first man to walk on the moon","m")); // Output: first nam to walk on the noom
console.log(reverse("word searches are super fun", "s"));

console.log(reverse("peter piper picked pickled peppers", "p"));

//Question 2

function match(arr){
    if(arr.every( v => v === arr[0])){
        return true;
    }
    else{
        return false;
    }
}
var ele = ['@','@','@'] // Output: true
console.log(match(ele));
var elesecond = ['$','$$','$$$'] // Output: false
console.log(match(elesecond));
var elethird = ['SS','SS','Ss'] // Output: false
console.log(match(elethird));
var elefourth = ["abc", "abc", "abc", "abc"] // Output: false
console.log(match(elefourth));




//question 3

function duplictaes(arrays){
    return arrays.filter((a, b) => arrays.indexOf(a) === b).join(" ")
    
}
var ele = ['The','great','great','wall','of','china','china'] // Output: The great wall of china
console.log(duplictaes(ele))
var num = [1,0,1,0]
console.log(duplictaes(num)) // Output: 1 0
