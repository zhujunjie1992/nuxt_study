<template>
  <div>
    <h2>category/index</h2>
    <button @click="gotohome()">按钮category/index</button>
  </div>
</template>

<script>
export default {
  asyncData({
    query
  }){
    //查询带过来的参数
    console.log(query)
  },
  created(){
    console.log(this.$route.params)
  },
  methods:{
    gotohome(){
      console.log("按钮category/index");
      this.$router.push({
        path:'/home'
      })
    }
  }
}
</script>

<style>

</style>