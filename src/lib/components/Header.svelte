<script lang="ts">
  import HttpServerRsLogo from '~icons/custom/logo';
  import Discord from '~icons/custom/discord';
  // import GitHub from '~icons/custom/github';
  import Anchor, { AnchorSize, AnchorVariant } from './Anchor.svelte';
</script>

<header
  class="fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out bg-white backdrop-blur-sm shadow-lg"
>
  <div class="max-w-6xl mx-auto px-5 sm:px-6">
    <div class="flex items-center justify-between h-16 md:h-20">
      <div class="flex items-center shrink-0 mr-4">
        <HttpServerRsLogo class="h-10 w-10" />
      </div>
      <nav class="flex items-center">
        <ul class="flex grow justify-end flex-wrap items-center space-x-4">
          <!-- <li>
            <Anchor href="https://github.com/http-server-rs" size={AnchorSize.Small} icon={GitHub}>Contribute</Anchor>
          </li> -->
          <li>
            <Anchor
              href="https://discord.com/invite/qJgv2p9Ebf"
              class="bg-discord-200! hover:bg-discord-400!"
              variant={AnchorVariant.Custom}
              size={AnchorSize.Small}
              icon={Discord}>Discord</Anchor
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</header>
