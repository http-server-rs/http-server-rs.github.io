<script lang="ts">
  import type { SvelteComponent } from 'svelte';

  export let title: string;
  export let description: string;
  export let icon: typeof SvelteComponent;
</script>

<div
  class="h-full relative flex flex-col items-center p-6 bg-white rounded shadow-xl"
>
  <figure
    class="bg-blue-600 rounded-full flex justify-center items-center w-16 h-16 mb-4"
  >
    <svelte:component this={icon} class="text-white w-10 h-10 p-1" />
  </figure>
  <h4 class="text-xl font-bold leading-snug tracking-tight mb-1">
    {title}
  </h4>
  <p class="text-gray-600 text-center">
    {description}
  </p>
</div>
