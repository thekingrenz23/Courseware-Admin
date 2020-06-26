<template>
    <div style="margin-top: 20px; padding: 20px">
        <el-form ref="form" :model="form" label-width="120px" :rules="rules">
        <el-row>
            <el-col :span="12">
                <el-form-item label="Title" prop="name">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="Quarter" prop="quarter">
                    <el-select v-model="form.quarter" placeholder="Please select quarters">
                        <el-option label="First Quarter" value="1"></el-option>
                        <el-option label="Second Quarter" value="2"></el-option>
                        <el-option label="Third Quarter" value="3"></el-option>
                        <el-option label="Fourth Quarter" value="4"></el-option>
                    </el-select>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :span="24" style="margin-top: 20px">
            <wysiwyg v-model="myHTML" />
        </el-row>
        </el-form>
        <el-row style="margin-top: 50px" type="flex" justify="end">
            <el-button type="primary" @click="submit">Next</el-button>
        </el-row>
    </div>
</template>
<script>
import { Message } from 'element-ui'

export default{
    data(){
        return{
            myHTML: "",
            form: {
                name: '',
                qaurter: ''
            },
            rules: {
                name: [
                    { 
                        required: true, message: 'Please provide story title', trigger: 'change' 
                    },
                    {
                        min: 3, max: 99999, message: 'Length should be atleast 3', trigger: 'change'
                    }
                ],
                quarter:[
                    { 
                        required: true, message: 'Please select quarter', trigger: 'change'
                    }
                ]
            }
        }
    },
    methods: {
        submit(){
            let self = this

            this.$refs['form'].validate((valid)=>{
                if(valid){
                    if(self.myHTML.length > 10){
                        self.$emit('verified', 'someValue')
                    }else{
                        Message({ message: "Story body is required!", offset: 65, type: 'error', duration: 10000 })
                    }
                }else{
                    return false;
                }
            })
        }
    }
}
</script>

<style scoped>
    @import "~vue-wysiwyg/dist/vueWysiwyg.css";
</style>