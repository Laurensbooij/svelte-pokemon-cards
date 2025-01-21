import { type PokemonStat, type PokemonType } from '$types'

export const pokemonTypes = [
	'unknown',
	'normal',
	'fighting',
	'flying',
	'poison',
	'ground',
	'rock',
	'bug',
	'ghost',
	'steel',
	'fire',
	'water',
	'grass',
	'electric',
	'psychic',
	'ice',
	'dragon',
	'dark',
	'fairy',
	'shadow'
] as const

export const pokemonTypesToColorsMap: Record<
	PokemonType,
	{ primary: string; background: string; border: string; imageBackgroundGradient: string }
> = {
	unknown: {
		primary: 'rgba(144, 144, 144, 1)',
		background: 'rgba(240, 240, 240, 1)',
		border: 'rgba(160, 160, 160, 1)',
		imageBackgroundGradient:
			'radial-gradient(circle, rgba(240, 240, 240, 1), rgba(192, 192, 192, 1))'
	},
	normal: {
		primary: 'rgba(144, 144, 112, 1)',
		background: 'rgba(255, 255, 250, 1)',
		border: 'rgba(160, 160, 128, 1)',
		imageBackgroundGradient:
			'radial-gradient(circle, rgba(255, 255, 250, 1), rgba(192, 192, 160, 1))'
	},
	fighting: {
		primary: 'rgba(176, 80, 80, 1)',
		background: 'rgba(255, 224, 224, 1)',
		border: 'rgba(192, 64, 64, 1)',
		imageBackgroundGradient: 'radial-gradient(circle, rgba(255, 224, 224, 1), rgba(224, 96, 96, 1))'
	},
	flying: {
		primary: 'rgba(144, 128, 208, 1)',
		background: 'rgba(240, 224, 255, 1)',
		border: 'rgba(160, 144, 224, 1)',
		imageBackgroundGradient:
			'radial-gradient(circle, rgba(240, 224, 255, 1), rgba(192, 176, 255, 1))'
	},
	poison: {
		primary: 'rgba(144, 80, 144, 1)',
		background: 'rgba(255, 224, 255, 1)',
		border: 'rgba(160, 96, 160, 1)',
		imageBackgroundGradient:
			'radial-gradient(circle, rgba(255, 224, 255, 1), rgba(192, 128, 192, 1))'
	},
	ground: {
		primary: 'rgba(176, 144, 80, 1)',
		background: 'rgba(255, 240, 224, 1)',
		border: 'rgba(192, 160, 96, 1)',
		imageBackgroundGradient:
			'radial-gradient(circle, rgba(255, 240, 224, 1), rgba(224, 192, 128, 1))'
	},
	rock: {
		primary: 'rgba(144, 128, 80, 1)',
		background: 'rgba(240, 224, 192, 1)',
		border: 'rgba(160, 144, 64, 1)',
		imageBackgroundGradient:
			'radial-gradient(circle, rgba(240, 224, 192, 1), rgba(192, 176, 96, 1))'
	},
	bug: {
		primary: 'rgba(144, 176, 80, 1)',
		background: 'rgba(240, 255, 192, 1)',
		border: 'rgba(160, 192, 64, 1)',
		imageBackgroundGradient:
			'radial-gradient(circle, rgba(240, 255, 192, 1), rgba(192, 224, 96, 1))'
	},
	ghost: {
		primary: 'rgba(96, 80, 144, 1)',
		background: 'rgba(224, 192, 240, 1)',
		border: 'rgba(112, 96, 160, 1)',
		imageBackgroundGradient:
			'radial-gradient(circle, rgba(224, 192, 240, 1), rgba(144, 128, 192, 1))'
	},
	steel: {
		primary: 'rgba(144, 144, 176, 1)',
		background: 'rgba(240, 240, 255, 1)',
		border: 'rgba(160, 160, 192, 1)',
		imageBackgroundGradient:
			'radial-gradient(circle, rgba(240, 240, 255, 1), rgba(192, 192, 224, 1))'
	},
	fire: {
		primary: 'rgba(208, 112, 48, 1)',
		background: 'rgba(255, 224, 192, 1)',
		border: 'rgba(224, 128, 64, 1)',
		imageBackgroundGradient:
			'radial-gradient(circle, rgba(255, 224, 192, 1), rgba(255, 160, 96, 1))'
	},
	water: {
		primary: 'rgba(96, 128, 208, 1)',
		background: 'rgba(224, 240, 255, 1)',
		border: 'rgba(112, 144, 224, 1)',
		imageBackgroundGradient:
			'radial-gradient(circle, rgba(224, 240, 255, 1), rgba(144, 176, 255, 1))'
	},
	grass: {
		primary: 'rgba(96, 176, 80, 1)',
		background: 'rgba(224, 255, 224, 1)',
		border: 'rgba(112, 192, 96, 1)',
		imageBackgroundGradient:
			'radial-gradient(circle, rgba(224, 255, 224, 1), rgba(144, 224, 128, 1))'
	},
	electric: {
		primary: 'rgba(208, 176, 80, 1)',
		background: 'rgba(255, 255, 224, 1)',
		border: 'rgba(224, 192, 96, 1)',
		imageBackgroundGradient:
			'radial-gradient(circle, rgba(255, 255, 224, 1), rgba(255, 224, 128, 1))'
	},
	psychic: {
		primary: 'rgba(208, 80, 112, 1)',
		background: 'rgba(255, 224, 240, 1)',
		border: 'rgba(224, 96, 128, 1)',
		imageBackgroundGradient:
			'radial-gradient(circle, rgba(255, 224, 240, 1), rgba(255, 128, 160, 1))'
	},
	ice: {
		primary: 'rgba(96, 176, 176, 1)',
		background: 'rgba(224, 255, 255, 1)',
		border: 'rgba(112, 192, 192, 1)',
		imageBackgroundGradient:
			'radial-gradient(circle, rgba(224, 255, 255, 1), rgba(144, 224, 224, 1))'
	},
	dragon: {
		primary: 'rgba(96, 64, 208, 1)',
		background: 'rgba(224, 192, 255, 1)',
		border: 'rgba(112, 80, 224, 1)',
		imageBackgroundGradient:
			'radial-gradient(circle, rgba(224, 192, 255, 1), rgba(144, 112, 255, 1))'
	},
	dark: {
		primary: 'rgba(96, 80, 64, 1)',
		background: 'rgba(224, 192, 160, 1)',
		border: 'rgba(112, 96, 80, 1)',
		imageBackgroundGradient:
			'radial-gradient(circle, rgba(224, 192, 160, 1), rgba(144, 128, 112, 1))'
	},
	fairy: {
		primary: 'rgba(208, 112, 144, 1)',
		background: 'rgba(255, 240, 248, 1)',
		border: 'rgba(224, 128, 160, 1)',
		imageBackgroundGradient:
			'radial-gradient(circle, rgba(255, 240, 248, 1), rgba(255, 160, 192, 1))'
	},
	shadow: {
		primary: 'rgba(96, 80, 144, 1)',
		background: 'rgba(224, 192, 240, 1)',
		border: 'rgba(112, 96, 160, 1)',
		imageBackgroundGradient:
			'radial-gradient(circle, rgba(224, 192, 240, 1), rgba(144, 128, 192, 1))'
	}
}

export const pokemonStatsToMessageMap: Record<PokemonStat, string> = {
	"special-attack": "Spec. Att",
	"special-defense": "Spec. Def",
	attack: "Atttack",
	defense: "Defence",
	hp: "HP",
	speed: "Speed"
}
