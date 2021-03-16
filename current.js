function happyCheck(arrayNum){
    let digits = arrayNum.length;
    let count = 1;

    let x= [];
    let square =[];

    let sum =0;
    let stringSum= "";

    for(i=0; i<digits; i++){
        x[i] = parseInt(arrayNum[i]);
        square[i] = (x[i]*x[i]);
    }

    for(i=0; i<square.length; i++){
        sum += square[i];
    }

    stringSum = sum.toString();
    
    return stringSum;
}

let sum;
let repeatSum;
let stringSum;
let bufferSum;

let stringNum = prompt("Please enter a number that you want to check to see if its happy: ");
let arrayNum = stringNum.split("");
    
stringSum = happyCheck(arrayNum);

console.log(stringSum)

for(iteration=0; iteration<12; iteration++){
    bufferSum = stringSum;
    stringSum = happyCheck(bufferSum);
    console.log(stringSum);
    repeatSum = stringSum;
}

if(parseInt(repeatSum) === 1){
    console.log("This number is happy!");
}else{
    console.log("This number is NOT happy!");
}
