// Part 1

// Sigma

function sigma(num){

    var sum = 0;
    
    for(var i=num; i>0; i--){
        sum+=i;
    }
    return sum;
}
console.log(sigma(9));

// Factorial

function factoral(num){
    
    var sum = 1;
    
    for(var i=num; i>0; i--){
        sum*=i;
    }
    return sum;
}
console.log(factoral(3));

// Fibonacci

// without recursion
function fib(num){

    var arr = [0,1];
    arr.length = num+1;
    for(var i=2; i<arr.length; i++){
        arr[i] = (i-1)+(i-2);
    }
    return arr[num];
}
console.log(fib(4));

// with recursion
function fib(num){

    if(num === 0 || num == 1){
        return num;
    }
    
    return fib(num-1) + fib(num-2);
}
console.log(fib(3));

//Array: Second-to-Last

function secondLast(arr){
    if(arr.length<2){
        return null;
    }
    return arr[arr.length-2];
}

console.log(secondLast([42,true,4,'Liam',7]));

//Array: Nth-to-Last

function nthLast(arr,num){
    if(arr.length<num){
        return null;
    }
    return arr[arr.length - num];
}
console.log(nthLast([5,2,3,6,4,9,7],3));

//Array: Second-Largest

function secondLargest(arr){
    var second = 0;
    var max = arr[0];
    if(arr.length<2){
        return null;
    }
    for(var i=0; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }
        if(arr[i]>second && arr[i]<max){
            second = arr[i];
        }
    }
    return second;
}
console.log(secondLargest([42,1,4,3.14,7]));

//Double Trouble

function trouble(arr){
    
    var newArr = [];
    for(var i=0; i<arr.length; i++){
        for(var f=0; f<2; f++){
            newArr.push(arr[i]);
        }
    }
    return newArr; 
}
console.log(trouble([4,"Ulysses",42,false]));