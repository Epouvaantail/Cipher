let keyInput = document.querySelector('#key');
let wordInput = document.querySelector('#word');

let btn = document.querySelector('#enter');
btn.addEventListener('click', function() {
  let s = parseInt(keyInput.value);
  let text = wordInput.value;
  document.querySelector('#result').innerHTML=`Result: ${encrypt(s, text)}`
})

let wordInput2 = document.querySelector('#word2');
let btn2 = document.querySelector('#enter2');
btn2.addEventListener('click', function() {
  let text = wordInput2.value;
  document.querySelector('#result').innerHTML=`Result: ${decrypt(text)}`
})

let keyV = document.querySelector('#keyV');
let wordV = document.querySelector('#wordV');
let btnV = document.querySelector('#enterV');
btnV.addEventListener('click', function() {
  let s = keyV.value;
  let text = wordV.value;
  document.querySelector('#resultV').innerHTML=`Result: ${encryptV(s, text)}`
})

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

// Encrypts text using a shift on s (Caesar)
function encrypt(s, text) {
  let result= ""
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

// Decrypts text (Caesar)
function decrypt(text) {
  let result= ""
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

// Encrypts text using a shift on key (Vigenere)
function encryptV(key, word) {
  let code = [];
  key = key.toUpperCase()
  for(let i =0; i<key.length; i++) {
    code += key.charCodeAt([i])-65;
    code += ' ';
  };
  let ar = code.split(' ');
  ar.pop();
  ar = ar.map(function(x) {
    return parseInt(x, 10);
  })

  let result=""
  if (word.match(/[a-z]/i) && key.match(/[a-z]/i)) {
    let k = 0;
    for (let i = 0; i < word.length; i++) {
      let char = word[i].toUpperCase();
      for(k; k < ar.length; k++) {
        let ch =  String.fromCharCode((char.charCodeAt(0) + ar[k]-65) % 26 + 65);
        if ( ar[k+1] === undefined) {
          k=-1;
        }
        result += ch;
        k = k+1;
        break;
      }
    }
  }
  else {
    modal.style.display = "block"
  }
  return result;
}