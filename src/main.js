const {isInvalidNumber, greaterThan, trim} = require("./lib/stringMath");

function getSecondMax(arr){

    if(arr && arr.length && arr.length > 1){
        let trimCache = {};
        let max, secondMax;
        let err = arr.some(ele => {
            if(isInvalidNumber(ele)){
                return true;
            }
            let trimStr = trim(ele);
            if(trimCache[trimStr]){
                return;
            }
            trimCache[trimStr] = true;
            if(max === undefined){
                max = ele;
                return;
            }
            if(secondMax === undefined){
                if(greaterThan(max, ele)){
                    secondMax = ele;
                    return;
                }
                secondMax = max;
                max = ele;
                return;
            }
            if(greaterThan(secondMax, ele)){
                return;
            }
            if(greaterThan(max, ele)){
                secondMax = ele;
                return;
            }
            secondMax = max;
            max = ele;
        })
        return err || (secondMax === undefined) ? -1 : secondMax;
    }
    return -1;
}

module.exports = {
    getSecondMax
};