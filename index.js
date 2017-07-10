function mediaFormat(media, format) {
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

	if(typeof format !== 'string') {
		throw new TypeError('Incorrect "format" type. The "format" must be a string').message;
	}

	var curr = media.currentTime;
	var durr = media.duration;

	var res = {};
	res['|pc|'] = ((curr / durr) * 100).toFixed(0);

	res['|h|']  = parseInt( (curr / 3600) % 3600 );

	res['|i|']  = timeDetect( parseInt( (curr / 60) % 60 ) );

	res['|s|']  = timeDetect( parseInt( curr ) );

	return timeReplace(format, res);
}

//export default videoValues;
