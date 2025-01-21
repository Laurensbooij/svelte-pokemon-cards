<script lang="ts">
	import { type NamedAPIResource } from 'pokenode-ts'

	import { PokemonCard, Sidebar } from '$components'

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
		<p>Error: error</p>
	{:else}
		<Sidebar {pokemons} {selectedPokemon} onPokemonSelect={onPokemonSelectHandler} />
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

	.content-container {
		display: flex;
		flex: 1;
		justify-content: center;
		align-items: center;
		padding: var(--spacing-24);
		background: var(--colors-default-25);
	}
</style>
