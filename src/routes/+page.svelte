<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
    import Description from '$lib/components/Description.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="flex h-full w-full flex-col items-center shadow-effect">
	<Navbar className="mt-3 sticky" />
	<div class="text-green-500 justify-center items-center mt-5 flex min-h-[80vh] w-full flex-col">
		<p class="text-shadow text-center text-7xl font-medium">Welcome to AniList.</p>
		<p class="text-center w-3/5 text-3xl mt-14 text-green-300">
			A place where you can find all the information about your favorite anime and manga.
		</p>
	</div>
    <Description />
	<Footer />
</div>

<style>
	.shadow-effect {
		background: radial-gradient(rgb(32, 37, 49), rgba(0, 0, 0, 0.5));
	}
    .text-shadow{
        text-shadow: 3px 3px 3px rgb(3, 97, 16);
    }
</style>
