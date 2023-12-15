<script>
    import PopUpContainer from "./PopUps/PopUpContainer.svelte";

    let showAddPopup = false;
    function toggleShowAddPopUpVisibility(){
        showAddPopup = !showAddPopup
    }
</script>
<nav class="w-full bg-darkGrey h-[96px] flex flex-row justify-between px-8 items-center">
    <h1 class="text-white text-xl font-semibold">Tata Rest API Client</h1>
    <button on:click={toggleShowAddPopUpVisibility} class="text-white bg-mainPurple p-4 rounded-3xl">+Add New Task</button>
    {#if showAddPopup}
        <PopUpContainer autoDestructionFunction={toggleShowAddPopUpVisibility}>
        </PopUpContainer>
    {/if}
</nav>