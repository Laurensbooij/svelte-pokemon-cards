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
	let mobileMenuIsOpen = $state(false)

	let filteredPokemons = $derived(filterPokemonByName(pokemons, searchValue))

	const onSearchbarFocusHandler = () => {
		mobileMenuIsOpen = true
	}

	const onPokemonSelectHandler = (pokemon: NamedAPIResource) => {
		onPokemonSelect(pokemon)
		mobileMenuIsOpen = false
	}
</script>

<div class={['menu-container', { 'mobile-menu-open': mobileMenuIsOpen }]}>
	<div class="searchbar-container">
		<Searchbar bind:value={searchValue} onFocus={onSearchbarFocusHandler} />
	</div>
	<div class="pokemons-list">
		{#if filteredPokemons.length === 0}
			<div class="no-results-message-container">
				<p>No Pokemon found, try a different search term.</p>
			</div>
		{:else}
			{#each filteredPokemons as pokemon}
				<button
					class="pokemon-item"
					class:selected={pokemon.name === selectedPokemon?.name}
					onclick={() => onPokemonSelectHandler(pokemon)}
				>
					<p>{capitalizeString(pokemon.name)}</p>
				</button>
			{/each}
		{/if}
	</div>
</div>

<style>
	.menu-container {
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
		height: 100%;
		padding: var(--spacing-16) var(--spacing-12);
		background: var(--colors-default-0);
		overflow-y: scroll;

		.no-results-message-container {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;

			p {
				margin: 0;
				text-align: center;
			}
		}
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

	@media (max-width: 768px) {
		.menu-container {
			width: 100%;
			height: auto;
			border-right: none;

			.searchbar-container {
				display: flex;
				justify-content: center;
				border-top: 1px solid var(--colors-border);
			}

			.pokemons-list {
				display: none;
				order: -1;
			}
		}

		.menu-container.mobile-menu-open {
			z-index: 2;
			position: absolute;
			height: 100%;

			.pokemons-list {
				display: flex;
			}
		}
	}
</style>
