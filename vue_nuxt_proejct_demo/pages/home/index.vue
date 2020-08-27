<template>
  <div>
    <h2>home/index</h2>
    <button @click="gotocategory(111)">按钮home/index-跳转到category</button>

    <ul>
      <li v-for="(item,index) in shoptype" :key="index">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import {banner,catitems} from '@/assets/services/home'
export default {
  watchQuery: true,
  async asyncData({
    query
  }){
    let [bannerapi,catitemsapi] = await Promise.all([
      banner(),
      catitems()
    ])
    //console.log(catitemsapi.data.message)
    return{
      shoptype:catitemsapi.data.message
    }
    
  },
  data(){
    return{
      
    }
  },
  created(){
    banner()
  },
  methods:{
    gotocategory(e){
      console.log("按钮home/index-跳转到category");
      this.$router.push({
        path:'/category',
        query:{
          id:e
        }
      })

      // this.$router.push({
      //   name:"category/:id",
      //   params:{
      //     id:e
      //   }
      // })
    }
  }
}
</script>

<style>

</style>