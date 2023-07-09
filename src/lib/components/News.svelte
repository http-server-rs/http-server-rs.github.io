<script lang="ts">
  import Anchor, { AnchorSize } from './Anchor.svelte';

  const NEWS = [
    {
      title: 'We reached +100 Stars 🤩 on GitHub!',
      body: 'Wow! We are already 100 Stars on GitHub! Thanks to every crontributor and stargazers!',
      url: 'https://github.com/http-server-rs/http-server/stargazers',
      date: new Date('2023-07-10'),
      author: 'EstebanBorai'
    },
    {
      title: 'Korben.info wrote about us!',
      body: 'Kudos to Korben 🍻! for writing about us and sharing our project with its readers.',
      url: 'https://korben.info/decouvrez-serveur-http-polyvalent-tls-cors.html',
      date: new Date('2023-06-27'),
      author: 'EstebanBorai'
    },
    {
      title: 'Release v0.8.5',
      body: 'This release includes fixes on documentation and minor improvements on the CLI.',
      url: 'https://github.com/http-server-rs/http-server/releases/tag/v0.8.5',
      date: new Date('2022-10-16'),
      author: 'EstebanBorai'
    }
  ];

  const AVATAR_URL: Record<string, string> = {
    EstebanBorai: 'https://avatars.githubusercontent.com/u/34756077?v=4'
  };
</script>

<section>
  <div class="max-w-6xl mx-auto px-4 sm:px-6">
    <div class="py-12 md:py-20">
      <div class="max-w-3xl mx-auto text-center pb-10 md:pb-20">
        <h2
          class="text-3xl font-extrabold leading-tighter tracking-tighter mb-4"
        >
          News
        </h2>
      </div>
      <ul class="space-y-4">
        {#each NEWS as entry}
          <li class="flex flex-col">
            <article class="flex flex-col py-6">
              <h3 class="text-gray-800 text-lg">{entry.title}</h3>
              <p class="text-gray-700">{entry.body}</p>
            </article>
            <footer class="text-gray-600 flex justify-between items-center">
              <Anchor href={entry.url} size={AnchorSize.Small}>Read more</Anchor
              >
              <div class="flex space-x-4 items-center">
                <time class="text-sm" datetime={entry.date.toISOString()}
                  >{entry.date.toDateString()}</time
                >
                <span>❖</span>
                <span class="flex items-center space-x-4">
                  <figure
                    class="overflow-hidden rounded-full h-[30px] w-[30px]"
                  >
                    <img
                      src={AVATAR_URL[entry.author]}
                      alt="{entry.author} avatar"
                      height="30"
                      width="30"
                    />
                  </figure>
                  <strong class="text-sm">{entry.author}</strong>
                </span>
              </div>
            </footer>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</section>
