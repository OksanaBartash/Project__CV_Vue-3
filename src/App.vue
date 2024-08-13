<template>
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <MainCard />
  <ProjectCard />
  <PortfolioCard />
</template>

<script>
import MainCard from './components/MainCard.vue'
import ProjectCard from './components/ProjectCard.vue'

export default {
  name: 'App',
  components: {
    MainCard,
    ProjectCard
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
