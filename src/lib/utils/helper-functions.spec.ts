import { describe } from 'vitest'

import { capitalizeString } from './helper-functions'

describe('capitalizeString function', () => {
	it('should capitalize the first letter of a string', () => {
		const value = 'hello'
		const result = capitalizeString(value)
		const expectedResult = 'Hello'

		expect(result).toBe(expectedResult)
	})
})
