<template>
    <div>
        <el-row :span="24" class="page-header" type="flex" justify="center" align="center">
            <el-col :span="12" class="page-title">
                <i class="el-icon-notebook-1"></i> Manage Stories
            </el-col>
            <el-col :span="12" class="add-btn">
                <el-tooltip class="item" effect="dark" content="Add Story" placement="left">
                    <el-button icon="el-icon-plus" circle class="add-btn" type="success" @click="go('/compose')"></el-button>
                </el-tooltip>
            </el-col>
        </el-row>
        <el-row :span="24" class="page-content">
            <StoriesTBL/>
        </el-row>
    </div>
</template>
<script>
import StoriesTBL from '../components/StoriesTBL.vue'

export default{
    components:{
        StoriesTBL
    },
    data(){
        return{

        }
    },
    methods: {
        go(path){
            this.$router.push(path)
        }
    }
}
</script>

<style scoped>
    .page-header{
        background-color: whitesmoke; 
        height: 100px;
        padding-right: 30px;
        padding-left: 30px;
    }
    .page-content{
        padding: 20px;
    }
    .add-btn{
        display: flex; 
        justify-content: flex-end; 
        align-items: center;
        font-size: 20px;
    }
    .page-title{
        display: flex; 
        justify-content:flex-start; 
        align-items: center;
        line-height: 16px;
        vertical-align: 16px;
    }
    .page-title > i{
        margin-right: 10px;
    }
</style>