<script setup>
   import { useCounterStore } from '../stores/counter.js'
   const store = useCounterStore()
   store.fetchApiData('kaohsiung')
</script>

<template>
   <div class="view">
      <div class="locad-title">高雄</div>
      <div class="guide">
         <a href="#foods">美食</a>
         <a href="#views">景點</a>
      </div>
      <div class="banner taipei">
            <img :src="store.locadData[0].img" alt="">
      </div>

      <div class="titles">美食</div>
      
      <div id="foods">
         <div class="card-list container">
               <div class="card" v-for="data in store.Food" :key="data.id">
                  <div class="card-img">
                     <img :src="data.img" alt="">
                  </div>
                  <div class="introduce">
                     <div class="name">{{ data.locad }}</div>
                     <div class="locad">地址 : {{ data.address }}</div>
                     <div class="feature">特色 : {{ data.feature }}</div>
                  </div>   
               </div>
         </div>
      </div>

      <div class="titles">景點</div>

      <div id="views">

         <div class="card-list flex container">
               <div class="card" v-for="data in store.View" :key="data.id">
                  <div class="card-img">
                     <img :src=data.img alt="">
                  </div>
                  <div class="introduce">
                     <div class="name">{{ data.locad }}</div>
                     <div class="locad">地址 : {{ data.address }}</div>
                     <div class="feature">特色 : {{ data.feature }}</div>
                  </div>   
               </div>
               
         </div>
      </div>
   </div>
</template>



<style scoped lang="sass">
    @import '../assets/Views.sass'
</style>