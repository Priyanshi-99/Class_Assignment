//<<<<<<<<<<<<<<<<< VERY EASY >>>>>>>>>>>>>>>>>>>>>>//


//Question 1


function convert(min){
    var seconds = min*60;
    return seconds;

}
console.log(convert(5)); // output: 3000
console.log(convert(3));
console.log(convert(2));


//Question2

function check(a,b){
    if(a%b==0){
        return true;
    }
    else{
        return false;
    }
}
console.log(check(85,4)); //output: false
console.log(check(98,7))  //output: true

//<<<<<<<<<<<<<<<<< EASY >>>>>>>>>>>>>>>>>>>>>>//

//question 1


function count(word,str){
    var count =0;
    
    for (var position = 0; position < str.length; position++) 
    {
       if (str.charAt(position) == word) 
         {
         count += 1;
         }
     }
      return count;
}
console.log(count("a", "edabit")); //output: 1
console.log(count("c", "Chamber of secrets")); //output: 1
console.log(count("b", "big fat bubble")); //output: 4


//question 2

function addup(num){
    var sum=0;
    if(num<=1000 && num>=1){
    for(var i=1;i<=num;i++){
        sum += i;
    }
    return sum;
}
}
console.log(addup(4)); //output: 10
console.log(addup(13));
console.log(addup(600));



//question 3

function replacement(str){      
    for (var position = 0; position < str.length; position++) 
    {
       if (str.charAt(position) == 'a') 
         {
            str = str.substring(0, position) + '1' + str.substring(position + 1);
         
         }

         if (str.charAt(position) == 'e') 
         {
            str = str.substring(0, position) + '2' + str.substring(position + 1);
         
         }
         if (str.charAt(position) == 'i') 
         {
            str = str.substring(0, position) + '3' + str.substring(position + 1);
         
         }
         if (str.charAt(position) == '0') 
         {
            str = str.substring(0, position) + '4' + str.substring(position + 1);
         
         }
         if (str.charAt(position) == 'u') 
         {
            str = str.substring(0, position) + '5' + str.substring(position + 1);
         
         }
     }
      return str;
}
console.log(replacement('karachi'));
console.log(replacement('kanpur'));
console.log(replacement('india'));
//output: k1r1ch3
// k1np5r
// 3nd31












