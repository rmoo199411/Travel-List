<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const isToggled = ref(true)
const toggledBtn = ref('fa-solid fa-bars')
function clickList(){
    isToggled.value = !isToggled.value

    if(toggledBtn.value == 'fa-solid fa-bars'){
        toggledBtn.value = 'fa-solid fa-x'
    }else{
        toggledBtn.value = 'fa-solid fa-bars'
    }
}

</script>

<template>
    
    <div id="navbar" class="navbar flex container">
        <RouterLink to="/"><div class="navbar-l title">吃喝玩樂<span>紀錄表</span></div></RouterLink>
        <div class="navbar-m h-100">
            <ul class="flex  h-100">
                <RouterLink to="/"><li>首頁</li></RouterLink>
                <RouterLink to="/Taipei"><li>台北</li></RouterLink>
                <RouterLink to="/Taichung"><li>台中</li></RouterLink>
                <RouterLink to="/Tainan"><li>台南</li></RouterLink>
                <RouterLink to="/Kaohsiung"><li>高雄</li></RouterLink>
            </ul>
        </div>
        <RouterLink to="/Add" class="record"><div class="navbar-r"><span>紀錄</span></div></RouterLink>
        <div class="navbar-list"><a href="#" @click="clickList">
            <font-awesome-icon :icon= "toggledBtn" /></a>
                <ul class="drop-menu " :class="{ 'toggleList' : isToggled}">
                    <RouterLink to="/" class="list"><li>首頁</li></RouterLink>
                    <RouterLink to="/Taipei" class="list"><li>台北</li></RouterLink>
                    <RouterLink to="/Taichung" class="list"><li>台中</li></RouterLink>
                    <RouterLink to="/Tainan" class="list"><li>台南</li></RouterLink>
                    <RouterLink to="/Kaohsiung" class="list"><li>高雄</li></RouterLink>
                    <RouterLink to="/Add" class="list"><li>紀錄</li></RouterLink>
                </ul>
        </div>
        
       

    </div>
        <a href="#navbar">
            <div class="to-top">
                <font-awesome-icon icon="fa-solid fa-arrow-up" />
            </div>
        </a>
</template>


<style scoped lang="sass">
    @import '../assets/HeaderLayout.sass'
</style>

