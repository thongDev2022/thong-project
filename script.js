console.log('Hello World!')

function Show(result){
    console.log(result)
}

function Calculate(x,y,callback){
    const result = x+y
    callback(result)
}

Calculate(10,30,Show)

const animals = ['dog','cat','pig']
const [d,c,p] = animals
console.log(d,p)    
