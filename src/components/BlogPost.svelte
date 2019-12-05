<script>
  export let datePublished;
  export let title;
  export let content;
  export let tags;
  export let onCloseClick;

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

<style>
  #content :global(h3) {
    font-size: 1.2em;
    font-style: italic;
    font-weight: bolder;
  }
</style>

<div class="w-full p-3">
  <button class="bg-blue-800 hover:bg-blue-600 text-white font-bold float-right py-2 px-4 rounded" on:click={onCloseClick}>Back To All Posts</button>
  <div class="px-6 py-4 clearfix">
    <div class="font-bold text-xl mb-1">{@html title}</div>
    <div class="text-xs mb-2">
      <p><strong>Published on:</strong> {publishedDate}</p>
    </div>
    <div class="text-gray-700 text-base" id="content">
      {@html content}
    </div>
    <div class="px-6 py-4 mt-5">
      { #each tagNames as tag }
        <span class="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-800 mr-2 mb-2">#{tag}</span>
      { /each }
    </div>
  </div>
</div>


