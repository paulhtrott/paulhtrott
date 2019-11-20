<script>
  import { onMount } from 'svelte'
  import Title from './../components/Title.svelte'
  import EducationCard from './../components/EducationCard.svelte'

  let education = []

  onMount(async () => {
    fetch("paulhtrott.json")
    .then(response => response.json())
    .then(data => {
      education = data.education;
    });
  });
</script>

<Title title="Education" />

<div class="flex flex-row flex-wrap flex-grow mt-2">
  { #each education as school }
    <EducationCard image={school.image} imageAlt={school.name} school={school.name} degree={school.degree} years={school.years} url={school.url} address={school.address}/>
  { /each }
</div>
