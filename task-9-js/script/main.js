// Function to generate a random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to split the number into parts and display as blocks with different colors
function splitNumber() {
    var numberInput = parseInt(document.getElementById('number').value);
    var numberOfSplits = parseInt(document.getElementById('splits').value);

    // Clear existing content in the result container
    var resultContainer = document.querySelector('.result-container');
    resultContainer.innerHTML = '';

    // Split the number into parts
    var parts = [];
    var quotient = Math.floor(numberInput / numberOfSplits);
    var remainder = numberInput % numberOfSplits;

    for (var i = 0; i < numberOfSplits; i++) {
        if (i < remainder) {
            parts.push(quotient + 1);
        } else {
            parts.push(quotient);
        }
    }

    // Display parts as blocks with different colors
    parts.forEach(function(part) {
        var block = document.createElement('div');
        block.textContent = part;
        block.style.backgroundColor = getRandomColor();
        block.classList.add('number-block');
        resultContainer.appendChild(block);
    });
}

// Add click event listener to the Split button
document.getElementById('splitButton').addEventListener('click', splitNumber);
