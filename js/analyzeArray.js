


function analyzeArray(list){
    if (list.length>0){
        const max = Math.max(...list);
        const min = Math.min(...list);
        const sum = list.reduce((a, b) => a + b, 0);
        const avg = sum/list.length;
        return(
            {average: avg,
            min: min,
            max: max,
            length: list.length
            }
        )
    }
}

module.exports = analyzeArray;