<div class="app__contents">
  <div class="app__launcher">
    <h1 class="app_title fade-in-2">WE'RE LAUNCHING SOON</h1>
    <div class="app__launcher__numbers fade-in">
        <Counter key={'days'} legend="days"></Counter>
        <Counter key={'hours'} legend="hours"></Counter>
        <Counter key={'minutes'} legend="minutes"></Counter>
        <Counter key={'seconds'} legend="seconds" disableAnim={true}></Counter>
    </div>
  </div>

  <div class="stars-layer">
    <div class="stars-1"></div>
    <div class="stars-2"></div>
    <div class="stars-3"></div>

    {#each numbers as i}
      <div class={`shooting-star-${i}_container`}>
        <div class={`shooting-star-${i}`}></div>
      </div>
    {/each}

  </div>

</div>

<script>
    import Counter from './Counter.svelte'
    import {duration} from '../store'
    import { onMount } from 'svelte';
    import moment from 'moment';
    let numbers = [];

    // Generating number of stars (Must be aligned with SCSS animation)
    for (let i = 0; i < 10; i++) numbers.push(i);

    const tick = () => {
      duration.update( d => moment.duration(d.asMilliseconds() - 1000, 'millisecond') );

      setTimeout(tick, 1001);
    }

    onMount(() => {
      tick();
    });


</script>

<style lang="scss">
</style>
