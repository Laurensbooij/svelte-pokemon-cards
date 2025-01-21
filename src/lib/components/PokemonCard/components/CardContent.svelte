<script lang="ts">
	import { type Pokemon } from 'pokenode-ts'

	import { capitalizeString, validatePokemonType } from '$utils'
	import { pokemonStatsToMessageMap, pokemonTypesToColorsMap } from '$constants'
	import { type PokemonStat } from '$types'

	type CardContentProps = {
		pokemonData: Pokemon
	}

	let { pokemonData }: CardContentProps = $props()

	let pokemonColors = pokemonTypesToColorsMap[validatePokemonType(pokemonData.types[0].type.name)]
</script>

<div class="card-content-container" style:--bg-color={pokemonColors.background}>
	<div class="card-header">
		<h3 class="title">{capitalizeString(pokemonData.name)}</h3>
		<div class="pokemon-types-container">
			{#each pokemonData.types as type}
				<span
					class="pokemon-type"
					style:--bg-color={pokemonTypesToColorsMap[validatePokemonType(type.type.name)].primary}
				>
					{capitalizeString(type.type.name)}
				</span>
			{/each}
		</div>
	</div>
	<div
		class="pokemon-image-container"
		style:--bg-color={pokemonColors.imageBackgroundGradient}
		style:--border-color={pokemonColors.border}
	>
		<img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
	</div>
	<div class="pokemon-stats-container" style:--border-color={pokemonColors.border}>
		{#each pokemonData.stats as stat}
			<p>{pokemonStatsToMessageMap[stat.stat.name as PokemonStat]}: {stat.base_stat}</p>
		{/each}
	</div>
</div>

<style>
	.card-content-container {
		display: flex;
		flex-direction: column;
		flex: 1;
		padding: var(--spacing-16);
		background: var(--bg-color);
		border-radius: var(--border-radius-sm);
	}

	.card-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		row-gap: var(--spacing-8);
		column-gap: var(--spacing-16);
		flex-wrap: wrap;
		margin-bottom: var(--spacing-12);
	}

	.title {
		margin: 0;
		font-size: 1.5rem;
		color: var(--colors-text-dark);
	}

	.pokemon-types-container {
		display: flex;
		gap: var(--spacing-8);
	}

	.pokemon-type {
		font-size: var(--font-size-small);
		padding: var(--spacing-4) var(--spacing-8);
		color: var(--colors-text-light);
		background: var(--bg-color);
		border-radius: var(--border-radius-sm);
	}

	.pokemon-image-container {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		margin-bottom: var(--spacing-20);
		aspect-ratio: 1.75/1;
		background: var(--bg-color);
		border-radius: var(--border-radius-sm);
		border: 4px solid var(--border-color);

		img {
			height: 100%;
		}
	}

	.pokemon-stats-container {
		display: grid;
		flex-direction: column;
		gap: var(--spacing-8);

		p {
			font-size: var(--font-size-small);
			font-weight: var(--font-weight-semibold);
			color: var(--colors-text-dark);
			margin: 0;
			padding: var(--spacing-4) var(--spacing-8);
			border: 2px solid var(--border-color);
			border-radius: var(--border-radius-sm);
		}
	}
</style>
