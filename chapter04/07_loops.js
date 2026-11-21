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

// let n=8
// let isPrime=true
// for(let i=2;i<n;i++){
//     if(n%i==0){
//         isPrime=false
//     }
// }
// if(isPrime){
//     console.log("prime")
// }else{
//     console.log("not prime")
// }

// let n=5
// for(let i=0;i<n;i++){
//     // console.log("*")
//     let row=""
//     for(let j=0;j<i+1;j++){
//         row+="*"
//     }
//     console.log(row)
// }

//while loop

// sum of digit of a number

// let num=4567
// let sum=0
// while(num>0){
//     let digit=num%10
//     sum+=digit
//     value=Math.floor(num/10)
//     num=value
// }
// console.log(sum)

// let n=10
// let i=0
// while(i<10){
//     console.log(i)
//     i++
// }

// do while
// let n=20
// let i=22
// do {
//     console.log(i)
//     i++
// } while (i<=20);

// while(i<=20){
//     console.log(i)
//     i++
// }


//for of
// let marks=[34,56,7,6,8,9,76,5]
// for(const mark of marks){
//     console.log(mark)
// }

//for in
let user={
    user:"vir",
    email:"avir@gamil.com",
    contact:"8780205827577240"
}

for(const key in user){
    console.log(key,user[key])
}