import reverse from '../hexlet-jest/src/index.js';

test('reverse', () => {
    expect(reverse('hello')).toEqual('olleh');
    expect(reverse('')).toEqual('');
});