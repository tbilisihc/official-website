<script>
	import Link from "../../link.svelte";
</script>

<div id="root">
	<Link
		link="#/about"
		text="About"
		logo="https://img.icons8.com/?size=100&id=oYto3gDewkU6&format=png&color=000000"
	/>
	<Link
		link="#/contact"
		text="Contact"
		logo="https://img.icons8.com/?size=100&id=1eCbkp60SQm7&format=png&color=000000"
	/>
	<Link
		link="#/Projects"
		text="Projects"
		logo="https://img.icons8.com/?size=100&id=83172&format=png&color=000000"
	/>
	<Link
		link="https://github.com/tbilisihc"
		text="Github"
		logo="https://img.icons8.com/?size=100&id=62856&format=png&color=000000"
	/>
</div>

<style>
	#root {
		display: flex;
	}

	@media screen and (max-width: 550px) {
		#root {
			flex-direction: column;
		}
	}
</style>
