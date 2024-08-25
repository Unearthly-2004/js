// let n = 5;
// let str = "";
// for(let i=0;i<=n;i++){
//     for(let j=n;j>i;j--){
//        str+=" ";
//     }
//     for(let k=0;k<2*i-1;k+=1){
//        str+="*";
//     }
//     console.log(str);
//     str = "";
// }

// making a pattern that it totally dependent,
// on odd values of n

let num = 5;
function pattern10(num) {
    // Loop to create the pattern
    for (let i = 1; i <= Math.floor(num / 2); i++) {
        let str = "";
        let stars = i;
        let spaces = num - 2 * i;

        // Add left stars
        for (let r = 1; r <= stars; r++) {
            str += "*";
        }

        // Add spaces in the middle
        for (let j = 1; j <= spaces; j++) {
            str += " ";
        }

        // Add right stars
        for (let k = 1; k <= stars; k++) {
            str += "*";
        }

        // Print the current line
        console.log(str);
    }
    let mid = "";
    for(let p=1;p<=num;p++){
      mid+="*";
    }
    console.log(mid);
    for(let t = Math.floor(num/2);t>0;t--){
         let stars = t;
         let str="";
         
         for(let o = 1;o<=stars;o++){
            str+="*";
         }

         for(let y = 1;y<=num-2*t;y++){
            str+=" ";
         }

         for(let h = 1;h<=stars;h++){
            str+="*";
         }
         console.log(str);
    } 
}

pattern10(num);



 