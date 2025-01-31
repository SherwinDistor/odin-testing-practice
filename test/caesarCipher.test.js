import { caesarCipher } from '../src/caesarCipher';

test('Takes a string and a shift factor and returns it with each character “shifted”', () => {
    expect(caesarCipher('abc', 3)).toBe('def');
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    expect(caesarCipher('XYZ', 3)).toBe('ABC');
    expect(caesarCipher('xyz', 3)).toBe('abc');
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});
