

<template>
  <div class="header-section" >
    <router-link to="/" >Home</router-link>
    <div class="left-header-section">
      <router-link to="/Greeting">Go to greeting</router-link>
    <router-link to="/Modal">Go to modal</router-link>

    </div>
  </div>
  <router-view/>
</template>


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
   text-decoration: none;
}
.header-section a, .left-header-section a{
  text-decoration: none;
  color:white
}

.header-section a.router-link-exact-active{
  color:tomato
}
</style>