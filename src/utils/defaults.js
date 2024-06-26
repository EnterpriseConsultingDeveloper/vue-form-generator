export default (target, ...sources) => {
	for (const source of sources) {
		if (source != null) {
			for (const key in source) {
				if (target[key] === undefined) {
					target[key] = source[key];
				}
			}
		}
	}
	return target;
}
