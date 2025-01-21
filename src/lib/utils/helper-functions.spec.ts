import { describe, it, expect } from 'vitest'

import {
	capitalizeString,
	filterPokemonByName,
	isValidPokemonType,
	validatePokemonType
} from './helper-functions'
import type { NamedAPIResource } from 'pokenode-ts'

describe('capitalizeString function', () => {
	it('should capitalize the first letter of a string', () => {
		const value = 'hello'
		const result = capitalizeString(value)
		const expectedResult = 'Hello'

		expect(result).toBe(expectedResult)
	})
})

describe('filterPokemonByName', () => {
	const mockPokemons: NamedAPIResource[] = [
		{ name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
		{ name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
		{ name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3/' },
		{ name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/' },
		{ name: 'charmeleon', url: 'https://pokeapi.co/api/v2/pokemon/5/' },
		{ name: 'charizard', url: 'https://pokeapi.co/api/v2/pokemon/6/' }
	]

	it('should return all pokemons if name is empty', () => {
		const result = filterPokemonByName(mockPokemons, '')
		expect(result).toEqual(mockPokemons)
	})

	it('should filter pokemons by name', () => {
		const result = filterPokemonByName(mockPokemons, 'char')

		const expectedResult = [mockPokemons[3], mockPokemons[4], mockPokemons[5]]

		expect(result).toEqual(expectedResult)
	})

	it('should return an empty array if no pokemons match the name', () => {
		const result = filterPokemonByName(mockPokemons, 'xyz')
		expect(result).toEqual([])
	})
})

describe('isValidPokemonType', () => {
	it('should return true for valid pokemon types', () => {
		expect(isValidPokemonType('fire')).toBe(true)
		expect(isValidPokemonType('water')).toBe(true)
		expect(isValidPokemonType('grass')).toBe(true)
	})

	it('should return false for invalid pokemon types', () => {
		expect(isValidPokemonType('invalid')).toBe(false)
		expect(isValidPokemonType('')).toBe(false)
		expect(isValidPokemonType('123')).toBe(false)
	})
})

describe('validatePokemonType', () => {
	it.each([
		['fire', 'fire'],
		['water', 'water'],
		['grass', 'grass'],
		['invalid', 'unknown'],
		['', 'unknown'],
		['123', 'unknown'],
		[undefined, 'unknown']
	])('should return %s for input %s', (input, expected) => {
		expect(validatePokemonType(input)).toBe(expected)
	})
})
