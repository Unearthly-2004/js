// logical not -> (!) and the logical tilda sign (~)
console.log(!(5>2));
//in and gate whenever stumbled upon an false,
// it will directly return false without checking for further operand
// hence in this case we stumbled upon 10 which is the first true value,
// hence it will seek for  false or true as a next operand and will the return it.
console.log(10&&6);
// here it will not return 5<4,
// as it can be further simplified into smaller aspect
console.log((10>6) && (5<4));
// it will return 6 here.
console.log((10>6) && 6);

// same in case of OR gate it will return the first true logic.
// -0 is used as a directional quantity
// NaN --> Not a number, if there is a situation,
// where one is bound to return a number but there is no valid possible number to return than we use NaN,
// ex--> in an array consisting of '1' '2' '3' ,
// one is said to return the index where '4' is present.it returns NaN there

console.log(10/null); //->Infinity
console.log(undefined/null);//->NaN ---> it is not even defined in the context of this programming hence returning NaN
// NaN is not even equal to itself --> the only number in javascript.
// & -->bitwise AND ,| --> bitwise OR, ^ --> bitwise XOR, ~ --> bitwise NOT
// it will perform operation bit by bit.

console.log(2&6);

// == and === both checks the type, the difference is ,
// == --> if type is same then it calls ===.
// == --> if types are not same then coercion(type conversion occurs) then comparison is done

// === --> if types are different it returns false
// === --> if types are same then value comparison occurs

console.log(1=='1');

// in this code (==) first check the type one is number,
// second is a string then it converts the type,
// and then it becomes 1==1 and it then calls (===) then if types are same,
// value comparison occurs

console.log(1 == "shrujan");
// and as you know js will try ,
// to convert shrujan into a number which is NaN
// hence it will be 1 == NaN --> false

console.log(typeof "a");
console.log(typeof null);
// fact -> typeof null is object which,
// is a huge mistake by developer,
// (one who created typeof null in js) hence a lot of codebase is dependent on null which,
// is why it cannot be changed now to null/ or some other type. 