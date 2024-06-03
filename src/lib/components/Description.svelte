<script>

	import { goto } from "$app/navigation";

</script>
<div class="flex min-h-[60vh] w-full flex-row items-center justify-center p-5">
	<div class="h-full w-1/2 flex justify-center p-7">
		<p class="text-3xl text-center text-green-300 font-light">
			AniList is a place where you can find all the information about your favorite anime and manga.
			You can search for your favorite anime and manga and get all the information about them. You
			can also search for your favorite genre and get all the anime and manga related to that genre.
		</p>
	</div>
    <div class="h-full w-1/2 flex items-center gap-3 flex-col">
        <button on:click={()=>goto("/anime")} class="button w-2/3 h-fit p-5 rounded-full bg-green-500 text-xl text-center font-bold">Anime</button>
        <button on:click={()=>goto("/manga")} class="button w-2/3 h-fit p-5 rounded-full bg-green-500 text-xl text-center font-bold">Manga</button>
    </div>
</div>

<style>
    .button {
        position: relative;
        z-index: 0;
        overflow: hidden;
        background: #22c55e;
        color: rgb(32, 37, 49);
    }
    
    .button::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgb(32, 37, 49);
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.8s ease-in-out;
        z-index: -1;
    }

    .button:hover{
        color: #22c55e;
        transition: 0.8s ease-in-out;
    }
    
    .button:hover::after {
        transform: scaleX(1);
    }
    </style>