import * as obj from './huffman.js';

window.onload = () => {
  const input = document.getElementById('input-value');
  const button = document.getElementById('encode');
  const firstResultBlock = document.getElementById('entered-result');
  const secondResultBlock = document.getElementById('encode-result');

  button.addEventListener('click', (e) => {
    e.preventDefault();

    const value = input.value;
    firstResultBlock.innerText = obj.stringToCodePrint(value);
    secondResultBlock.innerText = obj.pack(value);
  });
};