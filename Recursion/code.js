function checkParenthesisString(inputWord){
    // check that the length of the string is even so that the parenthesis are balanced
    if(inputWord.length % 2 !== 0){
        return false;
    }

    let word = inputWord
    let validParam = true

    while(word.length && validParam){
        const parenthesisChecker =  word.match(/\(\)/i) || false
        if(parenthesisChecker){
            word = word.replace(/\(\)/g, '')
        }
        
        const curlyChecker  =  word.match(/\{\}/i) || false
        if(curlyChecker){
            word = word.replace(/\{\}/g, '')
        }

        const squareChecker =  word.match(/\[\]/i) || false
        if(squareChecker){
            word = word.replace(/\[\]/g, '')
        }

        if(!parenthesisChecker && !curlyChecker && !squareChecker) validParam =  false
    }

    return true
}