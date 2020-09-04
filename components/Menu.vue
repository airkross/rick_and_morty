<template>
  <div class="menu-wrap">
    <ul class="menu">
        <li class="menu-item">
            <router-link class="menu-link" to="/">Home</router-link>
        </li>
        <li class="menu-item">
            <router-link class="menu-link" to="/characters">Characters</router-link>
        </li>
        <li class="menu-item">
            <router-link class="menu-link" to="/locations">Locations</router-link>
        </li>
        <li class="menu-item">
            <router-link class="menu-link" to="/episodes">Episodes</router-link>
        </li>
    </ul>
  </div>
</template>


<style scoped>
.menu{
    display: flex;
    list-style: none;
    max-width: 700px;
    width: 100%;
    justify-content: space-between;
    margin: 0 auto;
}
</style>