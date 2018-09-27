function numberToCode(n) {
	let ret = '';
	for (let i = 0; i < 8; i++) {
		ret = n % 2 + ret;
		n = Math.ceil((n - n % 2) / 2);
	}
	return ret;
}

function codeToNumber(c) {
	let ret = 0;
	for (let i = 7; i >= 0; i--) {
		ret += Math.pow(2, i) * parseInt(c[7 - i]);
	}
	return ret;
}

function stringToCode(s) {
	let ret = '';
	for (let i = 0; i < s.length; i += 1)
		ret += `${numberToCode(s.charCodeAt(i))} `;
	return ret;
}

function codeToString(s) {
	let ret = '';
	for (let i = 0; i < s.length; i += 8)
		ret += String.fromCharCode(codeToNumber(s.substring(i, i + 8)));
	return ret;
}

export function stringToCodePrint(s) {
	let ret = '';
	for (let i = 0; i < s.length; i += 1)
		ret += `${numberToCode(s.charCodeAt(i))} `;
	return ret;
}

export function codeToStringPrint(s) {
	let ret = '';
	for (let i = 0; i < s.length; i += 8)
		ret += `${String.fromCharCode(codeToNumber(s.substring(i, i + 8)))} `;
	return ret;
}