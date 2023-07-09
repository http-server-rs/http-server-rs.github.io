<script lang="ts">
  import Copy from '~icons/custom/Copy';
  import { copyToClipboard } from '$lib/actions/copy_to_clipboard';

  let cargoInstallEl: HTMLElement;
</script>

<section class="relative">
  <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
    <div class="py-12 md:py-20">
      <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
        <h2
          class="text-3xl font-extrabold leading-tighter tracking-tighter mb-4"
        >
          Download
        </h2>
        <p class="text-lg text-gray-600 mb-8">
          Download the HTTP Server binary for your platform.
        </p>
        <div class="flex items-center justify-center">
          <pre bind:this={cargoInstallEl}>
            cargo install http-server
          </pre>
          <button
            type="button"
            class="flex items-center justify-center"
            use:copyToClipboard={cargoInstallEl}
          >
            <figure class="border flex items-center justify-center">
              <Copy />
            </figure>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
