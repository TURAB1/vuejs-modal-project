
<script setup>
import { ref,computed } from 'vue';
import Header from './components/Header.vue';
import Greeting   from './components/Greeting.vue';
import Modal from './components/Modal.vue';

const routes = {
  '/': Greeting,
  '/greeting': Greeting,
  '/modal': Modal,
  
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})

// export default {
//   name: 'App',
//   components: {
//   Header,
//   Greeting ,
//   Modal
//   },
//   data(){
//     return{
//       title:"My view app"
//     }
//   },
//   methods:{
//     handleClick(){
//       console.log("btn clicked");
//     }
//   }
  
// }
</script>

<!-- <template>
  <Header/>
 <Greeting msg="Welcome to Your Vuejs"/>
  <h2>{{title}}</h2>
  <button @click="handleClick">Button click</button>
  <Modal/>
</template> -->

<template>
  <a href="/greeting">Greeting</a> |
  <a href="/modal">Modal</a> |
  <a href="/non-existent-path">Broken Link</a>
  <component :is="currentView" />
</template>

<!-- <template>
  <div class="header-section">
    <a href="/greeting">Greeting</a> 
    <div class="left-header-section">
  <a href="/modal">About</a> |
  <a href="/non-existent-path">Broken Link</a>

    </div>
  </div>
  <component :is="currentView" />
</template> -->

<!-- <style>
#app1 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->

<style scoped>
.header-section {
  background-color: blue;
  display: flex;
  justify-content: space-around;
  cursor: context-menu;
  height: 50px;
}
.left-header-section{
  
   display: flex; 
   justify-content: space-evenly;
   width: 30%;
}
</style>