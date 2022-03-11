const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let coded = [];
    for(let i = 0; i < expr.length/10; i++) {
        check = true;
        let morse = "";
        for(let k = i*10; k < 10+i*10; k++) {
            if (expr[k] == "*") {
                morse = "space";
                k = k +10;
                continue;
            }

            if (expr[k] == "0" & check) {
                continue;
            }
            check = false;

            if (expr[k+1] == "1") {
                morse += "-";
                k++;
            }
            else {
                morse += ".";
                k++;
            }
        }
        coded.push(morse);
    }
    let result = '';
    for (let letter of coded) {
        if (letter == "space") {
            result += " ";
            continue;
        }
        result += MORSE_TABLE[letter];
    }
    return result;
}

module.exports = {
    decode
}