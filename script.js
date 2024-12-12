window.onload = function() {
    let count = 0;


    const numberDisplay = document.getElementById('numberDisplay');
    const minusButton = document.getElementById('minusButton');
    const plusButton = document.getElementById('plusButton');

    const updateDisplay = () => {
        numberDisplay.textContent = count;

        if(count === 0) {
            minusButton.style.display = 'none';
        } else {
            minusButton.style.display = 'flex';
        }

    }
    updateDisplay();


    const handlePlusButtonClick = () => {
        count++;
        console.log(count);
        updateDisplay();
    }

    const handleMinusButtonClick = () => {
        count--;
        console.log(count);
        updateDisplay();
    }

    const updateCountText = () => {
        mainNumber.innerHTML = count;
    }
    
    document.getElementById('plusButton').addEventListener('click', handlePlusButtonClick);
    document.getElementById('minusButton').addEventListener('click', handleMinusButtonClick);
};