<script lang="ts">
	import { Header } from '$components'
	import '../app.css'

	let { children } = $props()
</script>

<svelte:head>
	<title>Pokemon cards</title>
</svelte:head>

<div class="container">
	<Header />
	{@render children()}
</div>

<style>
	.container {
		display: grid;
		grid-template-rows: min-content auto;
		overflow: hidden;
		height: 100vh;
	}
</style>
