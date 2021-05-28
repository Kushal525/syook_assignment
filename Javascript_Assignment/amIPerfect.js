const num = 6
let factors = 0
for(let i = 1; i <= num; i++) {
    // Excluding Number itself
    if(i!=num){
    if(num % i == 0) {
        factors = factors+i
    }
}
}

if(factors == num){
    console.log("Perfect Number")
}else if(factors>num){
    console.log("Abundant")
}else{
    console.log("Deficient")
}