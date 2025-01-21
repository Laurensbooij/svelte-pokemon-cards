<script lang="ts">
	import { type NamedAPIResource, PokemonClient } from 'pokenode-ts'

	import CardContent from './components/CardContent.svelte'
	import LoadingState from './components/LoadingState.svelte'
	import EmptyState from './components/EmptyState.svelte'

	const api = new PokemonClient()

	type PokemonCardProps = {
		pokemon?: NamedAPIResource
	}

	let { pokemon }: PokemonCardProps = $props()
</script>

<div class="pokemon-card-container">
	{#if !pokemon}
		<div class="card-pending-state-container">
			<EmptyState />
		</div>
	{:else}
		{#await api.getPokemonByName(pokemon.name)}
			<div class="card-pending-state-container">
				<LoadingState />
			</div>
		{:then pokemonData}
			<CardContent {pokemonData} />
		{/await}
	{/if}
</div>

<style>
	.pokemon-card-container {
		display: flex;
		border-radius: var(--border-radius-lg);
		border: 8px solid var(--colors-tertiary-light);
		aspect-ratio: 1/1.5;
		width: 100%;
		max-width: 22rem;
		box-shadow: var(--box-shadow-lg);
	}

	.card-pending-state-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
		gap: var(--spacing-12);
		padding: var(--spacing-24);
		border-radius: var(--border-radius-sm);
		background: var(--colors-default-50);
	}
</style>
