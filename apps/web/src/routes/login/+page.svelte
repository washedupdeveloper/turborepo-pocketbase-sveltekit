<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { goto } from '$app/navigation';
</script>

<div class="flex flex-col items-center h-full w-full pt-12">
	<h2 class=" text-center text-3xl font-bold tracking-tight text-base-content">
		Sign into your account
	</h2>
	<p class="text-center mt-1">
		Or <a href="/login" class="text-primary font-medium hover:cursor-pointer">register</a> if you don't
		have an account
	</p>
	<form
		method="POST"
		class="flex flex-col items-center space-y-2 w-full mt-4"
		use:enhance={() => {
			return async ({ result, update }) => {
				if (result.type === 'failure' || result.type === 'error') {
					await applyAction(result);
				} else {
					update()
						.then(async () => {
							await goto('/');
						})
						.catch(() => window.alert('Something went wrong while signing in, please try again'));
				}
			};
		}}
	>
		<div class="form-control w-full max-w-md">
			<label for="email" class="label font-medium pb-1">
				<span class="label-text">Email</span>
			</label>
			<input type="email" name="email" class="input input-bordered w-full max-w-md mb-2" />
		</div>
		<div class="form-control w-full max-w-md">
			<label for="password" class="label font-medium pb-1">
				<span class="label-text">Password</span>
			</label>
			<input type="password" name="password" class="input input-bordered w-full max-w-md mb-2" />
		</div>
		<div class="w-full max-w-md pt-3">
			<button type="submit" class="btn btn-primary w-full max-w-md">Login</button>
		</div>
	</form>
</div>
