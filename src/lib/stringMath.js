const MINUS = '-';
const ZERO = '0';
const MAX_SAFE_NUMBER_LENGTH = Number.MAX_SAFE_INTEGER.toString().length;

let greaterThan = (str1, str2) => {
    if(str1 === str2){
        return false;
    }
    if(str1.length < MAX_SAFE_NUMBER_LENGTH && str2.length < MAX_SAFE_NUMBER_LENGTH){
        return Number(str1) > Number(str2);
    }
    str1 = trim(str1);
    str2 = trim(str2);
    if(str1 === str2){
        return false;
    }
    if(str1.charAt(0) === MINUS && str2.charAt(0) !== MINUS){
        return false;
    }
    if(str1.charAt(0) !== MINUS && str2.charAt(0) === MINUS){
        return true;
    }
    let isNegative = str1.charAt(0) === MINUS;
    if(str1.length > str2.length){
        return !isNegative;
    }
    if(str1.length < str2.length){
        return isNegative;
    }
    let diffIndex = 0;
    while(str1.charAt(diffIndex) === str2.charAt(diffIndex)){
        diffIndex++;
    }
    if(str1.charAt(diffIndex) > str2.charAt(diffIndex)){
        return !isNegative;
    }
    return isNegative;
}

let equals = (str1, str2) => {
    if(str1 === str2){
        return true;
    }
    if(str1.length < MAX_SAFE_NUMBER_LENGTH && str2.length < MAX_SAFE_NUMBER_LENGTH){
        return Number(str1) === Number(str2);
    }
    str1 = trim(str1);
    str2 = trim(str2);
    return str1 === str2;
}

let notEquals = (str1, str2) => !equals(str1, str2);

let greaterThanEqual = (str1, str2) => 
    equals(str1, str2) || greaterThan(str1, str2);

let lessThan = (str1, str2) => greaterThan(str2, str1);

let lessThanEqual = (str1, str2) => 
    equals(str1, str2) || lessThan(str1, str2);

let trim = (str) => {   
    if(str.length > 1 || (
        str.charAt(0) === ZERO || (
            str.charAt(0) === MINUS && str.charAt(1) === ZERO
        )
    )){
        let isNegative = str.charAt(0) === MINUS;
        let beg = isNegative ? 1 : 0;
        while(str.charAt(++beg) === ZERO);
        let trimStr = isNegative ? MINUS : '';
        while(beg < str.length){
            trimStr+=str.charAt(beg++);
        }
        return trimStr;
    }
    return str;
}

let isInvalidNumber = (str) => {
    return isNaN(str) || typeof str !== 'string' || str === '';
}

module.exports = {
    greaterThan,
    greaterThanEqual,
    lessThan,
    lessThanEqual,
    trim,
    isInvalidNumber,
    equals,
    notEquals,
}