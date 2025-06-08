<script>
	import Link from "../../link.svelte";
</script>

<div id="root">
	<div>
		<div id="me">
			<h3 id="YoHeading">
				Contact Us:
			</h3>

		</div>
		<div id="links">
			<Link
				link="https://www.facebook.com/groups/2449492548753412"
				text="Facebook"
				logo="https://cdn.simpleicons.org/facebook/black"
			/>
			<Link
				link="mailto:tbilisihc@yahoo.com"
				text="Email"
				logo="https://cdn.simpleicons.org/gmail/black"
			/>
			<Link
				link="https://t.me/tbilisihc"
				text="Telegram"
				logo="https://cdn.simpleicons.org/telegram/black"
			/>
			<Link
				link="https://instagram.com/tbilisihc"
				text="Instagram"
				logo="https://cdn.simpleicons.org/instagram/black"
			/>
		</div>
	</div>
</div>

<style>
	#root {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
		margin: 0px;
	}

	#me {
		margin-bottom: 20px;
	}
	#links {
		width: fit-content;
		display: flex;
		flex-direction: column;

		gap: 10px;
	}

	#YoHeading {
		margin: 0px;
		color: black;
		font-size: 35px;
	}
</style>
