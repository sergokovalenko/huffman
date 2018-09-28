import * as obj from './huffman.js';

window.onload = () => {
  const input = document.getElementById('input-value');
  const button = document.getElementById('encode');
  const firstResultBlock = document.getElementById('entered-result');
  const secondResultBlock = document.getElementById('encode-result');
  const thirdResultBlock = document.getElementById('unpacked-result');

  button.addEventListener('click', (e) => {
    e.preventDefault();

    const value = input.value;
    const compressedTableInfo = obj.pack(value);
    const compressedString = obj.getCompressedValue(compressedTableInfo, value);
    firstResultBlock.innerText = obj.stringToCodePrint(value);
    secondResultBlock.innerText = compressedString;
    thirdResultBlock.innerText = obj.unpack(compressedTableInfo, compressedString);
  });
};