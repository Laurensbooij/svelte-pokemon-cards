<script>
	import energyPng from '$assets/images/pokemon-card-energy.png'
</script>

<div class="loading-state-container">
	<div class="spinner-container">
		<img src={energyPng} alt="loading" />
		<div class="loader"></div>
	</div>
	<h4 class="loading-text">Loading Pokemon...</h4>
</div>

<style>
    .loading-state-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--spacing-24);
        width: 100%;
    }

	.spinner-container {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50%;
        aspect-ratio: 1/1;
	}

	img {
		position: absolute;
		width: 80%;
		aspect-ratio: 1/1;
	}

	.loader {
		width: 100%;
		aspect-ratio: 1;
		border-radius: 50%;
		background:
			radial-gradient(farthest-side, var(--colors-tertiary-light) 94%, #0000) top/8px 8px no-repeat,
			conic-gradient(#0000 30%, var(--colors-tertiary-light));
		-webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
        mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
		animation: rotate 1s infinite linear;
	}
	@keyframes rotate {
		100% {
			transform: rotate(1turn);
		}
	}

    .loading-text {
        margin: 0;
    }
</style>
