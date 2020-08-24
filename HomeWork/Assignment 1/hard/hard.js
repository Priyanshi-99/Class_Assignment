// question : 1


function realTypes(value){
     var final = value.constructor.name 
     return final;
}
console.log(realTypes([])) // array
console.log(realTypes(123)) //number
console.log(realTypes(true)) //boolean
console.log(realTypes("abcd")) // string


//question 2:

function validate(input){
    var new_arr = []
    for(element of input){
        var flag = true;
        var newelement = element.replace(/ /g, "");
    	for(let i=0;i<newelement.length;i++){
        	if(!isNaN(newelement[i])){
            	flag = false;
            	break;
            }
        }
        if(!flag){
        	new_arr.push(newelement)
        }
    }
    var final = new_arr.join(" ")
    return final;

}
var input = ["ab1","def","3dc","e5r"]
console.log(validate(input));
//output: ab1 3dc e5r

var input1 = ["abc", "abc10"]
console.log(validate(input1));


var input2 = ["this is a test", "test1"]
console.log(validate(input2));
// output: test1

var input3 = ["abc","ab10c","a10bc","bcd"]
console.log(validate(input3));









