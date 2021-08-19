// common function 
function getInput(destination, isIncrease, isMars) {
    const inputField = document.getElementById(destination + '-input');
    const inputFieldNumber = parseInt(inputField.value);
    if (inputFieldNumber >= 0 && isIncrease === true) {

        inputField.value = inputFieldNumber + 1;

    }
    else if (inputFieldNumber > 0 && isIncrease === false) {
        inputField.value = inputFieldNumber - 1;
    }
    const marsCost = document.getElementById(destination + '-cost');

    if (isMars === true) {
        marsCost.innerText = inputField.value * 2200;
    } else {
        marsCost.innerText = inputField.value * 1000;
    }
    const total = document.getElementById('total-cost');
    total.innerText = parseInt(document.getElementById('mars-cost').innerText) + parseInt(document.getElementById('moon-cost').innerText)
};
// plus button for mars 
document.getElementById('increase-button').addEventListener('click', function () {
    getInput('mars', true, true);
});
// minus button for mars
document.getElementById('decrease-button').addEventListener('click', function () {
    getInput('mars', false, true)
})

// plus butotn for moon 
document.getElementById('increase-button-moon').addEventListener('click', function () {
    getInput('moon', true, false);
});

// minus button for moon 
document.getElementById('decrease-button-moon').addEventListener('click', function () {
    getInput('moon', false, false);
});