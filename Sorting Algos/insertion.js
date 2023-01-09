

function insertion(array){
    for(let i = 1; i < array.length; i++){
        let currentVal = arr[i]
        let jIndex;
        for(let j = i - 1 ; j >= 0 && arr[j] > currentVal; j--){
            if(arr[j] > arr[j + 1]){
                arr[j + 1] = arr[j]
                jIndex = j
            }
        }

        arr[jIndex] = currentVal
    }

    return array
}