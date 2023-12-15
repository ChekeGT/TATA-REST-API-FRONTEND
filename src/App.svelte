<script>
  import NavBar from "./lib/NavBar.svelte"
    import Task from "./lib/Task.svelte";
    import { tasks } from "./lib/store";
    import { getAllTasks } from "./lib/store";
    getAllTasks()
</script>

<main>
  <div class="w-[100vw] h-[100vh] bg-veryDarkGrey">
    <NavBar/>
    <div class=" p-5 flex flex-row flex-wrap gap-5"> 
      {#if $tasks }
        {#each $tasks as task}
          <Task {...task}/>
        {/each}
      {/if}
    </div>
  </div>
</main>

<style>
</style>
