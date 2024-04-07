// Textfields
const inputText = document.getElementById('inputTextArea');
const key = document.getElementById('keyInput');
const outputTextArea = document.getElementById('outputTextArea');	

// Algo buttons
const aesButton = document.getElementById('aesButton');
const desButton = document.getElementById('desButton');
const blowfishButton = document.getElementById('blowfishButton');

// Buttons
const encryptButton = document.getElementById('encryptButton');
const decryptButton = document.getElementById('decryptButton');

const inputTextValue = inputText.value;
const keyValue = key.value;

// determine algorithm
let algo;
aesButton.onclick = () => { algo = 'aes'; };
desButton.onclick = () => { algo = 'des'; };
blowfishButton.onclick = () => { algo = 'blowfish'; };


encryptButton.onclick = () => {
    if (algo === 'aes') {
        outputTextArea.value = CryptoJS.AES.encrypt(inputTextValue, keyValue);
    }
}

decryptButton.onclick = () => {
    if (algo === 'aes') {	
        // console.log(CryptoJS.AES.decrypt(inputTextValue, keyValue));
        outputTextArea.value = CryptoJS.AES.decrypt(inputTextValue, keyValue);
    }
}




