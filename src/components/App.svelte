<style>
</style>

<script lang="ts">
  // props
  export let title: string;
  // -- import style
  import "./app.scss";
  // -- import components
  import TitleBlock from "./TitleBlock/TitleBlock.svelte";
  import CopyRight from "./CopyRight/CopyRight.svelte";
  import AboutMe from "./AboutMe/AboutMe.svelte";
  import Contact from "./Contact/Contact.svelte";
  import SongSample from "./SongSample/SongSample.svelte";
</script>

<main>
  <TitleBlock title="{title}" />
  <div class="mainContent">
    <AboutMe />
    <Contact />
    <SongSample />
  </div>
  <CopyRight />
</main>
