import swap from "./swap"

function bubbleSort(arr){
    for(let i = arr.length; i > 0; i--){
        let noSwap = true
        for(let j = 0; j < arr.length; j++){
            if(arr[j] > arr[j + 1]){
                swap(arr, j, j + 1)
                noSwap = false
            }
        }

        if(noSwap) break
    }
}