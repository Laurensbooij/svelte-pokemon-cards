import { type pokemonTypes } from '$constants'

export type PokemonType = (typeof pokemonTypes)[number]
export type PokemonStat = 'hp' | 'attack' | 'defense' | 'special-attack' | 'special-defense' | 'speed'