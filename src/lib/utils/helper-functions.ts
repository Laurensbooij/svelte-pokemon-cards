import { type NamedAPIResource } from 'pokenode-ts'

import { pokemonTypes } from '$constants'
import { type PokemonType } from '$types'

export const capitalizeString = (value: string) =>
	value.charAt(0).toUpperCase() + value.slice(1)

export const filterPokemonByName = (pokemons: NamedAPIResource[], name: string) => {
	if (!name.length) return pokemons

	const normalized = name.toLowerCase()
	return pokemons.filter((pokemon) => pokemon.name.includes(normalized))
}

export const isValidPokemonType = (pokemonType: string): pokemonType is PokemonType => {
	return pokemonTypes.includes(pokemonType as PokemonType)
}

export const validatePokemonType = (pokemonType?: string): PokemonType => {
	if (!pokemonType) return 'unknown'

	return isValidPokemonType(pokemonType) ? (pokemonType as PokemonType) : 'unknown'
}
