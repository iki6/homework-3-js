function toCamelCase(str){
  let result = [];
  let newStr = str.split(/[\-\_]{1,}/g);
  for(var i=1; i<newStr.length;i++){
   let tmpRes = newStr[i].split("");
   tmpRes[0]=tmpRes[0].toUpperCase();
    tmpRes =tmpRes.join("");
    result.push(tmpRes)
  }
  result=result.join("");
  result = newStr[0].concat(result)
  return result

}
toCamelCase("what_a-nice-day");
