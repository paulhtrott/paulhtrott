<script>
  export let skipImage;
  export let image;
  export let imageAlt;
  export let companyName;
  export let title;
  export let years;
  export let description;
  export let skills;
</script>

<div class="w-full md:w-1/2 p-3">
  <div class="rounded overflow-hidden shadow-lg">
    { #if skipImage !== 'true' }
      <img class="w-full" src="{image}" alt="{imageAlt}">
    { /if }
    <div class="px-6 py-4">
      <div class="text-sm mb-2">{title}</div>
      <div class="font-bold text-xl mb-2">{companyName}</div>
      <div class="text-xs mb-2">{years}</div>
      <p class="text-gray-700 text-base">
        {description}
      </p>
    </div>
    <div class="px-6 py-4">
      { #each skills as skill }
        <span class="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{skill}</span>
      { /each }
    </div>
  </div>
</div>
