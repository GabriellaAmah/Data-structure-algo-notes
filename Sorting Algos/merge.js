import swap from "./swap"

function merge(array1, array2) {
    let firstPointer = 0
    let secondPointer = 0

    let  newArray = []

    while(firstPointer < array1.length && secondPointer < array2.length) {
        if(array1[firstPointer] > array2[secondPointer]){
            newArray.push(array2[secondPointer]);
            secondPointer++;
        }else{
            newArray.push(array1[firstPointer])
            firstPointer++
        }
    }

    if(firstPointer !== array1.length){
        newArray = newArray.concat(array1.slice(firstPointer));
    }

    if(secondPointer !== array2.length){
        newArray = newArray.concat(array2.slice(secondPointer));
    }

    return newArray;
}

function mergeSort(array){
    if (array.length <= 1) return array

    let midPoint = Math.floor(array.length / 2)

    let left = mergeSort(array.slice(0, midPoint))
    let right = mergeSort(array.slice(midPoint))

    return merge(left, right)
}