function capitalize(string){
    if (!string){
        return("");
    }
    else{
        let s=string.substring(0,1).toUpperCase();
        let remain=string.slice(1);
        return (s+remain);
    }
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


