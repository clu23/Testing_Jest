function capitalize(string){
    let s=string[0].toUpperCase()
    for(let i=1;i<string.length;i++){
        s+=string[i]
    }
    return s;
};



function isUpperCase(char){
    if (char == char.toUpperCase() && char != char.toLowerCase()) {
      return true;
    }
    return false;
  };


function isLowerCase(char){
    if (char == char.toLowerCase() && char != char.toUpperCase()){
        return true;
    }
    return false;
}

module.exports= capitalize;


