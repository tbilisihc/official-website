<script>
	import Links from "./links.svelte";
</script>

<div id="root">
	<div id="me">
		<img id = "logo" src="https://avatars.githubusercontent.com/u/213840567?s=200&v=4" alt="logo">
	</div>
	<Links />
</div>
<hr>

<style>
	#root {
		display: flex;
		justify-content: space-between;
		margin: 10px;
		border-radius: 10px;
	}
	@media (max-width: 620px) {
		#root {
			flex-direction: column;
			align-items: center;
		}
	}

	#me {
		display: flex;
		margin: 10px;
		align-items: center;
	}
	#logo {
		max-width: 50px;
		max-height: 50px;
		border-radius: 50%;
		transform: scale(2);
	}
	
	
	

	hr {
		width: 99%;
		border: 1px solid #242424;
	}
</style>
