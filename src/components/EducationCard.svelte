<script>
  export let image;
  export let imageAlt;
  export let school;
  export let degree;
  export let years;
  export let url;
  export let address;
</script>

<div class="w-full md:w-1/2 lg:flex p-3">
  <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url({image})" title="{imageAlt}">
  </div>
  <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div class="mb-8">
      <p class="text-sm text-gray-600 flex items-center">{years}</p>

      <div class="text-gray-900 font-bold text-xl mb-1">{school}</div>
      <p class="text-xs text-gray-600 flex items-center mb-2">{address}</p>

      <p class="text-gray-700 text-base mb-4">{degree}</p>


      <a href={url} class="text-sm">Visit {school}</a>
    </div>
  </div>
</div>
