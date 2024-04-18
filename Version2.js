function drawTriangle(height, symbol, row = 1) {
    if (row > height) {
        return;
    }
    
    let line = '';
    for (let i = 1; i <= row; i++) {
        line += symbol;
    }
    console.log(line);
    
    drawTriangle(height, symbol, row + 1);
}

// Як використовуємо:
drawTriangle(5, '*');
