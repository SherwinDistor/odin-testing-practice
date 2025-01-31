import { calculator } from '../src/calculator';

describe('Calculator', () => {
    // test add
    test('Numbers 2 + 3 = 5', () => {
        expect(calculator.add(2, 3)).toEqual(5);
    });
    // test subtract
    test('Numbers 6 - 3 = 3', () => {
        expect(calculator.subtract(6, 3)).toEqual(3);
    });
    // test divide
    test('Numbers 10 / 5 = 2', () => {
        expect(calculator.divide(10, 5)).toEqual(2);
    });
    // test multiply
    test('Numbers 5 * 5 = 25', () => {
        expect(calculator.multiply(5, 5)).toEqual(25);
    });
});
