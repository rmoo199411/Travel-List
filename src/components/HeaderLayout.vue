<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const isToggled = ref(true)
const toggledBtn = ref('fa-solid fa-bars')
const select = ref('home')

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
<!-- 路由選單 -->
    <div id="navbar" class="navbar flex container">
        <RouterLink to="/"><div class="navbar-l title" @click=" select = 'home'">吃喝玩樂<span>紀錄表</span></div></RouterLink>
        <div class="navbar-m h-100">
            <ul class="flex  h-100">
                <RouterLink to="/">
                    <li :class="{'selected': select == 'home'}" @click=" select = 'home'">首頁</li>
                </RouterLink>
                <RouterLink to="/Taipei">
                    <li :class="{'selected': select == 'taipei'}" @click=" select = 'taipei'">台北</li>
                </RouterLink>
                <RouterLink to="/Taichung">
                    <li :class="{'selected': select == 'taichung'}" @click=" select = 'taichung'">台中</li>
                </RouterLink>
                <RouterLink to="/Tainan">
                    <li :class="{'selected': select == 'tainan'}" @click=" select = 'tainan'">台南</li>
                </RouterLink>
                <RouterLink to="/Kaohsiung">
                    <li :class="{'selected': select == 'kaohsiung'}" @click=" select = 'kaohsiung'">高雄</li>
                </RouterLink>
            </ul>
        </div>

<!-- navbar-r -->
        <RouterLink to="/Add" class="record">
            <div class="navbar-r" :class="{'selected-r': select == 'record'}" @click=" select = 'record'">
                <span>紀錄</span>
            </div>
        </RouterLink>

<!-- 漢堡選單 -->
        <div class="navbar-list"><a href="#" @click="clickList">
            <font-awesome-icon :icon= "toggledBtn" /></a>

                <ul :class= " isToggled ? 'toggleList' : 'drop-menu'">
                    <RouterLink to="/" class="list">
                        <li @click=" select = 'home'">首頁</li>
                    </RouterLink>
                    <RouterLink to="/Taipei" class="list">
                        <li @click=" select = 'taipei'">台北</li>
                    </RouterLink>
                    <RouterLink to="/Taichung" class="list">
                        <li @click=" select = 'taichung'">台中</li>
                    </RouterLink>
                    <RouterLink to="/Tainan" class="list">
                        <li @click=" select = 'tainan'">台南</li>
                    </RouterLink>
                    <RouterLink to="/Kaohsiung" class="list">
                        <li @click=" select = 'kaohsiung'">高雄</li>
                    </RouterLink>
                    <RouterLink to="/Add" class="list">
                        <li @click=" select = 'record'">紀錄</li>
                    </RouterLink>
                </ul>
        </div>

<!-- 至頂按鈕 -->
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

