<script lang="ts">
	import ClearIcon from '$assets/vectors/clear.svg'
	import SearchIcon from '$assets/vectors/search.svg'

	let { value = $bindable() } = $props()

	const onInputClearHandler = () => {
		value = ''
	}
</script>

<div class="searchbar-container">
	<img class="search-icon" src={SearchIcon} alt="Search icon" />
	<input class="searchbar" type="search" placeholder="Search for a pokemon.." bind:value />
	{#if value}
		<button class="clear-button" onclick={onInputClearHandler}>
			<img src={ClearIcon} alt="Clear search" />
		</button>
	{/if}
</div>

<style>
	.searchbar-container {
		position: relative;
		width: 100%;
	}

	.search-icon {
		position: absolute;
		left: 0.75rem;
		top: 50%;
		transform: translateY(-50%);
		width: 1rem;
		height: 1rem;
		color: var(--colors-primary);
	}

	.searchbar {
		font-size: 1rem;
		color: var(--colors-text-dark);
		width: 100%;
		padding: 0.75rem 1rem;
		padding-left: 2.5rem;
		padding-right: 2.5rem;
		background-color: var(--colors-default-0);
		border: none;
		border-radius: var(--border-radius-md);
		outline: 2px solid var(--colors-border);
		transition: all 0.1s ease;

		&:focus {
			outline: 2px solid var(--colors-primary-light);
			outline-offset: 2px;
			box-shadow: 0 0 0 2px var(--colors-primary);
		}

		&::-webkit-search-cancel-button {
			display: none;
		}
	}

	.clear-button {
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		right: 0.75rem;
		top: 50%;
		padding: 0;
		background: none;
		border: none;
		cursor: pointer;
		transform: translateY(-50%);

		img {
			width: 1rem;
			height: 1rem;
			color: var(--colors-primary);
		}
	}
</style>
