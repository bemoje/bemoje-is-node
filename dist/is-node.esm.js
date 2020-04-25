const RESULT = !!(
	typeof process !== 'undefined' &&
	process.versions &&
	process.versions.node
);

/**
 * Browser-safely returns whether the current process is a node-js process.
 * @returns {boolean}
 */
function isNode() {
	return RESULT
}

export default isNode;
