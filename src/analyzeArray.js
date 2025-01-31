function analyzeArray(array) {
    const sortedArray = array.sort();
    const average =
        sortedArray.reduce((sum, curr) => sum + curr) / sortedArray.length;
    const min = sortedArray[0];
    const max = sortedArray[sortedArray.length - 1];
    const length = sortedArray.length;
    return {
        average,
        min,
        max,
        length,
    };
}

export { analyzeArray };
