<script>
  import { screenToLoad } from './../store.js'
  import { get } from 'svelte/store'

  let whichPageLoaded = get(screenToLoad);

  // Screen To Load is set to argument value.
  const onNavClick = (whichButtonClicked) => {
    screenToLoad.set(whichButtonClicked);

    whichPageLoaded = whichButtonClicked;
  };
</script>

<div class="bg-gray-900 shadow-lg h-16 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48">
  <div class="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
    <ul class="list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left">
      <li class="mr-3 flex-1">
        <button on:click={() => onNavClick('dashboard')} class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 { whichPageLoaded === 'dashboard' ? 'border-pink-500' : '' } hover:border-blue-600 w-full">
          <i class="fas fa-chart-area pr-0 md:pr-3 { whichPageLoaded === 'dashboard' ? 'text-blue-600' : '' } "></i>
          <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Dashboard</span>
        </button>
      </li>
      <li class="mr-3 flex-1">
        <button on:click={() => onNavClick('experience')} class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 { whichPageLoaded === 'experience' ? 'border-pink-500' : '' } hover:border-blue-600 w-full">
            <i class="fa fa-network-wired pr-0 md:pr-3 { whichPageLoaded === 'experience' ? 'text-blue-600' : '' } "></i><span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Experience</span>
        </button>
      </li>
      <li class="mr-3 flex-1">
        <button on:click={() => onNavClick('education')} class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 { whichPageLoaded === 'education' ? 'border-pink-500' : '' } hover:border-blue-600 w-full">
            <i class="fas fa-book pr-0 md:pr-3 { whichPageLoaded === 'education' ? 'text-blue-600' : '' } "></i><span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Education</span>
        </button>
      </li>
      <li class="mr-3 flex-1">
        <button on:click={() => onNavClick('blogPosts')} class="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 { whichPageLoaded === 'blogPosts' ? 'border-pink-500' : '' } hover:border-blue-600 w-full">
            <i class="fa fa-tasks pr-0 md:pr-3 { whichPageLoaded === 'blogPosts' ? 'text-blue-600' : '' } "></i><span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Blog Posts</span>
        </button>
      </li>
    </ul>
  </div>
</div>
