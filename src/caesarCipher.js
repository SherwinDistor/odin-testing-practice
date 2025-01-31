function caesarCipher(string, shiftFactor) {
    const newCharCode = [];
    let newString = '';
    for (let char of string) {
        let code = char.charCodeAt();

        if (code >= 65 && code <= 90) {
            code = code + shiftFactor;

            if (code > 90) {
                code = code - 26;
            }
        }

        if (code >= 97 && code <= 122) {
            code = code + shiftFactor;

            if (code > 122) {
                code = code - 26;
            }
        }

        newCharCode.push(code);
    }

    for (let i = 0; i < newCharCode.length; i++) {
        newString += String.fromCharCode(newCharCode[i]);
    }

    return newString;
}

export { caesarCipher };
