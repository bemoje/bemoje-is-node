const RESULT = !!(
	typeof process !== 'undefined' &&
	process.versions &&
	process.versions.node
)

/**
 * Browser-safely returns whether the current process is a node-js process.
 * @returns {boolean}
 */
export default function isNode() {
	return RESULT
}
