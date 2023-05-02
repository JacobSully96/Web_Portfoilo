const buttons = document.querySelectorAll('.btn-number, .btn-operator, .btn-decimal');
const display = document.querySelector('.outputDisplay');
const equalsButton = document.querySelector('.btn-equals');
const clearButton = document.querySelector('.btn-clear');
const deleteButton = document.querySelector('.btn-delete');


let displayData = "";

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.getAttribute('data-num');

        displayData += buttonValue;
        display.textContent = displayData;
    })
})

// Equals Button
equalsButton.addEventListener('click', () => {

    // Check for invalid character at end of expression from user
    let lastChar = "";

    // Loop input and put all values in an array to find the last index value
    // save last index value into variable for later validation
    for (let i = 0; i < displayData.length; i++) {
        console.log(`i = ${i}: ${displayData[i]}`);
        lastChar = displayData[displayData.length - 1];
    }
  
    // If last index is NOT A NUMBER give user an alert, otherwise continue calculation
    if(!isNaN(lastChar)){
        displayData = parseFloat(eval(displayData).toFixed(2));
        display.textContent = displayData;
    }else{
        alert("Invalid User Input");
    }

})

// Clear Button
clearButton.addEventListener('click', () => {
    displayData = "";
    display.textContent = displayData;
})

//Delete Button
deleteButton.addEventListener('click', () => {
    let result = "";

    // Loops through displayData for all indivdual characters leaving out the last element, basically to delete the last entry if you entered something unwanted
    for (let i = 0; i < displayData.length - 1; i++) {
        result += displayData[i];
    }

    displayData = result;
    display.textContent = displayData;
})








