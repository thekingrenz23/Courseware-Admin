<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        
        <el-menu-item style="width: 300px; display: flex; align-items: center; justify-content: center">
            <img src="../../assets/brand.png" class="brand">
        </el-menu-item>
        
        <!--
        <el-menu-item index="1">Processing Center</el-menu-item>
        
        <el-submenu index="2">

            <template slot="title">Workspace</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
        
            <el-submenu index="2-4">
                <template slot="title">item four</template>
                <el-menu-item index="2-4-1">item one</el-menu-item>
                <el-menu-item index="2-4-2">item two</el-menu-item>
                <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-submenu>
    
        </el-submenu>-->
    </el-menu>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: '1',
            activeIndex2: '1'
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style scoped>
    .el-menu{
        width: 100%;
    }

    .el-header{
        padding: 0;
    }

    .brand{
        height: 50px;
    }
</style>