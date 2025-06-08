<script>
	let team = 
	{
		"Drew Smirnoff": "https://avatars.githubusercontent.com/u/175145001?v=4",
		"Boris Mirakov": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_MYPQuoqZhenNT8BsFfPdmW66XAcPbx0vOg&s",
	}
</script>

<div id="root">
	<h1>About Us</h1>
	<h2> Who are we?</h2>
	<br />
	<p id ="aboutText">
		Tbilisi Hack Club is a non-profit organization based in Tbilisi, Georgia.
		We are a community of young people who are passionate about technology,
		coding, and innovation. Our mission is to empower the next generation of
		tech leaders through education, collaboration, and hands-on experience.
	<h2>Our team</h2>
		<ul>
			{#each Object.entries(team) as [name, photo]}
				<li id = "teamMember">
					<img src={photo} alt={name} style="width: 50px; height: 50px; border-radius: 50%;" />
					<p id = "name">{name}</p>
				</li>
			{/each}
		</ul>

</div>

<style>
	* {
		margin: 0;
	}
	#root {
		display: flex;
		flex-direction: column;
		margin: 0;
		align-items: center;
	}
	#aboutText {
		width: 80%;
		text-align: center;
		font-size: 18px;
		line-height: 1.6;
		color: #333;
	}
	#name {
		display: flex;
		align-items: center;
	}
	#teamMember {
		display: flex;
		align-items: center;
		margin: 10px 10px 10px 10px;
		gap: 10px;
	}
	h2 {
		margin-top: 20px;
		margin-bottom: 5px;
	}
</style>
