<script>
	let Events = [
		{
			Name: "Git and Github",
			Date: "01/08/2025",
			Description: `<p>Learn the basics of Git and Github, including how to create a repository, commit changes, and collaborate with others.</p>`,
			Image: "https://medium.com/cs-note/git-and-github-for-beginners-i-tutorial-263caa01f9c3",
		}
	];
</script>

<div id="root">
	<h1>Our Projects</h1>
	<div id="grid">
		{#each Events as Event}
			<div class="project-card">
				<h2>{Event.Name}</h2>
				<p>{@html Event.Description}</p>
				<div class="image-gallery">
					<p>{@html Event.Date}</p>
				</div>
				<div class ="image-cover">
				<img class="main-image" src={Event.Image} alt="Project" />
				</div>
				<a href={Event.Link} target="_blank"
					><button class="ViewProject"> Open Details </button></a
				>
			</div>
		{/each}
	</div>
</div>

<style>
	#root {
		display: flex;
		flex-direction: column;
		margin: 0;
		align-items: center;
	}
	h2,
	p {
		margin: 0;
	}

	p {
		color: #818181;
	}
	#grid {
		display: flex;
		flex-wrap: wrap;
		max-width: 1200px;
		justify-content: center;
	}

	.project-card {
		border: 3px solid #333;
		width: 250px;
		margin: 10px;
		padding: 5px;
		padding-bottom: 0px;
	}
	.image-gallery {
		display: flex;
		gap: 10px;
		margin-top: 10px;
		margin-bottom: 10px;
	}
	.gallery-image {
		width: 30px;
		height: 30px;
		object-fit: cover;
	}
	.image-cover {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 10px;
	}
	.main-image {
		height: 146px;
		max-width: 246px;
		text-align: center;
		border: 2px solid #2e2e2e;
	}
	.ViewProject {
		background-color: #242424;
		color: white;
		border: none;
		margin-bottom: 5px;
		padding: 10px;
		width: 100%;
		cursor: pointer;
		font-size: 16px;
		font-family: "Funnel Display", sans-serif;
		transition: all 0.3s ease;
	}
	.ViewProject:hover {
		background-color: #333;
		transform: scale(1.05) rotateZ(-5deg);
	}
</style>
