const draw = SVG().addTo('body').attr({
	viewBox: '0 0 1 1',
	preserveAspectRatio: 'none',
	width: '0',
	height: '0',
});

const { w = width, h = height } = draw.viewbox();

const steps = 5;

const s = w / steps;

const bgPath = [`M0 0 h${w - s} L${w} ${s} h${-(w - s)} Z`];

const pathsArray = [...Array(steps)].map(() => {
	return bgPath[0];
});

const mask = draw.clip().attr({
	id: 'mask',
	clipPathUnits: 'objectBoundingBox',
});

pathsArray.forEach((p, i) => {
	console.log(p);
	const shape = draw.path(p);
	shape.transform({
		translateY: s * i,
	});

	mask.add(shape);
});
