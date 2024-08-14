<template>
  <div class="header-section">
    <h1>Company Ltd</h1>
    <div class="left-header-section">
      <h1 @click="loginHandle">Login</h1>
      <h1>About us</h1>
      <h1>Contact us</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  methods:{
    loginHandle(){
        console.log("login clicked")
    }
  }
};
</script>

<style scoped>
.header-section {
  background-color: blue;
  display: flex;
  justify-content: space-around;
  cursor: context-menu;
}
.left-header-section{
  
   display: flex; 
   justify-content: space-evenly;
   width: 30%;
}
</style>