<script>
	let Projects = [

	];
</script>

<div id="root">
	<h1>Our Projects</h1>
	<div id="grid">
		{#each Projects as Project}
			<div class="project-card">
				<h2>{Project.Name}</h2>
				<p>{@html Project.Description}</p>
				<div class="image-gallery">
					{#each Project.Images as Image}
						<img
							class="gallery-image"
							alt="Project Tech Stack"
							src="https://cdn.simpleicons.org/{Image}/grey"
						/>
					{/each}
				</div>
				<div class ="image-cover">
				<img class="main-image" src={Project.Image} alt="Project" />
				</div>
				<a href={Project.Link} target="_blank"
					><button class="ViewProject"> Open Project </button></a
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
