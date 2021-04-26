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

/*
    Screen function
*/
function updateOutput(){
    return getNumber();
}

function displayInput(){
    document.getElementById('input_screen').innerText = getNumber();
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
    displayInput();
}

function twoButton(){
    setNumber("2");
    displayInput();
}

function threeButton(){
    setNumber("3");
    displayInput();
}

function fourButton(){
    setNumber("4");
    displayInput();
}

function fiveButton(){
    setNumber("5");
    displayInput();
}

function sixButton(){
    setNumber("6");
    displayInput();
}

function sevenButton(){
    setNumber("7");
    displayInput();
}

function eightButton(){
    setNumber("8");
    displayInput();
}

function nineButton(){
    setNumber("9");
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
    let changeNumber = parseFloat(getNumber());

    if (changeNumber === 0) return toString(currentNumber);
    if (changeNumber > 0){
        setNumber(("-"+toString(changeNumber)))
        displayInput();
    }
    if (changeNumber < 0){
        setNumber(("+"+toString(changeNumber)))
        displayInput();
    }

}