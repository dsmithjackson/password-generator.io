let chosenLength = 8;
let useSmall = false;
let useLarge = false;
let useSpecial = false;
let useNumbers = false;




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
    if(useNumbers){
        letterTypes.push(LETTERS.NUMBERS);
    }
    
    let selection = randomIndex(letterTypes)
    
    return letterTypes[selection];
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

function startPasswordGeneration(form) {
    window.myForm = form;
    if (form.lowercase.checked){
        useSmall = true;
    } else {
        useSmall = false;
    }
    if (form.uppercase.checked){
        useLarge = true;
    } else {
        useLarge = false;
    }
    if (form.numbers.checked){
        useNumbers = true;
    } else {
        useNumbers = false;
    }
    if (form.special.checked){
        useSpecial = true;
    } else {
        useSpecial = false;
    }
    if (form.length.value) {
        chosenLength = form.length.value;
    } else {
        chosenLength = 8;
    }

 createPassword();
    //creat();
}

//document.getElementById("clickMe").onclick = startPasswordGeneration;