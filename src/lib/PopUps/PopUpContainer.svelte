<script>
    import { setContext } from "svelte";

    export let autoDestructionFunction;
    export const autoDesctructionContext = setContext('autoDestruction', autoDestructionFunction);
</script>
<div on:click={autoDestructionFunction} class=" w-[100vw] h-[100vh] bg-blackCover absolute z-50">
    <slot />
</div>