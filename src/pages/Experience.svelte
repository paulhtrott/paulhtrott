<script>
  import { onMount } from 'svelte'
  import Title from './../components/Title.svelte'
  import ExperienceCard from './../components/ExperienceCard.svelte'

  let experience = []

  onMount(async () => {
    fetch("paulhtrott.json")
    .then(response => response.json())
    .then(data => {
      experience = data.experience;
    });
  });
</script>

<Title title="Experience" />

<div class="flex flex-row flex-wrap flex-grow mt-2">
    { #each experience as job }
      <ExperienceCard title="{job.title}" skipImage="true" image="" imageAlt="" description="{job.description}" skills={job.skills} companyName={job.name} years={job.years} />
    { /each }
</div>

<a class="float-right mr-5" href="https://www.linkedin.com/in/paulhtrott">View All Experience</a>
