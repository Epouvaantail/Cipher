let keyInput = document.querySelector('#key');
let wordInput = document.querySelector('#word');
let btn= document.querySelector('#enter');
btn.addEventListener('click', function() {
    let s = parseInt(keyInput.value);
    let text = wordInput.value;
    document.write("Cipher: " + encrypt(s, text) + "<br>");
})
    // Encrypts text using a shift on s
   function encrypt(s, text) {
        let result=""
        if (text.match(/[a-z]/i)) {
          for (let i = 0; i < text.length; i++) {
            let char = text[i].toUpperCase();
            if (char) {
                let ch =  String.fromCharCode((char.charCodeAt(0) + s-65) % 26 + 65);
                result += ch;
            }
            else {
                let ch = String.fromCharCode((char.charCodeAt(0) + s-97) % 26 + 97);
                result += ch;
            }
          }
        }
     else {
       alert('Your word is not a word or contain a character that is not in the alphabet')
     }
        return result;
    }