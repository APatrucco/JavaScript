// Get 1 to 255

function oneTo255(){
    var arr = [];
    for(var i=1; i<=255; i++){
        arr.push(i);
    }
    return arr;
}
console.log(oneTo255());

// Get even 1000

function getEven(){
    var sum = 0;
    for(var i=2; i<=1000; i+=2){
        sum += i;
    }
    return sum;
}
console.log(getEven());

// Get even 1000 - second iteration

function getEven(){
    var sum = 0;
    for(var i=1; i<=1000; i++){
        if(i % 2 == 0){
            sum += i;
        }
    }
    return sum;
}
console.log(getEven());

// Sum odd 5000

function sumOdd(){
    var sum = 0;
    for(var i=1; i<5000; i+=2){
        sum+=i;
    }
    return sum;
}
console.log(sumOdd());

// Iterate an array

function iterateArray(arr){
    var sum = 0;
    for(var i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    return sum;
}
console.log(iterateArray([1,2,3,4,5]));

// Find max

function findMax(arr){
    var max = arr[0];
    for(var i=0; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax([-20,15,0,42,8]));

// Find average

function findAverage(arr){
    var sum = 0;
    for(var i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    sum /= arr.length;
    return sum;
}
console.log(findAverage([1,3,5,7,20]));

// Array odd

function arrayOdd(){
    var oddArr = [];
    for(var i=1; i<50; i+=2){
        oddArr.push(i);
    }
    return oddArr;
}
console.log(arrayOdd());

// Greater than Y

function greaterThanY(arr, y){
    var newArr = [];
    for(var i=0; i<arr.length; i++){
        if(arr[i]>y){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(greaterThanY([1,3,5,7], 3));

// Squares

function squares(arr){
    for(var i=0; i<arr.length; i++){
        arr[i] *= arr[i];
    }
    return arr;
}
console.log(squares([1,5,10,-2]));

// Negatives

function negatives(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i]<0){
            arr[i] = 0;
        }
    }
    return arr;
}
console.log(negatives([1,5,10,-2]));

// Max/Min/Avg

function maxMinAvg(arr){
    var newArr = []
    var max = arr[0];
    var min = arr[0];
    var avg = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }
        if(arr[i]<min){
            min = arr[i];
        }
        avg += arr[i];
    }
    avg /= arr.length;
    newArr.push(max, min, avg);
    return newArr;
}
console.log(maxMinAvg([1,5,10,-2]));

// Swap Values

function swapValues(arr){
    var temp = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = temp;
    return arr;
}
console.log(swapValues([1,5,10,-2]));

// Number to String

function numberToString(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i]<0){
            arr[i] = 'Dojo';
        }
    }
    return arr;
}
console.log(numberToString([-1,-3,2]));