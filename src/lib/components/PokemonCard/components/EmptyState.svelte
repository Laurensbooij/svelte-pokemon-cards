<script lang="ts">
	import pokeballPng from '$assets/images/pokeball.png'
</script>

<div class="empty-state-container">
	<img src={pokeballPng} alt="Pokeball" />
	<h4>You haven't selected a pokemon yet</h4>
	<p>Select a Pokemon from the sidepanel to see more details.</p>
</div>

<style>
	.empty-state-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}

	img {
		width: 50%;
		margin-bottom: var(--spacing-24);
		aspect-ratio: 1/1;
	}

	h4 {
		text-align: center;
		margin: 0 0 var(--spacing-12) 0;
	}

	p {
		font-size: var(--font-size-small);
        text-align: center;
		margin: 0;
	}
</style>
