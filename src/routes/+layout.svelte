<script lang="ts">
	import NavBar from './NavBar.svelte';

	import '../app.css';
</script>

<NavBar />
<div class="min-h-screen flex flex-col">
	<slot />
</div>
