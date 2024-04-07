document.addEventListener("DOMContentLoaded", function () {
  const inputTextArea = document.getElementById("inputTextArea");
  const keyInput = document.getElementById("keyInput");
  const outputTextArea = document.getElementById("outputTextArea");

  // Reset input and output fields
  inputTextArea.value = "";
  keyInput.value = "";
  outputTextArea.value = "";

  const encryptButton = document.getElementById("encryptButton");
  const decryptButton = document.getElementById("decryptButton");
  const aesButton = document.getElementById("aesButton");
  const desButton = document.getElementById("desButton");
  const blowfishButton = document.getElementById("blowfishButton");

  let selectedAlgorithm = "AES"; // Default algorithm is AES

  inputTextArea.addEventListener('input', (e) => {
    if (inputTextArea.classList.contains("invalid")) {
        inputTextArea.classList.remove("invalid");
    }
  })

  keyInput.addEventListener('input', (e) => {
    if (keyInput.classList.contains("invalid")) {
        keyInput.classList.remove("invalid");
    }
  })

  aesButton.addEventListener("click", function () {
    selectedAlgorithm = "AES";
  });

  desButton.addEventListener("click", function () {
    selectedAlgorithm = "DES";
  });

  blowfishButton.addEventListener("click", function () {
    selectedAlgorithm = "Blowfish";
  });

  encryptButton.addEventListener("click", function () {
    const inputText = inputTextArea.value;
    const key = keyInput.value;
    
    if (!validateInput(inputText, key)) {
      return; // Stop further execution if input is invalid
    }
    
    const encryptedText = encrypt(inputText, key);
    outputTextArea.value = encryptedText;
  });
  
  decryptButton.addEventListener("click", function () {
    const encryptedText = inputTextArea.value;
    const key = keyInput.value;
    
    if (!validateInput(encryptedText, key)) {
      return; // Stop further execution if input is invalid
    }
    
    const decryptedText = decrypt(encryptedText, key);
    outputTextArea.value = decryptedText;
  });

  function validateInput(text, key) {
    let isValid = true;
    
    if (text.trim() === '') {
      isValid = false;
      inputTextArea.classList.add("invalid");
      displayErrorMessage("Input cannot be empty.");
    } else {
      inputTextArea.classList.remove("invalid");
    }
    
    if (key.trim() === '') {
      isValid = false;
      keyInput.classList.add("invalid");
      displayErrorMessage("Key cannot be empty.");
    } else {
      keyInput.classList.remove("invalid");
    }
    
    return isValid;
  }

  function displayErrorMessage(message) {
    // You can implement your own way of displaying error messages,
    // for example, by showing an alert or updating a specific element
    alert(message); // This displays an alert with the error message
  }
  

  function encrypt(text, key) {
    let encrypted;
    console.log(selectedAlgorithm);
    switch (selectedAlgorithm) {
      case "AES":
        encrypted = CryptoJS.AES.encrypt(text, key).toString();
        break;
      case "DES":
        encrypted = CryptoJS.DES.encrypt(text, key).toString();
        break;
      case "Blowfish":
        encrypted = CryptoJS.Blowfish.encrypt(text, key).toString();
        break;
      default:
        encrypted = "Unsupported algorithm";
    }
    return encrypted;
  }

  function decrypt(encryptedText, key) {
    let decrypted;
    switch (selectedAlgorithm) {
      case "AES":
        decrypted = CryptoJS.AES.decrypt(encryptedText, key).toString(
          CryptoJS.enc.Utf8
        );
        break;
      case "DES":
        decrypted = CryptoJS.DES.decrypt(encryptedText, key).toString(
          CryptoJS.enc.Utf8
        );
        break;
      case "Blowfish":
        decrypted = CryptoJS.Blowfish.decrypt(encryptedText, key).toString(
          CryptoJS.enc.Utf8
        );
        break;
      default:
        decrypted = "Unsupported algorithm";
    }
    return decrypted;
  }
});
