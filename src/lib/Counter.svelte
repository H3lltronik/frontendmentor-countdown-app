<script lang="ts">
    import {duration} from '../store'
    import { onMount } from "svelte";
    export let key = null;
    export let legend = "days";
    export let disableAnim = false;

    let lastChange = null;
    let actualTop : HTMLElement|null = null;
    let actualBottom : HTMLElement|null = null;
    let upsideBottom : HTMLElement|null = null;

    let prevNumber = 0;

    onMount(() => {
        actualTop.addEventListener('animationend', () => { actualTop.classList.remove("actual-top-anim") })
        actualBottom.addEventListener('animationend', () => { actualBottom.classList.remove("actual-bottom-anim") })
        upsideBottom.addEventListener('animationend', () => { upsideBottom.classList.remove("upsidedown-bottom-anim") })

        duration.subscribe(val => {
            if (!disableAnim && val[key]() != lastChange) {
                if (actualTop) actualTop.classList.add("actual-top-anim");
                if (actualBottom) actualBottom.classList.add("actual-bottom-anim");
                if (upsideBottom) upsideBottom.classList.add("upsidedown-bottom-anim");
            }
            lastChange = val[key]();
            
            setTimeout(() => {
                prevNumber = ($duration[key]()-1);
                if (prevNumber <= 0) {
                    if (key == 'hours') prevNumber = 23;
                    else prevNumber = 59;
                }
            }, 1000);
        });
    })
</script>

<div class="" style="position: relative; transform-style: preserve-3d;">
    <div class="counter counter--actual">
        <div bind:this={actualTop} class="counter__top">
            <div class="wrapper counter__top_borders">
                <span class="counter_number">{$duration[key]().toString().padStart(2, "0")}</span>
            </div>
        </div>
        <div bind:this={actualBottom} class="counter__bottom">
            <div class="wrapper counter__bottom_borders">
                <span class="counter_number">{$duration[key]().toString().padStart(2, "0")}</span>
            </div>
        </div>
        <div class="counter_legend">
            <span>{legend}</span>
        </div>
    </div>

    <div class="counter counter--upsidedown">
        <div class="counter__top">
            <div class="wrapper counter__top_borders">
                <span class="counter_number">{(prevNumber).toString().padStart(2, "0")}</span>
            </div>
        </div>
        <div bind:this={upsideBottom} class="counter__bottom">
            <div class="wrapper counter__bottom_borders">
                <span class="counter_number">{(prevNumber).toString().padStart(2, "0")}</span>
            </div>
        </div>
    </div>

    <div class="counter counter--next">
        <div class="counter__top">
            <div class="wrapper counter__top_borders">
                <span class="counter_number">{(prevNumber).toString().padStart(2, "0")}</span>
            </div>
        </div>
        <div class="counter__bottom">
            <div class="wrapper counter__bottom_borders">
                <span class="counter_number">{(prevNumber).toString().padStart(2, "0")}</span>
            </div>
        </div>
    </div>

</div>

<style lang="scss">
    
</style>