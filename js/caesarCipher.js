

function caesarCipher(string, shift){
    let output="";

    for(i=0;i<string.length;i++){
        let car=string[i].charCodeAt();

        if ((car >= 65 && car < 90) || (car >= 97 && car < 122)){
            car=car+shift;
            if ((car > 90 && string[i].charCodeAt() <= 'Z'.charCodeAt()) || car > 122) {
                car -= 26;
              }
        }
        output+=String.fromCharCode(car);
    }

    return(output)
}


module.exports = caesarCipher;