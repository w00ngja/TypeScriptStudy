"use strict";
// 20231004
function addType(n1, n2) {
    const result = n1 + n2;
    return result;
}
function combine(input1, input2, resultConversion) {
    let result;
    if ((typeof input1 === 'number' && typeof input2 === 'number') || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
