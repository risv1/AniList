<script>
	/**
	 * @type {any}
	 */
	export let data;
</script>

<div class="shadow-effect flex h-screen w-screen items-center justify-center p-5 overflow-hidden">
	<div class="flex h-full w-10/12 flex-row">
		<div class="flex w-1/2 flex-col items-center justify-center gap-5">
			<h1 class="text-3xl font-medium text-green-500">
				{String(data.manga.attributes.slug).toLocaleUpperCase()}
			</h1>
			<h1 class="text-xl font-medium text-green-500">
				{data.manga.attributes.titles.en}
			</h1>
			<img
				class="h-4/5 w-fit rounded-xl border border-green-500 shadow-lg shadow-green-950"
				src={data.manga.attributes.posterImage.original}
				alt={data.manga.attributes.slug}
			/>
		</div>
		<div class="w-1/2 overflow-y-auto">
			<div class="flex h-fit w-full flex-row gap-7 ">
				<h1 class="text-xl font-medium text-green-500">Synopsis:</h1>
				<p class="text-lg font-light text-white">
					{data.manga.attributes.synopsis}
				</p>
			</div>
		</div>
	</div>
</div>

<style>
	.shadow-effect {
		background: radial-gradient(rgb(32, 37, 49), rgba(0, 0, 0, 0.5));
	}
</style>