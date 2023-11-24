function vigenereCipher(text, key, encrypt) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';

    for (let i = 0; i < text.length; i++) {
        const char = text[i].toUpperCase();
        if (alphabet.includes(char)) {
            const keyChar = key[i % key.length].toUpperCase();
            const keyIndex = alphabet.indexOf(keyChar);
            const shift = encrypt ? keyIndex : -keyIndex;
            const newIndex = (alphabet.indexOf(char) + shift + 26) % 26;
            result += alphabet.charAt(newIndex);
        } else {
            result += text[i];
        }
    }

    return result;
}

function encrypt() {
    const plaintext = document.getElementById('plaintextEncrypt').value;
    const key = document.getElementById('keyEncrypt').value;
    const result = vigenereCipher(plaintext, key, true);
    document.getElementById('resultEncrypt').value = result;
}

function decrypt() {
    const ciphertext = document.getElementById('ciphertextDecrypt').value;
    const key = document.getElementById('keyDecrypt').value;
    const result = vigenereCipher(ciphertext, key, false);
    document.getElementById('resultDecrypt').value = result;
}
