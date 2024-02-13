<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';

	export let data: PageData;

	// $page.params
</script>

<h1>{data.boatName}</h1>

<form method="post" use:enhance>
	<input type="text" name="boatName" />
	<button type="submit">Submit</button>
</form>

<!-- <div class="grid-container"> <div class="grid-item">1</div> <div class="grid-item">2</div> <div class="grid-item">3</div> <div class="grid-item">4</div> <div class="grid-item">5</div> </div> -->
