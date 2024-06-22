function calculate() {
    const entry = document.getElementById('entry').value;
    const resultDiv = document.getElementById('result');
    const purchaseLabel = document.getElementById('purchase');

    try {
        const expression = entry.replace(/ \+/g, '+');
        const result = eval(expression);
        resultDiv.textContent = result;
        purchaseLabel.style.display = 'none';
    } catch (e) {
        resultDiv.textContent = "Error: Your behavior is unsustainable. Do better.";
        purchaseLabel.style.display = 'block';
    }
}

function clearEntry() {
    document.getElementById('entry').value = '';
    document.getElementById('result').textContent = '';
    document.getElementById('purchase').style.display = 'none';
}

function appendToEntry(symbol) {
    const entry = document.getElementById('entry');
    const operatorAdded = entry.value.slice(-1) === ' ';
    if (operatorAdded) {
        entry.value += symbol;
    } else if (entry.value && entry.value.slice(-1) !== ' ') {
        entry.value += " + " + symbol;
    } else {
        entry.value += symbol;
    }
}
