<template>
  <div class="character">
    <app-menu></app-menu>
    <app-rand></app-rand>
    <div class="heros">
      <div class="left">
        <div
          class="name"
          v-for="hero in getChars"
          :key="hero.id"
          @click="getCurChar(hero)"
        >{{hero.name}}</div>
      </div>
      <div class="right">
        <div class="rl">
          <img :src="getChar.image" alt="">
        </div>
        <div class="card">
          <div class="info">
            <strong>{{getChar.name}}</strong>
          </div>
          <div class="info">
            <div class="info-l">ID:</div>
            <div class="info-r">{{getChar.id}}</div>
          </div>
          <div class="info">
            <div class="info-l">Status:</div>
            <div class="info-r">{{getChar.status}}</div>
          </div>
          <div class="info">
            <div class="info-l">Species:</div>
            <div class="info-r">{{getChar.species}}</div>
          </div>
          <div class="info">
            <div class="info-l">Gender:</div>
            <div class="info-r">{{getChar.gender}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import appMenu from "../components/Menu";
import appRand from "../components/Random";
import store from "../store/index";
export default {
  name: "Character",
  data() {
    return {
      hero: []
    };
  },
  computed: {
    getChars() {
      return this.$store.getters.getCharacters.results;
    },
    getChar() {
      return this.hero;
    }
  },
  methods: {
    getCurChar(char) {
      console.log(char);
      this.hero = char;
    }
  },
  components: {
    appMenu,
    appRand
  }
};
</script>

<style scoped>
.heros {
  display: flex;
}
.name {
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  cursor: pointer;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
}
.left {
  width: 50%;
  height: 300px;
  overflow-y: scroll;
}
.right {
  width: 50%;
}
.card{
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.info{
  display: flex;
}
.rl{
  text-align: left;
}
</style>