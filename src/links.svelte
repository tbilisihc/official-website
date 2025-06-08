<script>
	import Link from "./link.svelte";
	import LinkMob from "./link Mob.svelte";
</script>

<div id="yes">
	<Link
		link="#/"
		text="Home"
		
	/>
	<Link
		link="#/about"
		text="About"
		
	/>
	<Link
		link="#/contact"
		text="Contact"
		
	/>
	<Link
		link="#/events"
		text="Events"
		
	/>
	<Link
		link="https://github.com/tbilisihc"
		text="Github"
		
	/>
</div>
<div id="no">
	<LinkMob
		link="#/"
		
	/>
	<LinkMob
		link="#/about"
		
	/>
	<LinkMob
		link="#/contact"
		
	/>
	<LinkMob
		link="#/events"
		
	/>
	<LinkMob
		link="https://github.com/andrinoff"
		
	/>
</div>

<style>
	#yes {
		display: flex;
	}

	#no {
		display: none;
	}

	@media screen and (max-width: 800px) {
		#yes {
			display: none;
		}

		#no {
			display: flex;
		}
	}
</style>
