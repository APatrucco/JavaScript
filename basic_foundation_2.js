// Biggie Size

function biggieSize(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i]>0){
            arr[i] = 'big';
        }
    }
    return arr;
}
console.log(biggieSize([-5,-15,7,24,52,-12,78]));

// Print Low, Return High

function lowHigh(arr){
    var low = arr[0];
    var high = arr[0];
    for(var i=0; i<arr.length; i++){
        if(arr[i]<low){
            low = arr[i];
        }
        if(arr[i]>high){
            high = arr[i];
        }
    }
    console.log(low);
    return high;
}
console.log(lowHigh([3,74,18,-2,0,22]));

// Print One, Return Another

function oneAnother(arr){
    console.log(arr[arr.length-2]);
    for(var i=0; i<arr.length; i++){
        if(arr[i] % 2 == 1){
            return arr[i];
        }
    }
}
console.log(oneAnother([2,4,5,6,8,11,10]));

// Double Vision

function double(arr){
    var newArr = [];
    for(var i=0; i<arr.length; i++){
        newArr[i] = arr[i] * 2;
    }
    return newArr;
}
console.log(double([1,2,3]));

// Count Positives

function countPositives(arr){
    var positives = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i]>0){
            positives++;
        }
    }
    arr[arr.length-1] = positives;
    return arr;
}
console.log(countPositives([-1,1,1,1]));

// Evens and Odds

function evenOdd(arr){
    var odds = 0;
    var evens = 0;
    
    for(var i=0; i<arr.length; i++){
        if(arr[i] == arr[i+1] && arr[i] %2 == 1){
            odds++;
            if(odds == 2){
                console.log("That's odd!");
                odds = 0;
            }
        }
        
        if(arr[i] == arr[i+1] && arr[i] % 2 === 0){
            evens++;
            if(evens == 2){
                console.log("Even more so!");
                evens = 0;
            }
        }
    }
}
evenOdd([1,2,3,1,1,1,2,2,2,2,4,4,4]);

// Increment the Seconds

function increment(arr){
    for(var i=0; i<arr.length; i++){
        if(i % 2 == 1){
            arr[i] += 1;
        }
        console.log(arr[i]);
    }
    return arr;
}
console.log(increment([1,2,3,4,5,6,7]));

// Previous Lengths

function previousLength(arr){
    for(var i = arr.length - 2; i >= 0; i--){
        arr[i+1] = arr[i].length;
    }
    return arr;
}
console.log(previousLength(["hello","dojo","awesome"]));

// Add Seven

function addSeven(arr){
    var newArr = [];
    for(var i=0; i<arr.length; i++){
        newArr[i] = arr[i]+7;
    }
    return newArr;
}
console.log(addSeven([1,2,3]));

// Reverse Array

function reverse(arr){
    arr = arr.reverse();
    return arr;
}
console.log(reverse([1,2,3,4,5]));

// Outlook: Negative

function negative(arr){
    var newArr = [];
    for(var i=0; i<arr.length; i++){
        if(arr[i]>0){
            newArr[i] = arr[i] * -1;
        }
        else{
            newArr[i] = arr[i];
        }
    }
    return newArr;
}
console.log(negative([1,-3,5]));

// Always Hungry

function hungry(arr){
    var feedMe = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i] == 'food'){
            console.log('yummy');
            feedMe++;
        }
    }
    if(feedMe === 0){
        console.log("I'm hungry");
    }
}
hungry([1,2,3,4,'food']);

// Swap Toward the Center

function swapTowardCenter(arr){
    var temp = '';
    var count = 1;
    for(var i=0; i<arr.length; i++){
        if(i % 2 === 0){
            temp = arr[i];
            arr[i] = arr[arr.length - count];
            arr[arr.length - count] = temp;
        }
        if(count >= arr.length/2){
            return arr;
        }
        count++;
    }
}
console.log(swapTowardCenter([true,42,'ada',2,'pizza',15,false,'guacamole']));

// Scale the Array

function scaleArray(arr,num){
    for(var i=0; i<arr.length; i++){
        arr[i] = arr[i] * num;
    }
    return arr;
}
console.log(scaleArray([1,2,3],3));