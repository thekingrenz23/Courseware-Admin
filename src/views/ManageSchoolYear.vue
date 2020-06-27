<template>
    <div>
        <el-row :span="24" class="page-header" type="flex" justify="center" align="center">
            <el-col :span="12" class="page-title">
                <i class="el-icon-notebook-1"></i> Manage Schoolyear
            </el-col>
            <el-col :span="12" class="add-btn">
                <el-tooltip class="item" effect="dark" content="Add Teacher" placement="left">
                    <el-button icon="el-icon-plus" circle class="add-btn" type="success" @click="dialogFormVisible = true"></el-button>
                </el-tooltip>
            </el-col>
        </el-row>
        <el-row :span="24" class="page-content">
            <SchoolYearTBL ref="teacherTable"/>
        </el-row>

        <el-dialog title="New Section" :visible.sync="dialogFormVisible" :close-on-click-modal="false">
            <el-form ref="addTeacherForm" :model="form" :rules="rules">

                <el-form-item label="Section name" :label-width="formLabelWidth" prop="section_name">
                    <el-input v-model="form.section_name"></el-input>
                </el-form-item>

                <el-form-item label="Year level" :label-width="formLabelWidth" prop="yr_level">
                    <el-input v-model="form.yr_level" type="number"></el-input>
                </el-form-item>

            </el-form>
        
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false" :class="{ disabled: loading }">Cancel</el-button>
                <el-button type="primary" @click="submit" :loading="loading">Confirm</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import SchoolYearTBL from '../components/SchoolYearTBL.vue'
import { Message } from 'element-ui'
import API from '../API'

export default{
    components:{
        SchoolYearTBL
    },
    data(){
        return{
            dialogFormVisible: false,
            formLabelWidth: '120px',
            form: {
                section_name: "",
                yr_level: ""
            },
            rules:{
                section_name:[
                    {
                        required: true, message: "Section name is required", trigger: 'change'
                    }
                ],
                yr_level:[
                    {
                        required: true, message: "Year level is required", trigger: 'change'
                    }
                ]
            },
            loading: false
        }
    },
    methods: {
        go(path){
            this.$router.push(path)
        },
        submit(){
            let self = this

            this.$refs['addTeacherForm'].validate((valid)=>{
                if(valid){
                    self.loading = true
                    self.save()
                }else{
                    return false;
                }
            })
        },
        async save(){
            let self = this

            let payload = {
                ...self.form
            }

            const { data, status } = await API.addSection(payload)
            this.loading = false

            if(data.ok == true){
                self.dialogFormVisible = false
                Message({ message: data.message, duration: 5000, offset: 65, type: 'success' })
                this.$refs.teacherTable.load()
            }else{
                Message({ message: data.message, duration: 5000, offset: 65, type: 'error' })
            }
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