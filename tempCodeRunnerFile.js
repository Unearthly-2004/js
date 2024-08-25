let num = 7;
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
}

pattern10(num);