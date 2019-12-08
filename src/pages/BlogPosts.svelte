<script>
  import { onMount } from 'svelte'
  import Title from './../components/Title.svelte'
  import BlogPost from './../components/BlogPost.svelte'
  import BlogPostCard from './../components/BlogPostCard.svelte'
  import { apiURL } from './../store.js'
  import { get } from 'svelte/store'

  let whichPostToLoad = null;

  const apiUrl = get(apiURL);

  let blogPosts = [];

  let blogPost = null;

  onMount(async () => {
    fetch(apiUrl + '/posts')
    .then(response => response.json())
    .then(data => {
      blogPosts = data;
    });
  });

  const openPostClick = (id) => {
    fetch(apiUrl + '/posts/' + id)
    .then(response => response.json())
    .then(data => {
      blogPost = data;
      whichPostToLoad = id;

      // Scroll to top after navigation.
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  };

  const closePostClick = () => {
    whichPostToLoad = null;
    blogPost = null;

    // Scroll to top after navigation.
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
</script>

<Title title="Blog Posts" />

<div class="flex flex-row flex-wrap flex-grow mt-2">
  { #if whichPostToLoad }
    <BlogPost title="{blogPost.title.rendered}" datePublished="{blogPost.date}" content="{blogPost.content.rendered}" tags={blogPost.tags} onCloseClick={() => closePostClick(blogPost.id)}/>

  { :else }
    { #each blogPosts as blogPost }
      <BlogPostCard title="{blogPost.title.rendered}" datePublished="{blogPost.date}" excerpt="{blogPost.excerpt.rendered}" tags={blogPost.tags} onPostClick={() => openPostClick(blogPost.id)}/>
    { /each }
  { /if }
</div>
