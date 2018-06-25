function reverseWord(str) {
    var result = str.split(" ");
    result = result.map(function(current, i) {
        return current.split("").reverse().join("");
    })
    return result.join(" ")
}

reverseWord("A fun little chalenge!");
