<template>
<div>
<el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    
    <el-table-column
        label="Teacher Name"
        prop="name">
    </el-table-column>

    <el-table-column
        label="Section"
        prop="date">
    </el-table-column>

    <el-table-column
        align="right">
        
        <template slot="header" slot-scope="scope">
            <el-input
                v-model="search"
                placeholder="Type to search"/>
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
<el-dialog title="Shipping address" :visible.sync="dialogFormVisible">
    <el-form :model="form">
        <el-form-item label="Promotion name" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="Zones" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="Please select a zone">
                <el-option label="Zone No.1" value="shanghai"></el-option>
                <el-option label="Zone No.2" value="beijing"></el-option>
            </el-select>
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
export default {
    data() {
        return {
            tableData: [{
                date: '2016-05-03',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles'
            }, {
                date: '2016-05-02',
                name: 'John',
                address: 'No. 189, Grove St, Los Angeles'
            }, {
                date: '2016-05-04',
                name: 'Morgan',
                address: 'No. 189, Grove St, Los Angeles'
            }, {
                date: '2016-05-01',
                name: 'Jessy',
                address: 'No. 189, Grove St, Los Angeles'
            }],
            search: '',
            dialogFormVisible: false,
            formLabelWidth: '120px',
            form: {
                name: ""
            }
        }
    },
    methods: {
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        }
    }
}
</script>