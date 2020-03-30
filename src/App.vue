<template>
  <div id="app">
    <div class="bodywork">
    <AddName class="sty" />
    <Users />
    </div>
  </div>
</template>

<script>
import Users from './components/Users.vue'
import AddName from './components/AddName.vue'
export default {
  name: 'App',
  components: {
    Users,
    AddName
  }
}
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  margin-top: 60px;
}
.bodywork {
  width: 50%;
  margin: 0 auto;
}
.sty{
  margin-bottom: 1rem;
}
</style>
