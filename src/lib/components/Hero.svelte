<script lang="ts">
  import Anchor, { AnchorVariant } from './Anchor.svelte';

  const ADJECTIVES = ['safe', 'fast', 'light', 'open', 'rusty'];
</script>

<section class="relative">
  <div class="max-w-6xl mx-auto px-4 sm:px-6">
    <div class="pt-32 pb-12 md:pt-40 md:pb-20">
      <div class="text-center pb-12 md:pb-16">
        <h1
          class="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
        >
          A <span
            class="animation bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"
          >
            <ul class="adjectives">
              {#each ADJECTIVES as adjective}
                <li>{adjective}</li>
              {/each}
            </ul>
          </span> HTTP Server Solution
        </h1>
        <div class="max-w-3xl mx-auto">
          <p class="text-xl text-gray-600 mb-8">
            Serve static files or proxy requests to other servers with a single
            command.
          </p>
          <div
            class="max-w-xs mx-auto max-w-none flex flex-col justify-center md:space-x-4 md:flex-row"
          >
            <Anchor
              class="w-full"
              variant={AnchorVariant.Primary}
              href="https://github.com/http-server-rs/http-server/releases/latest"
              >Download</Anchor
            >
            <Anchor class="w-full" href="https://docs.httpserver.rs/"
              >Documentation</Anchor
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .adjectives {
    @apply mt-[-0.55em];
    animation: animation 12s infinite;
  }

  .animation {
    vertical-align: sub;
    height: 1em;
    overflow: hidden;
    display: inline-block;
    line-height: 2em;
  }

  @keyframes animation {
    0% {
      margin-top: -0.55em;
    }
    12.5% {
      margin-top: -2.54em;
    }
    25% {
      margin-top: -4.55em;
    }
    37.5% {
      margin-top: -6.55em;
    }
    50% {
      margin-top: -8.5em;
    }
    62.5% {
      margin-top: -6.55em;
    }
    75% {
      margin-top: -4.55em;
    }
    87.5% {
      margin-top: -2.54em;
    }
    100% {
      margin-top: -0.55em;
    }
  }
</style>
