let x = 12
let count =0
while(x>1) {
    if(x == 2){
        x=x/2
        count = count + 1
        console.log(`Step ${count} : ${x} - stop`)
        break
    }
    else if(x % 2 == 0){
        count = count + 1
        console.log(`Step ${count} : ${x} - even (divide by 2)`)
        x=x/2
    }
    else{
        count = count + 1
        console.log(`Step ${count} : ${x} - odd (3(${x}) + 1)`)
        x=3*x+1
    }
  }
console.log(`Total Number of Steps : ${count}`)