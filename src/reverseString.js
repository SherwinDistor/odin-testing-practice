function reverseString(string) {
    const array = [];
    for (let i = 0; i <= string.length; i++) {
        array.push(string.at(i));
    }

    return array.reverse().join('');
}

export { reverseString };
