<script lang="ts">
  import Header from '$lib/components/Header.svelte';

  import '../app.css';
</script>

<svelte:head>
  <title>Rust HTTP Server</title>
</svelte:head>

<body class="font-inter antialiased bg-white text-gray-900 tracking-tight">
  <div
    class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip"
  >
    <Header />
    <slot />
  </div>
</body>
