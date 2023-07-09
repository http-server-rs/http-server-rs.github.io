<script lang="ts">
  import Folders from '~icons/custom/folders';
  import Gear from '~icons/custom/gear';
  import Key from '~icons/custom/key';
  import Lock from '~icons/custom/lock';
  import Tower from '~icons/custom/tower';
  import Performance from '~icons/custom/performance';
  import FeatureCard from './FeatureCard.svelte';
</script>

<section class="relative">
  <div
    class="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-zinc-900 pointer-events-none"
    aria-hidden="true"
  />
  <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
    <div class="py-12 md:py-20">
      <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
        <h2
          class="text-3xl font-extrabold leading-tighter tracking-tighter mb-4"
        >
          Features
        </h2>
        <p class="text-xl text-gray-600">
          The HTTP Server comes with a set of features available out of the box.
        </p>
      </div>

      <div
        class="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none"
      >
        <FeatureCard
          title="Static File Serving"
          description="Serve static files from a directory."
          icon={Folders}
        />
        <FeatureCard
          title="Configurable"
          description="Setup your server using a configuration file or command line arguments."
          icon={Gear}
        />
        <FeatureCard
          title="Secure"
          description="Use HTTPS to serve your files securely."
          icon={Lock}
        />
        <FeatureCard
          title="Protected Access"
          description="Use authentication to protect access to your files."
          icon={Key}
        />
        <FeatureCard
          title="Proxy Requests"
          description="Use the configuration file to proxy requests to another server."
          icon={Tower}
        />
        <FeatureCard
          title="Performant"
          description="Written in Rust, the HTTP Server is fast and memory efficient."
          icon={Performance}
        />
      </div>
    </div>
  </div>
</section>
