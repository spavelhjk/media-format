function timeDetect(val) {
	return val > 60 ? val % 60 : val;
}

function timeReplace(format, obj) {
	var key;
	for(key in obj) {
		format = format.replace(key, obj[key]);
	}

	return format;
}

function videoFormat(media, format) {
	if(typeof format !== 'string') {
		throw new TypeError('Incorrect "format" type. The "format" must be a string').message;
	}

	let curr = media.currentTime;
	let durr = media.duration;

	let res = {};
	res['|Pc|'] = ((curr / durr) * 100).toFixed(0);

	res['|H|'] = parseInt( (curr / 3600) % 3600 );

	res['|M|'] = timeDetect( parseInt( (curr / 60) % 60 ) );

	res['|S|'] = timeDetect( parseInt( curr ) );

	return timeReplace(format, res);
}

//export default videoValues;
