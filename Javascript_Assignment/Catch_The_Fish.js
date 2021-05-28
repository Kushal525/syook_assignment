const total = 24
const K=2
const L=3
const M=4
const N=5
let count = 0
let not_hit =[]
for(let i=1; i<=total; i++){
    if(i%K==0 || i%L==0 || i%M==0 || i%N==0){
        count = count + 1
    }else{
        not_hit.push(i)
    }
}
let number = total - not_hit.length

if(total==count){
    console.log("Total : "+ total)
}
else{
    console.log("Total : "+ total)
    console.log("Espaced Fishes : "+ not_hit)
}

