<template>
  <div>
    <baidu-map
      class="bdwindow"
      :dragging="dragging"
      :center="center"
      :zoom="zoom"
      style="height:250px"
      :scroll-wheel-zoom="scroll"
    >
      <bm-info-window :position="center" :title="title" :show="show">
        <p class="bdwtext" v-html="contents"></p>
      </bm-info-window>
    </baidu-map>

    <div class="amap-wrapper">
      <el-amap class="amap-box" :vid="'amap-vue'"></el-amap>
    </div>

    <el-button>默认按钮</el-button>

    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="活动形式">
        <el-input type="textarea" v-model="form.desc" :placeholder="test"></el-input>
      </el-form-item>
    </el-form>

    <input type="textarea" :placeholder="test" style="height:400px"/>
    <textarea :placeholder="test" style="height:400px;width:100%"></textarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jump_path: "",
      center: { lng: 120.4373010751, lat: 23.109563817 },
      zoom: 15, //缩放级别
      title: "标题",
      contents: "地址：具体地址信息", //标签内容
      show: true, //显示标签
      scroll: true, //地图缩放
      dragging: true, //地图拖拽
      form: {
        desc: "",
      },
      test:"1、你好呀\n2、我不好呀\n3、你到底好不好"
    };
  },
  created() {},
  mounted() {},
};
</script>

<style scoped>
.map {
  width: 100%;
  height: 100%;
}
.amap-wrapper {
  width: 500px;
  height: 500px;
}
</style>