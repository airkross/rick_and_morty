<template>
  <div class="random">
    <div class="random-hero">
      <div class="left">
        <img :src="hero.image" alt />
      </div>
      <div class="right">
        <div class="info">
         <strong> {{hero.name}} </strong>
        </div>
        <div class="info">
          <div class="info-l">ID:</div>
          <div class="info-r">{{hero.id}}</div>
        </div>
        <div class="info">
          <div class="info-l">Status:</div>
          <div class="info-r">{{hero.status}}</div>
        </div>
        <div class="info">
          <div class="info-l">Species:</div>
          <div class="info-r">{{hero.species}}</div>
        </div>
        <div class="info">
          <div class="info-l">Gender:</div>
          <div class="info-r">{{hero.gender}}</div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store/index";
export default {
  name: "Random",
  data() {
    return {
      randID: Math.floor(Math.random() * 10),
      hero: []
    };
  },
 
  async created() {
    await this.$store.dispatch("getFetchCharacters");
    this.hero = await this.$store.getters.getCharacters.results;
    this.hero = await this.hero[this.randID];
    console.log(this.hero);
  }
};
</script>

<style scoped>
.random-hero {
  display: flex;
  justify-content: center;
  margin-top: 50px;
  align-items: center;
}
.right {
  display: flex;
  flex-direction: column;
  margin-left: 50px;
}
.info {
  display: flex;
  margin-bottom: 10px;
}
.info-r{
  color: red;
}
</style>