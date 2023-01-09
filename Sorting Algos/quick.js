import swap from "./swap"

const pivot = (array, start = 0, end = array.length - 1) => {

    let pivot = arr[start]
    let swapIndex = start

    for(let i = start; i <= end; i++) {
        if(arr[i] < pivot){
            swapIndex++
            swap(array, swapIndex, i )
        }
    }

    swap(array, start, swapIndex)

    return swapIndex
}


const quickSort = (array, start = 0, end = array.length - 1) => {
    if(start < end){
        let swapIndex = pivot(array, start, end)

        quickSort(array, 0, swapIndex - 1)
        quickSort(array, swapIndex + 1, end)
    }

    return array
}

[23, 4, 89, 12, 3]