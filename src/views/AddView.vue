<script setup>
    import { ref } from 'vue'
    import axios from 'axios'
    import { useCounterStore } from '../stores/counter.js'
    const store = useCounterStore()
    store.fetchApiData()

    
  // 新增
    const addName = ref('')
    const addAddress = ref('')
    const addImg = ref('')
    const addFeature = ref('')
    const addArea = ref('taipei')
    const addType = ref('food')
    async function addobj(){
      try{
        let addData = {
          locad: addName.value,
          area: addAddress.value,
          type: addType.value,
          feature: addFeature.value,
          address: addAddress.value,
          img: addImg.value,
          id: store.locadData.length++
        }
        const addBody = await axios.post('http://localhost:3000/viewsdb',addData)
        addImg.value = addAddress.value = addName.value = ''

        // window.alert('新增完畢')
      }catch(err){
        console.log(err)
      }
    }

  //搜尋
  const searchLocad = ref('taipei')
  const searchresult = ref([])
  const updateResult = ref([])

  async function searchobj(){
    try{
      const searchData = await axios.get(`http://localhost:3000/viewsdb?area=${searchLocad.value}`)
      searchresult.value = searchData.data
      updateResult.value = searchresult.value[0]
    }catch(err){
      console.log(err)
    }
  }

  //調取搜尋資料
  

  function searchBlur(e){
    console.log(searchresult.value)
    updateResult.value = searchresult.value.find((data) => data.locad === e.target.value)
    console.log(updateResult.value)
  } 


  //修改

  
  
  async function updateData(){
    try{
      let checked = confirm('確定要修改嗎')
      if(checked && updateResult.value.locad && updateResult.value.feature && updateResult.value.address && updateResult.value.img){
        let Data = {  
          locad: updateResult.value.locad,
          area: updateResult.value.area,
          type: updateResult.value.type,
          feature: updateResult.value.feature,
          address: updateResult.value.address,
          img: updateResult.value.img,  
          id: updateResult.value.id
        }
        const putData = await axios.put(`http://localhost:3000/viewsdb/${updateResult.value.id}`,Data)
      }else if(!checked){
        alert('修改失敗')
      }else{
        alert('資料不得空')
      }
      


    }catch(err){
      console.log(err)
    }
  }

  async function deleteData(){
    try{
      let checked = confirm('確定刪除嗎')
      if(checked){
        const cancelData = await axios.delete(`http://localhost:3000/viewsdb/${updateResult.value.id}`)
        updateResult.value.locad = ''
        updateResult.value.address = ''
        updateResult.value.feature = ''
        updateResult.value.img = ''

        console.log('已刪')
      }else{
        console.log('取消')
      }
    }catch(err){
      console.log(err)
    }
    
  }
  

</script>

<template>
  <div class="addveiw">
    <div class="adddb">
      <div class="title">新增</div>
      <form action="" class="form flex">
        <label for="add-name">地名</label>
          <input name="add-name" type="text" placeholder="請輸入店名或景點" v-model="addName">
        <label for="add-address">地址</label>
          <input name="add-name" type="text" placeholder="請輸入地址" v-model="addAddress">
        <label for="add-feature">特色</label>
          <input name="add-name" type="text" placeholder="請輸入特色" v-model="addFeature">
        <label for="add-img">圖片(網址)</label>
          <input name="add-name" type="text"  placeholder="請輸入圖片網址" v-model="addImg">
        <label>城市</label>
          <select  name="search-area" v-model="addArea">
            <option value="taipei">台北</option>
            <option value="taichung" >台中</option>
            <option value="tainan">台南</option>
            <option value="Kaohsiung">高雄</option>
          </select>
        <label>類型</label>
          <select  name="add-type" v-model="addType">
            <option value="food">美食</option>
            <option value="view">景點</option>
          </select>

        <input type="submit" value="add" @click.prevent="addobj()">
      </form>
    </div>
    <div class="search">
      <div class="title">搜尋</div>
      <form action="">

        <label>城市</label>
        <select  name="search-area" v-model="searchLocad">
          <option value="taipei" selected>台北</option>
          <option value="taichung">台中</option>
          <option value="tainan">台南</option>
          <option value="kaohsiung">高雄</option>
        </select>
        <input type="submit" value="search" @click.prevent="searchobj()">
      </form>

      <form action="">        
        <label  class="update title">選擇修改的項目</label>
          <select @change="searchBlur">
            <option  v-for="data in searchresult" :key="data.id" 
            :selected="data.locad === searchresult[0].locad">{{ data.locad }}</option>
          </select>    
      </form>

      <form  class="form flex">
        <label >地名</label>
          <input  type="text" v-model="updateResult.locad">
        <label >地址</label>
          <input  type="text" :value="updateResult.address">
        <label for="add-feature">特色</label>
          <input type="text" :value="updateResult.feature">
        <label for="add-img">圖片(網址)</label>
          <input type="text" :value="updateResult.img">

        <input type="submit" value="update" @click.prevent="updateData">
        <input type="submit" value="cancel" @click.prevent="deleteData">
      </form>

    </div>
      
  </div>
</template>



<style scoped lang="sass">
  @import '../assets/Add.sass'
</style>