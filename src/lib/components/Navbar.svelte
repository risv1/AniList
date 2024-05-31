<script lang="ts">
	import { goto } from '$app/navigation';

	export let className = '';

	import logo from '$lib/assets/github.svg';
	import A from '$lib/assets/logo.png';
</script>

<div
	class={`flex min-h-16 w-4/5 flex-row items-center rounded-full bg-black bg-opacity-80 text-green-500 shadow-md shadow-green-500 ${className}`}
>
	<button on:click={() => goto('/')} class="flex h-full w-1/5 items-center justify-center">
		<img class="h-10 w-10 hover:cursor-pointer" src={A} alt="A" />
	</button>
	<div class="flex w-3/5 flex-row gap-20">
		<button class="text-lg font-bold" on:click={() => goto('/')}> Home </button>
		<button class="text-lg font-bold" on:click={() => goto('/anime')}> Anime </button>
		<button class="text-lg font-bold" on:click={() => goto('/manga')}> Manga </button>
		<button class="text-lg font-bold" on:click={() => goto('/genre')}> Genre </button>
	</div>
	<div class="ml-auto flex h-full w-1/5 items-center justify-center">
		<a href="https://github.com/risv1/AniList" target="_blank" class="text-lg font-bold"
			><img src={logo} alt="Github" /></a
		>
	</div>
</div>
