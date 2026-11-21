// for(let i=0;i<10;i+=2){
//     console.log(i)
// }

// for(let i=9;i>=0;i--){
//     console.log(i)
// }

// for(let i=0;i<=20;i++){
//     if(i%2==0){
//         console.log("even:",i)
//     }
// }
// for(let i=0;i<=20;i++){
//     if(i%2!=0){
//         console.log("odd:",i)
//     }
// }

let n=8
let isPrime=true
for(let i=2;i<n;i++){
    if(n%i==0){
        isPrime=false
    }
}
if(isPrime){
    console.log("prime")
}else{
    console.log("not prime")
}