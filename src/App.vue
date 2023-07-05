<template>
	<div class="app">
		<h3>我是App组件（祖），{{name}}--{{price}}</h3>
		<!-- vue3会自动从setup函数返回的对象中，寻找属性名和ref标签属性值相同的属性，读取他的结果，将当前节点的内容放在属性值中。（属性值必须是一个ref对象） -->
		<input style="margin: 5px 0;" type="text" ref="inputone">
		<Child/>
	</div>
</template>

<script>
	import { ref, reactive,toRefs,provide, onMounted } from 'vue'
	import Child from './components/Child.vue'
	export default {
		name:'App',
		components:{Child},
		setup(){
			let inputone = ref(null); 
			onMounted(() => {
				inputone.value.focus();
			})
			let car = reactive({name:'奔驰',price:'40W'})
			provide('car',car) //给自己的后代组件传递数据
			return {...toRefs(car), inputone} // ref获取dom元素 返回出去的属性名要跟元素的ref一致
		}
	}
</script>

<style>
	.app{
		background-color: gray;
		padding: 10px;
	}
</style>