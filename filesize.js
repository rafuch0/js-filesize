#!/usr/bin/env node

function getSize(bytes)
{
	var bytes = Math.floor(bytes);
	var values = {
			bytes: bytes,
			kilobytes: Math.floor((bytes/1024)),
			megabytes: (bytes/(1024*1024)).toFixed(2),
			gigabytes: (bytes/(1024*1024*1024)).toFixed(1),
			terabytes: (bytes/(1024*1024*1024*1024)).toFixed(2)
	};

	if(values.terabytes >= 1.0) values.human = 'terabytes';
	else if(values.gigabytes >= 1.0) values.human = 'gigabytes';
	else if(values.megabytes >= 1.0) values.human = 'megabytes';
	else if(values.kilobytes > 0.8) values.human = 'kilobytes';
	else values.human = 'bytes';

	return values;
}

var multiplier = 10;
for(var i = 0,tmp,calc; i < 13; i++)
{
	multiplier *= 10;
	tmp = Math.random()*Math.random()*multiplier;
	calc = getSize(tmp);
	console.log('%s bytes is about %s %s', calc.bytes, calc[calc.human], calc.human );
}
