<main class="app">
  <div class="app__contents">
    <div class="app__launcher">
      <h1 class="app_title">WE'RE LAUNCHING SOON</h1>
    </div>
  </div>
  <div class="app__footer">
    <div class="app__footer_wrapper">
      <div class=""><img src={HillsImg} alt=""></div>

      <div class="app__footer_icons">
        <a target="_blank" href="https://www.facebook.com/">
          <Icon size="1em" path={ mdiFacebook }></Icon>
        </a>
        <a target="_blank" href="https://www.pinterest.com/">
          <Icon size="1em" path={ mdiPinterest }></Icon>
        </a>
        <a target="_blank" href="https://www.instagram.com/">
          <Icon size="1em" path={ mdiInstagram }></Icon>
        </a>
      </div>
    </div>
  </div>
</main>

<script lang="ts">
  import Icon from 'mdi-svelte';
  import HillsImg from './assets/images/pattern-hills.svg'

  import { mdiFacebook, mdiPinterest, mdiInstagram } from '@mdi/js';
</script>

<style lang="scss" global>
  @import "./assets/mains.scss";
</style>
