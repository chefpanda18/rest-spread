const filterOutOdds = (...arguments) => arguments.filter((v) => v % 2 === 0);

const findMin = (...arguments) => Math.min(...arguments);

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

const doubleAndReturnArgs = (arr, ...args) => [ ...arr, ...args.map((v) => v * 2) ];

const removeRandom = (items) => {
	let idx = Math.floor(Math.random() * items.length);
	return [ ...items.slice(0, idx), ...items.slice(idx + 1) ];
};

const extend = (arr1, arr2) => [ ...arr1, ...arr2 ];

const addKeyVal = (obj, key, val) => {
	let newObj = { ...obj };
	newObj[key] = val;
	return newObj;
};

const removeKey = (obj, key) => {
	let newObj = { ...obj };
	delete newObj[key];
	return newObj;
};

const combine = (obj1, obj2) => {
	return { ...obj1, ...obj2 };
};

const update = (obj, key, val) => {
	let newObj = { ...obj };
	newObj[key] = val;
	return newObj;
};
