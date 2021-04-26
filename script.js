let currentNumber = "";


/*
    Getter & Setter function
*/
function getNumber(){
    return currentNumber;
}

function setNumber(input){
    currentNumber += input;
}
function setCleanedInput(input){
    currentNumber = input;
}
function setNumberDegree(input){
    currentNumber = input;
}

/*
    Input cleaning function
*/
function cleanInput(){
    let inputToClean = getNumber();
    let inputSize = inputToClean.length;

    if (inputSize === 0) return;
    if (inputToClean[0] === "0"){
        let cleanedInput = inputToClean.split('');
        cleanedInput.splice(0, 1);
        cleanedInput = cleanedInput.toString();
        setCleanedInput(cleanedInput);
    }
}

/*
    Screen function
*/
function updateOutput(){
    return getNumber();
}

function displayInput(){
    document.getElementById('input_screen').innerText = getNumber();
}

function cleanInputScreen(){
    document.getElementById('input_screen').innerText = "";
}

/*
    Reset function
*/
function resetButton(){
    currentNumber = "0";
    displayInput();
    updateOutput();
}

/*
    Calculation button function
*/
function percentButton(){}

function divideButton(){}

function multiplyButton(){}

function minusButton(){}

function plusButton(){}

function equalButton(){}

/*
    Input button functions
*/
function zeroButton(){
    setNumber("0");
    displayInput();
}

function oneButton(){
    setNumber("1");
    cleanInput();
    displayInput();
}

function twoButton(){
    setNumber("2");
    cleanInput();
    displayInput();
}

function threeButton(){
    setNumber("3");
    cleanInput();
    displayInput();
}

function fourButton(){
    setNumber("4");
    cleanInput();
    displayInput();
}

function fiveButton(){
    setNumber("5");
    cleanInput();
    displayInput();
}

function sixButton(){
    setNumber("6");
    cleanInput();
    displayInput();
}

function sevenButton(){
    setNumber("7");
    cleanInput();
    displayInput();
}

function eightButton(){
    setNumber("8");
    cleanInput();
    displayInput();
}

function nineButton(){
    setNumber("9");
    cleanInput();
    displayInput();
}

function dotButton(){
    let checkForDot = getNumber();
    let numberArraySize = checkForDot.length;
    let isDotPresent = false;

    for(let index=0; index<numberArraySize; index++){
        if(checkForDot[index] === ".") {
            isDotPresent = true;
            setNumber("");
        }
    }

    if (!isDotPresent) setNumber(".");
    displayInput();
}

function plusMinusButton(){
    let stringNumber = getNumber();
    let changeNumber = parseFloat(stringNumber);
    let newNumber = "";

    // if(changeNumber === undefined || changeNumber === null) break;
    if (changeNumber === 0) return stringNumber;

    if (changeNumber > 0){
        newNumber = "-"+stringNumber;
        setNumberDegree(newNumber);
        cleanInputScreen();
        displayInput();
    }
    if (changeNumber < 0){
        newNumber = "+"+stringNumber;
        setNumberDegree(newNumber);
        cleanInputScreen();
        displayInput();
    }
}