<script>
	import Links from "./links.svelte";
</script>

<div id="root">
	<div>
		<div id = "hom"><img id = "logo" src= "https://tbilisi.hackclub.com/assets/logo/ruby_logo.png" alt="logo">
		<div id="text">
			<!-- <h1 id="YoHeading">Tbilisi Hack Club</h1> -->
			<h5 id="boutMe">
				
			</h5>
		</div>
		</div>
		<hr />
		<div id="links"><Links /></div>
	</div>
</div>

<style>
	#root {
		display: grid;
		place-content: center;
		height: 100%;
		margin: 0px;
	}
	#hom {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	#logo {
		width: 200px;
		height: 200px;
		border-radius: 50%;
	}
	#logo:hover {
		transform: scale(1.1);
		transition: transform 0.3s ease;
	}
	#logo:active {
		transform: scale(1);
	}
	#logo:focus {
		outline: none;
	}
	#logo:focus-visible {
		outline: 2px solid #242424;
		outline-offset: 4px;
	}
	#logo:focus:not(:focus-visible) {
		outline: none;
	}
	#logo:active:focus {
		outline: 2px solid #242424;
		outline-offset: 4px;
	}
	#logo:active:focus-visible {
		outline: 2px solid #242424;
		outline-offset: 4px;
	}
	#logo:active:focus:not(:focus-visible) {
		outline: none;
	}
	#logo:focus-visible:hover {
		outline: 2px solid #242424;
		outline-offset: 4px;
	}
	#logo:focus:hover {
		outline: 2px solid #242424;
		outline-offset: 4px;
	}

	#text {
		margin: 20px;
	}

	#links {
		width: fit-content;
		margin: 20px;
	}

	#YoHeading {
		margin: 0px;
		color: black;
		font-size: 50px;
	}
	#boutMe {
		margin: 0px;
		color: #818181;
	}
	

	#whitespace {
		width: 40px;
		height: 10px;
		opacity: 0;
	}
	hr {
		width: 100%;
		border: 1px solid #242424;
	}
</style>
