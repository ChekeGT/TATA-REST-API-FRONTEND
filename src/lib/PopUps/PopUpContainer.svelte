<script>
    import { setContext } from "svelte";

    export let autoDestructionFunction;
    export const autoDesctructionContext = setContext('autoDestruction', autoDestructionFunction);

    
</script>
<div on:click={autoDestructionFunction} class="bg-blackCover absolute w-11 h-12 left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] w-[100%] h-[100%] flex justify-center items-center">
    <slot />
</div>