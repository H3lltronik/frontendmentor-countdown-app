<script lang="ts">
    import { onMount } from "svelte";
    export let numberStore = null;
    export let legend = "days";

    let number = 59;
    let prevNumber = 0;
    let actualTop : HTMLElement|null = null;
    let actualBottom : HTMLElement|null = null;
    let upsideBottom : HTMLElement|null = null;

    onMount(() => {
        actualTop.addEventListener('animationend', () => { actualTop.classList.remove("actual-top-anim") })
        actualBottom.addEventListener('animationend', () => { actualBottom.classList.remove("actual-bottom-anim") })
        upsideBottom.addEventListener('animationend', () => { upsideBottom.classList.remove("upsidedown-bottom-anim") })
    })

    numberStore.subscribe(val => {
        if (actualTop) actualTop.classList.add("actual-top-anim");
        if (actualBottom) actualBottom.classList.add("actual-bottom-anim");
        if (upsideBottom) upsideBottom.classList.add("upsidedown-bottom-anim");

        setTimeout(() => {
            number = val
            prevNumber = number - 1;
        }, 1000)
    });    
</script>

<div class="" style="position: relative; transform-style: preserve-3d;">
    <div class="counter counter--actual">
        <div bind:this={actualTop} class="counter__top">
            <div class="wrapper counter__top_borders">
                <span class="counter_number">{number.toString().padStart(2, "0")}</span>
            </div>
        </div>
        <div bind:this={actualBottom} class="counter__bottom">
            <div class="wrapper counter__bottom_borders">
                <span class="counter_number">{number.toString().padStart(2, "0")}</span>
            </div>
        </div>
        <div class="counter_legend">
            <span>{legend}</span>
        </div>
    </div>

    <div class="counter counter--upsidedown">
        <div class="counter__top">
            <div class="wrapper counter__top_borders">
                <span class="counter_number">{prevNumber.toString().padStart(2, "0")}</span>
            </div>
        </div>
        <div bind:this={upsideBottom} class="counter__bottom">
            <div class="wrapper counter__bottom_borders">
                <span class="counter_number">{prevNumber.toString().padStart(2, "0")}</span>
            </div>
        </div>
    </div>

    <div class="counter counter--next">
        <div class="counter__top">
            <div class="wrapper counter__top_borders">
                <span class="counter_number">{prevNumber.toString().padStart(2, "0")}</span>
            </div>
        </div>
        <div class="counter__bottom">
            <div class="wrapper counter__bottom_borders">
                <span class="counter_number">{prevNumber.toString().padStart(2, "0")}</span>
            </div>
        </div>
    </div>

</div>

<style lang="scss">
    
</style>