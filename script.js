// Assignment Code
const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmmountNumber = document.getElementById('characterAmmountNumber')
const includeUppercaseElement = document.getElementById ('includeUppercase')
const includeNumbersElement = document.getElementById ('includeNumbers')
const includeSpecialCharactersElement = document.getElementById('includeSpecialCharacters')
const form = document.getElementById('passwordPrompts')
const passwordDisplay = document.getElementById('password')

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh (65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh (97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh (48, 57)
const SPECIALCHARACTERS_CHAR_CODES = arrayFromLowToHigh (33, 47).concat (arrayFromLowToHigh(58,64)
).concat (arrayFromLowToHigh(91,96)).concat (arrayFromLowToHigh(123,126))

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSpecialCharacters) {
    let charCodes = LOWERCASE_CHAR_CODES
    if (includeUppercase) CharCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
    if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
    if (includeSpecialCharacters) charCodes = charCodes.concat(SPECIALCHARACTERS_CHAR_CODES)

    const passwordCharacters = []
    for (let i = 0; i < characterAmount; i++) {
        const characterCode = charCodes [Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))
        
    }
    return passwordCharacters.join('')

}

function syncCharacterAmount (e) {
    const value = e.target.value
    characterAmmountNumber.value = value
    characterAmountRange.value = value

    }

function arrayFromLowToHigh (low,high) {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)        
    }
    return array
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
    return password
  
  }
// Add event listener to generate button
generateBtn.addEventListener("click", e=> {
  const characterAmount = characterAmmountNumber.value
   const includeUppercase = includeUppercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSpecialCharacters = includeSpecialCharactersElement.checked

   const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSpecialCharacters)
   passwordDisplay.innerText = password
})

