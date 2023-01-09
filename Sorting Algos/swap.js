
/**
 * 
 * @param {string<Array> | number<Array>} arr 
 * @param {number} firstIndex 
 * @param {number} secondIndex 
 * @returns 
 */
function swap(arr, firstIndex, secondIndex) {
    let temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;

    return arr
}

export default swap