import { sum } from '@/utils';

describe('sum function', () => {
    it('should add two numbers together', () => {
        expect(sum(1, 2)).toBe(3);
    });
});
