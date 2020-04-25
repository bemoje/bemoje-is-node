import isNode from '../src/is-node'

describe('isNode', () => {
	test('works', () => {
		expect(isNode()).toBe(true)
	})
})
