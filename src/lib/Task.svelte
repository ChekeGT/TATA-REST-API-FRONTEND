<script>
    export let title;
    export let completed;
</script>
<button class=" bg-darkGrey px-5 text-justify rounded-lg py-2 w-[100px] flex justify-start flex-col">
    <p class="text-white">{title}</p>
    <p class=" text-mediumGrey">{completed}</p>
</button>