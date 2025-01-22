<script lang="ts">
	import { type NamedAPIResource } from 'pokenode-ts'

	import { PokemonCard, Menu } from '$components'

	import { type PageProps } from './$types'

	let { data }: PageProps = $props()
	let { pokemons, error } = data

	let selectedPokemon = $state<NamedAPIResource>()

	const onPokemonSelectHandler = (pokemon: NamedAPIResource) => {
		selectedPokemon = pokemon
	}
</script>

<div class="container">
	{#if error || !pokemons}
		<div class="error-container">
			<p>Error loading Pokemon, please try again.</p>
		</div>
	{:else}
		<Menu {pokemons} {selectedPokemon} onPokemonSelect={onPokemonSelectHandler} />
		<div class="content-container">
			<PokemonCard pokemon={selectedPokemon} />
		</div>
	{/if}
</div>

<style>
	.container {
		display: flex;
		overflow: hidden;
	}

	.error-container {
		display: flex;
		flex: 1;
		justify-content: center;
		align-items: center;
		padding: var(--spacing-24);
		background: var(--colors-error-50);
	}

	.content-container {
		display: flex;
		flex: 1;
		justify-content: center;
		align-items: center;
		padding: var(--spacing-24);
		background: var(--colors-default-25);
	}

	@media (max-width: 768px) {
		.container {
			position: relative;
			flex-direction: column;
		}

		.content-container {
			order: -1;
		}
	}
</style>
