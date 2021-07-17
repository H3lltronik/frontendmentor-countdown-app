<div class="app__footer">
  <div class="app__footer_wrapper">
    <div class="app__footer_image">
        <img src={HillsImg} alt="" />
    </div>

    <div class="app__footer_icons">
      <a target="_blank" href="https://www.facebook.com/">
        <Icon size="1em" path={mdiFacebook} />
      </a>
      <a target="_blank" href="https://www.pinterest.com/">
        <Icon size="1em" path={mdiPinterest} />
      </a>
      <a target="_blank" href="https://www.instagram.com/">
        <Icon size="1em" path={mdiInstagram} />
      </a>
    </div>
  </div>
</div>

<script lang="ts">
    import Icon from 'mdi-svelte';
    import HillsImg from '../assets/images/pattern-hills.svg'
  
    import { mdiFacebook, mdiPinterest, mdiInstagram } from '@mdi/js';
  </script>