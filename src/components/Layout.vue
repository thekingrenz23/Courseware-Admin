<template>
<el-container>

	<el-aside>
		<Sidebar/>
	</el-aside>	
  
  	<el-container>

    	<el-header>
			<Header/>
    	</el-header>
    
		<el-main>
			<router-view key="$router.fullPath"></router-view>
		</el-main>

  </el-container>
  
</el-container>
</template>

<style>
	.el-header {
		z-index: 99999;
		width: 100%;
		position: fixed;
		padding: 0 !important;
  	}
  
  	.el-aside {
		border-right: solid 1px #e6e6e6;
		position: fixed;
		left: 0;
		top: 0;
		width: 250px;
		height: 100vh;
		z-index: 10;
	}
	  
	.el-main{
		margin-top: 61px;
		margin-left: 300px;
		padding: 0 !important;
	}
</style>

<script>
	import Header from './Header.vue'
	import Sidebar from './Sidebar.vue'

	export default {
		components: {
			Header,
			Sidebar
		},
    	data() {
      		const item = {
        		date: '2016-05-02',
        		name: 'Tom',
        		address: 'No. 189, Grove St, Los Angeles'
      		};
      		return {
        		tableData: Array(20).fill(item)
      		}
		},
		methods:{
			changeView(path){
				this.$router.push(path)
			}
		}
  	}
</script>