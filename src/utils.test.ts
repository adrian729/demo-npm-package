import { expect, test } from 'vitest';
import { add, hello } from './utils.js';

test('add', () => {
    expect(add(1, 2)).toBe(3);
});

test('hello', () => {
    expect(hello('world')).toBe('Hello, world!');
});
