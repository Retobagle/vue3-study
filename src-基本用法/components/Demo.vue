<template>
	<h1>一个人的信息</h1>
	姓：<input type="text" v-model="person.firstName">
	<br>
	名：<input type="text" v-model="person.lastName">
	<br>
	<span>全名：{{person.fullName}}</span>
	<br>
	全名：<input type="text" v-model="person.fullName">
</template>

<script>
	import {ref, reactive,computed,toRaw} from 'vue'
	export default {
		name: 'Demo',
		setup(){
			//数据
			let person = reactive({
				firstName:'张',
				lastName:'三'
			})
			let testObj = ref({
				a: 123
			})
			// 计算属性(简写)
		/* 	person.fullName = computed(() => {
				return person.firstName + '-' + person.lastName
			}) */
			person.fullName = computed({
				get() {
					return person.firstName + '-' + person.lastName
				},
				set(val) {
					person.firstName = val.split('-')[0]
					person.lastName = val.split('-')[1]
				}
			})

			//返回一个对象（常用）
			return {
				person,
				testObj
			}
		}
	}
</script>

