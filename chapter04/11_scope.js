let a=7
let b=8 // global scope
// console.log(a)
function increment(){
    a+=2
    let result="kuchbhi" //functional scope
}
increment()
increment()
// console.log(a)
// console.log(result) // not Accessible


//clouser
function Counter(){//outer function
    let count=0 
    return function increment(){ //inner function
        count++
        return count
    }
    
}
const value=Counter()
console.log(value())
console.log(value())
console.log(value())
console.log(value())