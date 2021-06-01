// Add your functions here




function map(array,fn){
    let newArray = [];
    for (let i = 0;i<array.length;i++){
       newArray.push(fn(array[i]))
    };
    return newArray
};


function reduce(array,fn,startingPoint = 0){

    let isAllNums = array.every(function(n){return Number.isInteger(n)})


    if (startingPoint === 0 && isAllNums === true){
    let accumulator = startingPoint

    for (let i = 0;i<array.length;i++){
       accumulator = fn(array[i],accumulator)
    };

    return accumulator 
    }else if (startingPoint === 0 && isAllNums === false){
    
        let accumulator = !startingPoint

        for (let i = 0;i<array.length;i++){
           accumulator = fn(array[i],accumulator)
        };
    
        return accumulator 
    
    
    
    
    }else{
        let accumulator = startingPoint

        for (let i = 0;i<array.length;i++){
           accumulator = fn(array[i],accumulator)
        };
    
        return accumulator
        

    };

    
};