<script lang="ts">
	import { page } from '$app/stores';

	$: currentStep = (() => {
		const url: string = $page.route.id || '';
		if (url.includes('photo')) {
			return 3;
		} else if (url.includes('username')) {
			return 2;
		}
		return 1;
	})();
</script>

<nav class="flex justify-center my-6">
	<ul class="steps">
		<a href="/login" class="step step-primary"> Sign In </a>
		<a href="/login/username" class="step" class:step-primary={currentStep >= 2}>
			Choose Username
		</a>
		<a href="/login/photo" class="step" class:step-primary={currentStep === 3}> Upload Photo </a>
	</ul>
</nav>

<main class="card w-4/6 bg-neutral text-neutral-content mx-auto">
	<div class="card-body items-center text-center">
		<slot />
		<h2>{currentStep}</h2>
	</div>
</main>
