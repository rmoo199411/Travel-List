<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderLayout from './components/HeaderLayout.vue'
</script>

<template>
  <div class="wrapper">
    <header>
      <HeaderLayout />
    </header>

    <section>
      <RouterView />
    </section>
    
    <footer>

    </footer>
  </div>
  
  

 
</template>

<style scoped lang="scss">

</style>
