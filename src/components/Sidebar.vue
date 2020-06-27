<template>

    <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
		router
        >

        <div class="sidebar-avatar">
        	<el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" ></el-avatar>
          	<p style="margin-left: 20px">
				{{ getUserData.name }}
          	</p>
        </div>

        <!--<el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span>Dashboard</span>
        </el-menu-item>-->

        <el-menu-item index="/">
            <i class="el-icon-notebook-1"></i>
            <span>Manage Stories</span>
        </el-menu-item>

		<el-menu-item index="/teachers">
            <i class="el-icon-user"></i>
            <span>Manage Teachers</span>
        </el-menu-item>

        <el-menu-item index="/sections">
            <i class="el-icon-set-up"></i>
            <span>Manage Sections</span>
        </el-menu-item>

        <el-menu-item index="/schoolyear">
            <i class="el-icon-school"></i>
            <span>Manage School year</span>
        </el-menu-item>

        <el-menu-item index="/out">
            <i class="el-icon-download"></i>
            <span>Logout</span>
        </el-menu-item>

    </el-menu>
  
</template>
<script>
export default {
    computed:{
        getUserData(){
            return this.$store.getters.getUserData
        }
    },
    methods: {
      	handleOpen(key, keyPath) {
        	console.log(key, keyPath);
      	},
      	handleClose(key, keyPath) {
        	console.log(key, keyPath);
		},
		go(path){
			this.$emit('update', path)
		}  
    }
}
</script>

<style scoped>
  	.el-menu{
        margin-top: 4em;
        border: none;
    }

	.sidebar-avatar{
		height: 100px;
    	line-height: 56px;
		padding-left: 20px; 
		padding-right: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>