exports.min = function min(array) {
    if (array !== undefined && array.length !== 0) {
        let min = array[0];
        for (let i = 1; i < array.length; i++) {
            if (min > array[i]) {
                min = array[i];
            }
        }
        return min;
    }
    return 0;
}

exports.max = function max(array) {
    if (array !== undefined && array.length !== 0) {
        let max = array[0];
        for (let i = 1; i < array.length; i++) {
            if (max < array[i]) {
                max = array[i];
            }
        }
        return max;
    }
    return 0;
}

exports.avg = function avg(array) {
    if (array !== undefined && array.length !== 0) {
        let sum = 0;
        for(let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum / array.length;
    }
    return 0;
}
