let number = 19
//Sample numbers 1,7,15,23,31

let binarynumber = 0;

//Conver Given number into binary number
const convertToBinary=(x)=> {
    let rem, i = 1;
    while (x != 0) {
        rem = x % 2;
        x = parseInt(x / 2);
        binarynumber = binarynumber + rem * i;
        i = i * 10;
    }
    console.log(`Binary: ${binarynumber}`);
}

convertToBinary(number);

let codes= []
let code_string = []
while(binarynumber > 0){
    let binary = binarynumber.toString()
    let length_of_binary = binary.length
    let num = 10**parseInt(length_of_binary-1)
    binarynumber=binarynumber % num
    codes.push(num)
}
let codes_result = codes.reverse()
let codes_result_length = codes_result.length

//Codes Table
let codes_table = {
    1:"Pop",
    10: "Double Rip",
    100: "Hide Your Mints",
    1000: "Fall"
}

for(i=0; i<codes_result_length; i++){
    if(codes[i]==10000){
        code_string = code_string.reverse()
    }else{
    code_string.push(codes_table[codes[i]])
    }
}
console.log(codes)
console.log(code_string)