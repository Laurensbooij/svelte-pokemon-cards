<script lang="ts">
	import { type NamedAPIResource } from 'pokenode-ts'

	import { capitalizeString, filterPokemonByName } from '$utils'

	import Searchbar from './components/Searchbar.svelte'

	type SidebarProps = {
		onPokemonSelect: (pokemon: NamedAPIResource) => void
		pokemons: NamedAPIResource[]
		selectedPokemon?: NamedAPIResource
	}

	let { pokemons, selectedPokemon, onPokemonSelect }: SidebarProps = $props()
	let searchValue = $state('')
	let filteredPokemons = $derived(filterPokemonByName(pokemons, searchValue))
</script>

<div class="sidebar-container">
	<div class="searchbar-container">
		<div class="searchbar-wrapper">
			<Searchbar bind:value={searchValue} />
		</div>
	</div>
	<div class="pokemons-list">
		{#each filteredPokemons as pokemon}
			<button
				class="pokemon-item"
				class:selected={pokemon.name === selectedPokemon?.name}
				onclick={() => onPokemonSelect(pokemon)}
			>
				<p>{capitalizeString(pokemon.name)}</p>
			</button>
		{/each}
	</div>
</div>

<style>
	.sidebar-container {
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 20rem;
		border-right: 1px solid var(--colors-border);
	}

	.searchbar-container {
		padding: var(--spacing-12);
		background: var(--colors-default-100);
		border-bottom: 1px solid var(--colors-border);
	}

	.pokemons-list {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-8);
		padding: var(--spacing-16) var(--spacing-12);
		overflow-y: scroll;
	}

	.pokemon-item {
		padding: var(--spacing-8) var(--spacing-16);
		border: 2px solid var(--colors-default-200);
		border-radius: var(--border-radius-md);
		background: var(--colors-default-100);
		transition: all 0.2s ease;
		cursor: pointer;

		&.selected {
			background: var(--colors-primary);
			border-color: var(--colors-primary-light);

			p {
				color: var(--colors-default-0);
			}
		}

		&:not(.selected):hover {
			background: var(--colors-primary);

			p {
				color: var(--colors-default-0);
			}
		}

		&:active {
			transform: scale(0.98);
			background: var(--colors-primary-dark);
		}

		p {
			margin: 0;
		}
	}
</style>
