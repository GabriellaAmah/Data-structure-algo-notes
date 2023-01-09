import swap from "./swap"

//[78, 90, 0, 2, 4,1, 8, 9]
function selectionSort(array){
    for(let i = 0; i < array.length; i++){
        let min = i
        for(let j = i + 1; j < array.length; j++){
            if(arr[j] < arr[min]) min = j;
        }

        swap(array, i, min)
    }

    return arr
}