function toCamelCase(str) {
    let newStr = str.split(/[\-\_]{1,}/g);
    let result = newStr.map(function(current, i) {
        let tmpRes = current.split("");
        tmpRes[0] = tmpRes[0].toUpperCase();
        return tmpRes.join("");
    })
    result = result.join("");
    result = newStr[0].concat(result)
    return result
}
toCamelCase("what_a-nice-day");
