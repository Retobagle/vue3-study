<template>
  <h1>test</h1>
  <h2>{{ name }}</h2>
  <h2>{{ age }}</h2>
  <h3>{{ job.type }}</h3>
  <h3>{{ job.money }}</h3>
  <h3>爱好：{{job.hobby}}</h3>
  <button @click="changeInfo">改变信息</button>
  <Demo/>
</template>

<script>
// import { h } from 'vue';
import Demo from './components/Demo.vue'
import { ref, reactive } from 'vue';
export default {
  name: 'App',
  components: {
    Demo,
  },
  setup() {
    // 数据
    let name = ref('hwx');
    let age = ref(18);
    /* let job = ref({
      type: 'qd',
      money: '30k'
    }) */
    let job = reactive({
      type: 'qd',
      money: '30k',
      hobby:['抽烟','喝酒','烫头']
    })
    function changeInfo() {
      name.value = 'lisi';
      age.value = 24;
      /* job.value.type = 'ui';
      job.value.money = '3k' */
      job.type = 'ui';
      job.money = '3k';
      job.hobby[0] = '学习';
    }
    // 返回一个对象(常用)
    return {
      name,
      age,
      changeInfo,
      job,
    }
    // 返回一个渲染函数
    // return () => h('h1', '测试渲染函数')
  }
}
</script>

<style>
</style>
