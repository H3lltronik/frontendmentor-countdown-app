<div class="app__contents">
  <div class="app__launcher">
    <h1 class="app_title">WE'RE LAUNCHING SOON</h1>

    <div class="app__launcher__numbers">
        <!-- <Counter number="8" legend="days"></Counter>
        <Counter number="23" legend="hours"></Counter>
        <Counter number="55" legend="minutes"></Counter> -->
        <Counter number="41" legend="seconds"></Counter>
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
    let numbers = [];

    for (let i = 0; i < 10; i++) numbers.push(i);
</script>

<style lang="scss">
</style>
