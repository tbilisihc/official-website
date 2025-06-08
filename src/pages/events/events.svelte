<script>
	import { Event_list } from "./events";

	
	
</script>

<div id="root">
	<h1>Upcoming Events</h1>
	<div id="grid">
	{#each Event_list.filter(event => !event.Past) as Event}
			<div class="project-card">
				<h2>{Event.Name}</h2>
				<p>{@html Event.Description}</p>
				<div class="image-gallery">
					<p>{@html Event.Date}</p>
				</div>
				<div class ="image-cover">
				<img class="main-image" src={Event.Image} alt="Project" />
				</div>
				<a href={"#/events/" + Event.Slug} target="_blank"
					><button class="ViewProject"> Open Details </button></a
				>
			</div>
			{/each}
			</div>
			<br />
		<h1>Past events</h1>
		<div id="grid">
			{#each Event_list.filter(event => event.Past) as Event}
			<div class="project-card">
				<h2>{Event.Name}</h2>
				<p>{@html Event.Description}</p>
				<div class="image-gallery">
					<p>{@html Event.Date}</p>
				</div>
				<div class ="image-cover">
				<img class="main-image" src={Event.Image} alt="Project" />
				</div>
				<a href={"#/events/" + Event.Slug} target="_blank"
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
		max-width: 250px;
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
		object-fit: fill;
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
