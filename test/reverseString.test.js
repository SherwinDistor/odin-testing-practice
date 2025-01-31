import { reverseString } from '../src/reverseString';

test('Takes a string and returns it reversed', () => {
    const string = 'hello';
    expect(reverseString(string)).toBe('olleh');
});
