<div class="app__contents">
  <div class="app__launcher">
    <h1 class="app_title">WE'RE LAUNCHING SOON</h1>

    <div class="app__launcher__numbers">
        <Counter numberStore={days} legend="days"></Counter>
        <Counter numberStore={hours} legend="hours"></Counter>
        <Counter numberStore={minutes} legend="minutes"></Counter>
        <Counter numberStore={seconds} legend="seconds"></Counter>
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
    import {days, hours, minutes, seconds} from '../store'
    import { onMount } from 'svelte';
    let numbers = [];
    let interval = null;

    // Generating number of stars (Must be aligned with SCSS animation)
    for (let i = 0; i < 10; i++) numbers.push(i);

    const tick = () => {
      if ($seconds <= 1) {
        seconds.set(59);
        minutes.update(m => m-1)
      } else {
        seconds.update(s => s-1);
      }

      if ($minutes <= 1) {
        minutes.set(59);
        hours.update(h => h-1)
        return
      }

      if ($hours <= 1) {
        hours.set(23);
        days.update(d => d-1)
        return
      }

      setTimeout(tick, 1001);
    }

    onMount(() => {
          tick();
    });


</script>

<style lang="scss">
</style>
