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

export function pack(str) {
	let ret = '';
	const obj = {};

	for (let i = 0; i < str.length; i++) {
		if (obj[str[i]] == null) obj[str[i]] = { count: 0, code: '', use: false };
		obj[str[i]].count += 1;
	}

	var c = true;
	for (let r in obj) {
		const prop1 = getMin(obj);

		if (prop1 == '') {
			break;
		}
		obj[prop1].use = true;

		var prop2 = getMin(obj);
		if (prop2 == '') {
			break;
		}
		obj[prop2].use = true;

		for (let i = 0; i < prop1.length; i++)
			obj[prop1[i]].code = '0' + obj[prop1[i]].code;

		for (var i = 0; i < prop2.length; i++)
			obj[prop2[i]].code = '1' + obj[prop2[i]].code;

		obj[prop1 + prop2] = { count: obj[prop1].count + obj[prop2].count, code: '', use: false };
	}

	for (let i = 0; i < str.length; i++) {
		ret += obj[str[i]].code;
	}

	let result = '';
	for (var prop in obj) {
		if (prop.length == 1) {
			result += `${prop} = ${obj[prop].code} `;
		}
	}

	return result;
}

function getMin(obj) {
	var min = Number.MAX_VALUE; var propName = '';
	for (var prop in obj) {
		if ((obj[prop].count < min) && (obj[prop].use == false)) {
			min = obj[prop].count;
			propName = prop;
		}
	}

	return propName;
}
