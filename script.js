window.onload = function() {
    let count = 0;


    const numberDisplay = document.getElementById('numberDisplay');
    const minusButton = document.getElementById('minusButton');
    const plusButton = document.getElementById('plusButton');
    const resetButton = document.getElementById('resetButton');

    const updateDisplay = () => {
        numberDisplay.textContent = count;

        if(count === 0) {
            minusButton.style.display = 'none';
        } else {
            minusButton.style.display = 'flex';
        }

    }

    const handleResetButtonClick = () => {
        count = 0;
        updateDisplay();
    }

    const handlePlusButtonClick = () => {
        count++;
        updateDisplay();
    }

    const handleMinusButtonClick = () => {
        count--;
        updateDisplay();
    }

    const updateCountText = () => {
        mainNumber.innerHTML = count;
    }

    updateDisplay();
    
    document.getElementById('plusButton').addEventListener('click', handlePlusButtonClick);
    document.getElementById('minusButton').addEventListener('click', handleMinusButtonClick);
    document.getElementById('resetButton').addEventListener('click', handleResetButtonClick);
};