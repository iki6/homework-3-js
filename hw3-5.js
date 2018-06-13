function stringExpansion(str, curRes=[]){
  let tmp = str.match(/\d{0,1}[a-z]/i);// 3a
  let result = curRes, remainStr = str;
  if(tmp){
      let curUnit = tmp[0].split('');
      let count = 0;
      for(var i in curUnit){
        if(!isNaN(Number(curUnit[i]))){
          count = Number(curUnit[i]);
        }else{
          count == 0 ? count = 1 : count = count ;
          for(var n=0; n<count; n++){
            result.push(curUnit[i]);
          }
        }
      }
      stringExpansion(remainStr.slice(tmp.index + curUnit.length), result);
  }else{
    console.log(result.join(''));
    return result.join('')
  }
}

stringExpansion("373Ab51S6d");
