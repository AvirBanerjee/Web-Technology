let savings=500

savings-=100 // ice cream
// savings-=50 // cold coffee

console.log(savings)
let price=350 ;
if(savings>=price){
    console.log("Yes I can Buy")
    let balace=savings-price
    if(balace >=50){
        console.log("I can buy a cold coffee")
    }
    else{
        console.log(balace)
    }
}else{
    console.log("I have to save more")
}


const marks=56
if(marks>100){
    console.log("Invalid")
} else{
    if(marks>90){
    console.log("A")
    }else if(marks>80){
        console.log("B")
    }else if(marks >50){
        console.log("C")}
    else{
        console.log("D")
    }
}
