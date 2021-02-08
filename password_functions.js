let chosenLength = 8;
let useSmall = true;
let useLarge = true;
let useSpecial = true;
let userNumbers = true;





const smallLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ];
const largeLetter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ];
const specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', '[', ']', '=', '<', '>', '/', '|', '~', '?', ];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ];

const LETTERS = {
    SMALLLETTER: 0,
    LARGELETTER: 1,
    SPECIALCHAR: 2,
    NUMBERS: 3,
};

function randomIndex(array) {
    return Math.floor(Math.random() * Math.floor(array.length));
}

function pickType() {
    let letterTypes = [];
    
    if(useLarge) {
        letterTypes.push(LETTERS.LARGELETTER);
    }
    if(useSmall){
        letterTypes.push(LETTERS.SMALLLETTER);
    }
    if(useSpecial){
        letterTypes.push(LETTERS.SPECIALCHAR);
    }
    if(useNumber){
        letterTypes.push(LETTERS.NUMBERS);
    }
    
    let selection = randomIndex(letterTypes)
    return selection;
}

function pickLetter(type) {
    if (type === LETTERS.SMALLLETTER) {
        return smallLetter[randomIndex(smallLetter)];
    }
    if (type === LETTERS.LARGELETTER) {
        return largeLetter[randomIndex(largeLetter)];
    }
    if (type === LETTERS.SPECIALCHAR) {
        return specialChar[randomIndex(specialChar)];
    }
    if (type === LETTERS.NUMBERS) {
        return numbers[randomIndex(numbers)];
    }
}

function createPassword() {
    let passwordString = "";
    for (let passwordIndex = 0; passwordIndex < chosenLength; passwordIndex++) {
        passwordString = `${passwordString}${pickLetter(pickType())}`;
    }
    console.log(passwordString);
}

// This function shows the prompt for length and validates it
function validateLength() {
    chosenLength = prompt("Length?", 8);
    if (chosenLength < 8 || chosenLength > 128) {
        alert("Password should be between 8 and 128 characters!")
        validateLength()
    }
}

function startPasswordGeneration() {
    useSmall = prompt('Use Lowercase', true);
    useLarge = prompt('Use Uppercase', true);
    useNumbers = prompt('Use Numbers', true);
    useSpecial = prompt('Use Special', true);
    validateLength();
}

//document.getElementById("clickMe").onclick = startPasswordGeneration;