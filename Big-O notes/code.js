// determining O(1)

function getSum(n){
    return n * (n + 1) / 2;
}

// determining O(n)

function getSum(n){
    let sum = 0;
    for(let i = 0; i <= n; i++){
        sum += i;
    }
    return sum;
}

// determining O(n^2)
function getSum(n){
    let sum = 0;
    for(let i = 0; i <= n; i++){
        for(let j = 0; j <= n; j++){
            sum += i + j;
        }
    }
    return sum;
}
