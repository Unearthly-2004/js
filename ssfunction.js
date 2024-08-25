// functions in js -> DRY --> dont repeat yourself

function isEvenOrOdd(num){
    if(num%2==0){
        return true;
    }
    else{
        return false;
    }
}

for(let i=0;i<10;i++){
    if(isEvenOrOdd(i)){
        console.log(i,"yes");
    }
    else{
        console.log(i,"no");
    }
}


//remember console.log('') where console is an object and,
// and log is the key where function is stored,
// hence we can access whatever is stored by console.log('').
// console.log() is a function and it returns undefined. 
let x = console.log("yo");
console.log(x); // --> undefined
console.log(Math.sqrt(100));

// if we dont return anything ,
// js by default returns undefined.
   

function printName(name){
    console.log("Hello",name,"welcome to vscode");
}

let result = printName("shrujan");
console.log(result); // hence when we doesnt return by ourself js returns undefined.


function add(x,y){ // these are parameters. these are defined.
    let c=x+y;
    return c;
}
let a = 10;
let b = 20;
let u = add(a,b); // these are arguements , whereas these are passed. 
console.log(u);

// it will return whatever add(9,1) returns.
console.log(add(9,1));

let t = 13;
function isPrime(num){
    for(let i=2;i<=num-1;i++){
        if(num%2==0){
            return false;
        }
    }
 return true; // if loop terminates,
 // it means we encountered no divisor hence prime   
}

let y = isPrime(t);
console.log(y);

// this is a recursive way to find gcd
function gcd(n,s){
   if(s==0){
    return n;
   }
   return gcd(s,n%s);
}

let z = gcd(1,5);
console.log(z);