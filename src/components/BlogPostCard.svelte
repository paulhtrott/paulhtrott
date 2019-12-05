<script>
  export let datePublished;
  export let title;
  export let excerpt;
  export let tags;
  export let onPostClick;

  import { onMount } from 'svelte';
  import { apiURL } from './../store.js';
  import { get } from 'svelte/store';

  const apiUrl = get(apiURL);

  let tagNames = [];

  const formattedDate = (date) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    const now = new Date(date);

    return now.getDate() + "-" + months[now.getMonth()] + "-" + now.getFullYear();
  };

  const publishedDate = formattedDate(datePublished);

  onMount(async () => {
    await tags.forEach((tag) => {
      fetch(apiUrl + '/tags/' + tag)
      .then(response => response.json())
      .then(data => {
        tagNames = [...tagNames, data.name];
      })
    });
  });
</script>

<div class="w-full md:w-1/2 p-3" on:click={onPostClick}>
  <div class="rounded overflow-hidden shadow-lg cursor-pointer">
    <div class="px-6 py-4">
      <div class="text-xs mb-2">
        <strong>Published on:</strong> {publishedDate}
      </div>
      <div class="font-bold text-xl mb-1">{@html title}</div>
      <p class="text-gray-700 text-base">
        {@html excerpt}
      </p>
    </div>
    <div class="px-6 py-4">
      { #each tagNames as tag }
        <span class="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-800 mr-2 mb-2">#{tag}</span>
      { /each }
    </div>
  </div>
</div>
