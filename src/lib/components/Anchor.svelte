<script lang="ts" context="module">
  export enum AnchorVariant {
    Primary = 'primary',
    Secondary = 'secondary',
    Custom = 'custom'
  }

  export enum AnchorSize {
    Regular = 'regular',
    Small = 'small'
  }
</script>

<script lang="ts">
  import type { SvelteComponent } from 'svelte';

  export let href = '#';
  export let size: AnchorSize = AnchorSize.Regular;
  export let variant: AnchorVariant = AnchorVariant.Secondary;
  export let icon: typeof SvelteComponent | null = null;

  let className: string = '';
  export { className as class };
</script>

<div>
  <a
    {href}
    target="_blank"
    class:btn-sm={size === AnchorSize.Small}
    class:primary={variant === AnchorVariant.Primary}
    class:secondary={variant === AnchorVariant.Secondary}
    class="btn w-full mb-4 sm:w-auto sm:mb-0 {className}"
  >
    {#if icon}
      <figure class="flex justify-center items-center h-6 w-6 mr-2">
        <svelte:component this={icon} class="h-6 w-6" />
      </figure>
    {/if}
    <slot />
  </a>
</div>

<style>
  .primary {
    @apply text-white bg-blue-600;
  }

  .primary:hover {
    @apply bg-blue-700;
  }

  .secondary {
    @apply text-white bg-gray-900;
  }

  .secondary:hover {
    @apply bg-gray-800;
  }

  .btn {
    @apply inline-flex items-center justify-center rounded-md border;
    @apply border-transparent py-2 px-6;
  }

  .btn-sm {
    @apply p-2;
  }
</style>
