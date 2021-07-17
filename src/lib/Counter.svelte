<script lang="ts">
    import { onMount } from "svelte";
    export let numberStore = null;
    export let legend = "days";

    let number = 60;
    let prevNumber = 0;
    let actualTop : HTMLElement|null = null;
    let actualBottom : HTMLElement|null = null;
    let upsideBottom : HTMLElement|null = null;

    const addClassAndRemove = (el: HTMLElement, classToAdd: string) => {
        if ( el.classList.contains(classToAdd) ) {
            el.classList.remove (classToAdd);
            return
        }

        el.classList.add (classToAdd);
        setTimeout(() => {
            el.classList.remove (classToAdd);
        }, 1000);
    };

    numberStore.subscribe(val => {
        if (actualTop) addClassAndRemove (actualTop, "actual-top-anim");
        if (actualBottom) addClassAndRemove (actualBottom, "actual-bottom-anim");
        if (upsideBottom) addClassAndRemove (upsideBottom, "upsidedown-bottom-anim");

        number = val
        prevNumber = number -1;
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