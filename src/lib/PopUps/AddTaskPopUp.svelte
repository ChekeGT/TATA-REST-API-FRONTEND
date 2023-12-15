<script>
    let completed = false;
    let description = '';
    let title = ''; 
    function preventPropagation(e){
        e.stopPropagation();
    }
    function handleSubmit(e){
        e.preventDefault()
    }
</script>

<form on:submit={handleSubmit} on:click={preventPropagation} class="bg-darkGrey w-[480px] px-6 py-8 flex flex-col gap-5">
    <h1 class="text-white font-bold text-xl ">Add New Task.</h1>
    <div class="flex flex-col gap-2 text-white">
        <h3 class="text-white font-bold text-grayText">Title</h3>
        <input bind:value={title} name="task-name" class="bg-darkGrey w-full p-2 rounded-md border border-gray">
        <h3 class="text-white font-bold text-grayText">Description</h3>
        <textarea bind:value={description} name="task-name" class="bg-darkGrey w-full p-2 rounded-md border border-gray resize-none"/>
        <div class="flex gap-2 items-center">
            <h3 class="">Completed</h3>
            <input type="checkbox" bind:value={completed}/>
        </div>
        <button type="submit" class="bg-mainPurple p-2 rounded-full text-white font-semibold">Add New Task.</button>
    </div>
</form>