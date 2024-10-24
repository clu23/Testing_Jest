

function reverseString(string){
    if (!string){
        return("");
    }
    else{
        return (string.split("").reverse().join(""));

    }
}

module.exports= reverseString;