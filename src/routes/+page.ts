import { PokemonClient } from 'pokenode-ts'

import type { PageLoad } from './$types'

export const load: PageLoad = async () => {
	const api = new PokemonClient()

	try {
		const response = await api.listPokemons(0, 151)
		return { pokemons: response.results }
	} catch (error) {
		return { error }
	}
}
