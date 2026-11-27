function add(a,b){ // decraration
    let result=a+b // scoped variable
    return result  // return
}
let value=add(6,7)
// console.log(value) //calling

function greet(){
    // console.log("hello from avir")
    return "hello Avir"
}
value=greet()
// console.log(value)

// const Db_Connect= function(username,password){
//     return `Great!! ${username} you have succefully connected to Db with password ${password}`
// }

// console.log(Db_Connect("avir","riva@1234556789"))



// const Db_Connect= function(username,password="InvalId"){
//     return `Great!! ${username} you have succefully connected to Db with password ${password}`
// }

// console.log(Db_Connect("avir","vir@123"))


function addAll(...number){
    let sum=0
    for(n of number){
        sum+=n
    }
    return sum
}

// console.log(addAll(1,2,3,4,5,6,7,8))

// const arrowFunc=(a,b)=>{
//     return a+b
// }

const arrowFunc= (a,b) => a+b
console.log(arrowFunc(4,7))