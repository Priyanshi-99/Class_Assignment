class Stack{
    constructor(){
        this.items = [];
    }

pushelement(val){
    this.items.push(val);
    
}
popelement(val){
    
    return this.items.pop(val); 
      
}
printelement() 
{ 
    var str = ""; 
    for (var i = 0; i < this.items.length; i++) 
        str += this.items[i] + " "; 
    return str; 
} 
}
var stack = new Stack();
stack.pushelement(10);
stack.pushelement(20);
stack.pushelement(30);
console.log(stack.printelement());
stack.popelement(10);
console.log(stack.printelement());

