console.log('Hello World!')

function Show(result){
    console.log(result)
}

function Calculate(x,y,callback){
    const result = x+y
    callback(result)
}

Calculate(10,30,Show)