function vowelsAndConsonants(s) {
    
    var vowels = new Array("a", "e", "i", "o", "u");
    
    for (let i = 0; i < s.length; i++) {
        if (vowels.indexOf(s[i]) > -1) {
            console.log(s[i]);
        }
    }
    
    for (let j = 0; j < s.length; j++) {
        if (vowels.indexOf(s[j]) == -1) {
            console.log(s[j]);
        }
    }
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}
