import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

// Skenario 1: Menguji penjumlahan dengan dua bilangan positif
test('should return the sum of two positive numbers', () => {
    assert.strictEqual(sum(5, 3), 8);
});

// Skenario 2: Menguji jika salah satu input adalah angka negatif
test('should return 0 when one or both numbers are negative', () => {
    assert.strictEqual(sum(-5, 3), 0);
    assert.strictEqual(sum(5, -3), 0);
    assert.strictEqual(sum(-5, -3), 0);
});

// Skenario 3: Menguji jika input bukan tipe number
test('should return 0 when either input is not a number', () => {
    assert.strictEqual(sum('5', 3), 0);
    assert.strictEqual(sum(5, '3'), 0);
    assert.strictEqual(sum('5', '3'), 0);
    assert.strictEqual(sum(null, 3), 0);
    assert.strictEqual(sum(5, undefined), 0);
});

// Skenario 4: Menguji jika input 0
test('should return the correct sum when one or both numbers are zero', () => {
    assert.strictEqual(sum(0, 5), 5);
    assert.strictEqual(sum(5, 0), 5);
    assert.strictEqual(sum(0, 0), 0);
});
