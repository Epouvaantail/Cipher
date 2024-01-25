let keyInput = document.querySelector('#key');
let wordInput = document.querySelector('#word');
let btn= document.querySelector('#enter');
btn.addEventListener('click', function() {
    let s = parseInt(keyInput.value);
    let text = wordInput.value;
    document.querySelector('#result').innerHTML=`Result: ${encrypt(s, text)}`
    // document.write("Cipher: " + encrypt(s, text) + "<br>");
})

let wordInput2 = document.querySelector('#word2');
let btn2 = document.querySelector('#enter2');
btn2.addEventListener('click', function() {
    let text = wordInput2.value;
    document.querySelector('#result').innerHTML=`Result: ${decrypt(text)}`
})

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

 // Encrypts text using a shift on s
function encrypt(s, text) {
  let result=""
  // if the text contain only letter from latin aplhabet
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
    modal.style.display = "block";
  }
  return result;
}

// Decrypts text
function decrypt(text) {
  let result=""
  // if the text contain only letter from latin aplhabet
  if (text.match(/[a-z]/i)) {
    for (let j = 0;j < 26; j++) {
      for (let i = 0; i < text.length; i++) {
        let char = text[i].toUpperCase();
        if (char) {
            let ch =  String.fromCharCode((char.charCodeAt(0) + j-65) % 26 + 65);
            result += ch;
        }
        else {
             let ch = String.fromCharCode((char.charCodeAt(0) + j-97) % 26 + 97);
            result += ch;
        }
      }
      result += "<br>"
    }
  }
  else {
    modal.style.display = "block"
  }
  return result;
}