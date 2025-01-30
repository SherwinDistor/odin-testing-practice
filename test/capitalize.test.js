import { capitalize } from '../src/capitalize';

test('Takes a string and returns it with the first character capitalized', () => {
    const string = 'test string';
    expect(capitalize(string)).toBe('Test string');
});
