<template>
    <div>
        <el-row :span="24" class="page-header" type="flex" justify="center" align="center">
            <el-col :span="12" class="page-title">
                <i class="el-icon-notebook-1"></i> Manage Teachers
            </el-col>
            <el-col :span="12" class="add-btn">
                <el-tooltip class="item" effect="dark" content="Add Teacher" placement="left">
                    <el-button icon="el-icon-plus" circle class="add-btn" type="success" @click="dialogFormVisible = true"></el-button>
                </el-tooltip>
            </el-col>
        </el-row>
        <el-row :span="24" class="page-content">
            <TeachersTBL/>
        </el-row>

        <el-dialog title="Create Teacher Account" :visible.sync="dialogFormVisible">
            <el-form :model="form">

                <el-form-item label="Firstname" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item label="Lastname" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item label="Section" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item label="username" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item label="password" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item label="cpassword" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>

            </el-form>
        
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">Cancel</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">Confirm</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import TeachersTBL from '../components/TeachersTBL.vue'

export default{
    components:{
        TeachersTBL
    },
    data(){
        return{
            dialogFormVisible: false,
            formLabelWidth: '120px',
            form: {
                name: ""
            }
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