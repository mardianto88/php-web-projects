// script.js

document.getElementById('cipher-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    const text = document.getElementById('text').value;
    const shift = parseInt(document.getElementById('shift').value);

    // Encrypt the text
    const encryptedText = caesarCipher(text, shift);

    // Display the result
    document.getElementById('result').textContent = encryptedText;
});

function caesarCipher(str, shift) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    shift = shift % 26; // Ensure shift is within range of alphabet

    return str.toUpperCase().split('').map(char => {
        const index = alphabet.indexOf(char);
        if (index === -1) {
            return char; // Non-alphabetic characters are not changed
        }
        const newIndex = (index + shift) % 26;
        return alphabet[newIndex];
    }).join('');
}
