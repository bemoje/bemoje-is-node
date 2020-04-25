(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global['is-node'] = factory());
}(this, (function () { 'use strict';

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

	return isNode;

})));
