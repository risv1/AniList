<script>
	import * as Card from '$lib/components/ui/card';
	import Footer from '$lib/components/Footer.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { goto } from '$app/navigation';
	import Navbar from '$lib/components/Navbar.svelte';
	/**
	 * @type {any}
	 */
	export let data;
</script>

<div class="shadow-effect flex flex-col h-full w-screen items-center gap-10">
    <Navbar className="mt-3 sticky" />
	<div class="grid w-4/5 grid-cols-3 gap-5">
		{#each data.anime as item}
			<Card.Root
				class="h-full w-full rounded-xl border border-green-500 p-3 shadow-lg shadow-green-950"
			>
				<Card.Header>
					<Card.Title class="text-green-500"
						>{String(item.attributes.slug).toLocaleUpperCase()}</Card.Title
					>
				</Card.Header>
				<Card.Content class="flex h-[60vh] w-full flex-col items-center gap-3">
					<img
						class="h-5/6 w-fit rounded-xl"
						src={item.attributes.posterImage.large}
						alt={item.attributes.title}
					/>
					<Button on:click={() => goto(`/anime/${item.id}`)} class="mt-auto w-4/5 rounded-xl"
						>View</Button
					>
				</Card.Content>
			</Card.Root>
		{/each}
	</div>
</div>
<Footer />

<style>
	.shadow-effect {
		background: radial-gradient(rgb(32, 37, 49), rgba(0, 0, 0, 0.5));
	}
</style>
