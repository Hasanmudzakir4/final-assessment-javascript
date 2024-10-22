import { sum } from './index.js';
import { test } from 'node:test';
import assert from 'node:assert';

// Test case 1: Test penjumlahan 1 + 2
test('sum of 1 and 2 should be 3', () => {
    const result = sum(1, 2);
    assert.strictEqual(result, 3);
});

// Test case 2: Test penjumlahan -1 + -1
test('sum of -1 and -1 should be -2', () => {
    const result = sum(-1, -1);
    assert.strictEqual(result, -2);
});

// Test case 3: Test penjumlahan 0 + 0
test('sum of 0 and 0 should be 0', () => {
    const result = sum(0, 0);
    assert.strictEqual(result, 0);
});
