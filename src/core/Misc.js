

export const formatValue = (value) => {
    let strValue = value.toString();
    let result = "";
    for (let i = 0; i < strValue.length; i++) {
        if (i % 3 === 0 && i !== 0) {
            result = "," + result;
        }
        result = strValue[strValue.length - i - 1] + result;
    }
    return result;
}

export default formatValue;