<script>
  import Title from './../components/Title.svelte'

  import { onMount } from 'svelte'

  let experience = []

  onMount(async () => {
    fetch("paulhtrott.json")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      experience = data.experience;
    });
  });
</script>

<Title title="Experience" />

<div class="flex flex-row flex-wrap flex-grow mt-2">
  <div class="w-full md:w-1/2 p-3">
    <ul>
      { #each experience as job }
        <li>
          <h1>{job.name}</h1>
        </li>
      { /each }
    </ul>
    <a href="https://www.linkedin.com/in/paulhtrott">View All Experience</a>
  </div>
</div>
