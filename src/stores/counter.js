import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', () => {
  const locadData = ref([])

  function locadfilter(dbData,locad){
    return  dbData.filter(data => data.area == locad)
  }

  const fetchApiData = async (locad) =>{
    try{  
      const res = await axios.get('http://localhost:3000/viewsdb')
  
      if(locad == 'all'){
        locadData.value = res.data
      }else{
        locadData.value = locadfilter(res.data, locad)
      }

    }
    catch(err){
      console.log(err)
    }
  }

//type
  const Food = computed(()=>{
    return locadData.value.filter(data => data.type == "food")
  })

  const View = computed(()=>{
    return locadData.value.filter(data => data.type == "view")
  })

  return {fetchApiData, locadData, View, Food}
})
