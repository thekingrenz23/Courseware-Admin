<template>
<el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    
    <el-table-column
        label="Title"
        prop="name">
    </el-table-column>

    <el-table-column
        label="Date Added"
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