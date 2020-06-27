<template>
<div>
<el-table
    :data="tableData.filter(data => !search || data.section_name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%"
    v-loading="loadingContent">
    
    <el-table-column
        label="Section name"
        width="180">

        <template slot-scope="scope">
            <i class="el-icon-set-up"></i>
            <span style="margin-left: 10px">{{ scope.row.section_name }}</span>
        </template>

    </el-table-column>

    <el-table-column
        label="Year Level"
        prop="yr_level">
    </el-table-column>

    <el-table-column
        align="right">
        
        <template slot="header" slot-scope="scope">
            <el-input
                v-model="search"
                placeholder="Search section name"/>
        </template>

        <template slot-scope="scope">

            <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
            
            <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">Delete</el-button>

        </template>
    </el-table-column>
</el-table>
<el-dialog title="Edit Section" :visible.sync="dialogFormVisible" :close-on-click-modal="false">
    <el-form ref="editTeacherForm" :model="form" :rules="rules">

        <el-form-item label="Section name" :label-width="formLabelWidth" prop="section_name">
            <el-input v-model="form.section_name"></el-input>
        </el-form-item>

        <el-form-item label="Year level" :label-width="formLabelWidth" prop="yr_level">
            <el-input v-model="form.yr_level" type="number"></el-input>
        </el-form-item>

    </el-form>
  
    <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false" v-if="!loading">Cancel</el-button>
        <el-button type="primary" @click="submit" :loading="loading">Confirm</el-button>
    </span>
</el-dialog>
</div>
</template>

<script>
import API from '../API'
import { Message } from 'element-ui'

export default {
    data() {
        return {
            tableData: [],
            search: '',

            dialogFormVisible: false,
            formLabelWidth: '120px',
            form: {
                section_name: "",
                yr_level: "",
                section_id: ""
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

            loadingContent: false,
            loading: false,
        }
    },
    methods: {
        handleEdit(index, row) {
            this.form = { ...row }
            this.dialogFormVisible = true
        },
        handleDelete(index, row) {
            this.form = { ...row }

            this.$confirm("This will permanently delete this section. Continue?", 'Warning',{
                confirmButtonText: 'yes',
                cancelButtonText: 'Cancel',
                type:'warning'
            })
            .then(()=>{
                this.deleteTeacher()
            })
            .catch(() => {
                this.$message({
                    type: 'info',
                    message: 'Delete canceled'
                });          
            });
        },
        async load(){
            let self = this

            this.loadingContent = true
            const { data, status } = await API.getSections()
            this.loadingContent = false

            if(data.ok == true){
                this.tableData = data.data
            }else{
                Message({ message: data.message, duration: 5000, offset: 65, type: 'error' })
                this.tableData = []
            }
        },
        submit(){
            let self = this

            this.$refs['editTeacherForm'].validate((valid)=>{
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

            const { data, status } = await API.updateSection(payload)
            this.loading = false

            if(data.ok == true){
                self.dialogFormVisible = false
                Message({ message: data.message, duration: 5000, offset: 65, type: 'success' })
                self.load()
            }else{
                Message({ message: data.message, duration: 5000, offset: 65, type: 'error' })
            }
        },
        async deleteTeacher(){
            let payload = {
                section_id: this.form.section_id
            }

            const { data, status } = await API.deleteSection(payload)

            if(data.ok == true){
                this.$message({
                    type: 'success',
                    message: data.message
                })
                this.load()
            }else{
                this.$message({
                    type: 'error',
                    message: data.message
                })
            }
        }
    },
    created(){
        this.load()
    }
}
</script>