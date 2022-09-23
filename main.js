let Phrase = require("moses-palindrome");

let string = Prompt("Please enter a string for palindrome testing:");
let phrase = new Phrase (string);

if (phrase.palindrome()) {
    alert(`"${phrase.content}" is a palindrome!`);
} else {
    alert(`"${phrase.content}" is not a palindrome`)
}


{
    "name": "moses-palindrome",
    "version": "0.1.0",
    "description": "Palindrome detector",
    "main": "index.js",
    "scripts": {
      "test": "mocha"
    },
    "repository": {
      "type": "git",
      "url": "git+https://github.com/OgadaMoses/npm_module.git"
    },
    "keywords": [
      "palindrome",
      "moses"
    ],
    "author": "Moses Ogada",
    "license": "ISC",
    "bugs": {
      "url": "https://github.com/OgadaMoses/npm_module/issues"
    },
    "homepage": "https://github.com/OgadaMoses/npm_module#readme"
  }