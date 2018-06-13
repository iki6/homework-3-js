function reverseWord(str){
 var result = str.split(" ");
 for(word in result){
  result[word]=result[word].split("").reverse().join("");
 }
  return result.join(" ")
}

reverseWord("A fun little chalenge!");
