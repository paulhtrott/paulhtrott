<script>
  import Header from './navigation/Header.svelte'
  import SideNav from './navigation/SideNav.svelte'
  import Dashboard from './pages/Dashboard.svelte'
  import Experience from './pages/Experience.svelte'
  import Education from './pages/Education.svelte'
  import BlogPosts from './pages/BlogPosts.svelte'
  import { screenToLoad } from './store.js'

  let screenValue = null;

  screenToLoad.subscribe(newValue => {
    screenValue = newValue;
  });
</script>

<main>
  <Header />
  <div class="flex flex-col md:flex-row">
    <SideNav />

    <div class="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">
      { #if screenValue == "dashboard" }
        <Dashboard />
      { :else if screenValue == 'experience' }
        <Experience />
      { :else if screenValue == 'education' }
        <Education />
      { :else if screenValue == 'blogPosts' }
        <BlogPosts />
      { :else }
        <Dashboard />
      { /if }
    </div>
  </div>
</main>
