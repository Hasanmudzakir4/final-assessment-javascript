function fibonacci(n) {
    if (n === 0) {
        return [0];
    } else if (n === 1) {
        return [0, 1];
    } else {
        const previous = fibonacci(n - 1);
        return [...previous, previous[previous.length - 1] + previous[previous.length - 2]];
    }
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
