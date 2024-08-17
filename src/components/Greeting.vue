<template>
  <div class="hello">
    <h1>greeting</h1>
    
  <ul><li><a href="https://vuejs.org/guide/introduction.html">vue website</a></li>
  <li><a href="https://vuejs.org/guide/introduction.html">vue website</a></li></ul>
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
    name:String,
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
