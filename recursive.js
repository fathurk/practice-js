const secondList = [{}, 10, -23, 1341, [2000, 200], 0, "2", undefined, ["adsa", 3249, "0", -1 ], -2123, "-23", 34 ] // jj


function recursive(array, idx = 0, lastIndex = false, sortCount = 0 ) {

    if (lastIndex) {
       if  (array[idx] > array[idx+1]) {
            var temp = array[idx]
            array[idx] = array[idx+1]
            array[idx+1] = temp

        } 
        if (idx == array.length) {
            if (sortCount == array.length -1) {
                return array
            }
            return recursive(array, 0, lastIndex, sortCount+1)
        }
        return recursive(array, idx+1, lastIndex, sortCount)
        
    } else {
        if (typeof array[idx] ==='object') {
            if (array[idx].length > 0) {
                array.push(...array[idx]) // 2000, 200
                array.splice(idx,1)
    
                return recursive(array, idx+1)
            }
            array.splice(idx,1)
            return recursive(array, idx)
        } else if ( !isNaN(parseInt(array[idx])) ) {
            array[idx] = Number(array[idx])
    
            return recursive(array, idx + 1)
        } else {
            array.splice(idx,1)
    
            if (idx == array.length) {
                lastIndex = true
                idx = 0
                return recursive(array, idx, lastIndex)
            } else {
                return recursive(array, idx)
            }
        }

    }



    // return array
}

console.log(recursive(secondList))