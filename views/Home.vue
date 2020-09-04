<template>
  <div class="home">
    <app-menu></app-menu>
    <app-rand></app-rand>
  </div>
</template>

<script>
import appMenu from "../components/Menu";
import appRand from "../components/Random";
import store from "../store/index";
export default {
  name: "Home",

  components: {
    appMenu,
    appRand
  },
 
};
</script>

