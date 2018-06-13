function splitAndMerge(str, sp=" "){
  let words = str.split(' ');
  for(w in words){
    words.splice(w,1,words[w].split(''));
    words[w] = words[w].join(sp);
  }
  words = words.join(' ');
  return words
}
splitAndMerge('Hi there', '+');
