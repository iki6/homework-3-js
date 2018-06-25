function splitAndMerge(str, sp = " ") {
    let words = str.split(' ');
    words = words.map(function(w, i) {
        words.splice(i, 1, w.split(''));
        return words[i].join(sp);
    })
    words = words.join(' ');
    return words
}
splitAndMerge('Hi there', '+');
