<template>
    <div>
        <el-row :span="24" class="page-header" type="flex" justify="center" align="center">
            <el-col :span="12" class="page-title">
                <i class="el-icon-notebook-1"></i> Manage Stories / New Story
            </el-col>
            <el-col :span="12" class="add-btn">
                
            </el-col>
        </el-row>
        <el-row :span="24" class="page-content">

            <el-steps :active="activeStep" align-center finish-status="success">
                <el-step title="Story Description" description="Title, Body, Quarter">
                </el-step>
                <el-step title="Story Activity" description="Questions and Answers"></el-step>
            </el-steps>

            <ComposeForm v-if="activeStep == 0" @verified="nextStep"/>
            <QuestionForm v-if="activeStep == 1"/>
        </el-row>
    </div>
</template>
<script>
import ComposeForm from '../../components/ComposeForm.vue'
import QuestionForm from '../../components/QuestionsForm.vue'
import HorizontalStepper from 'vue-stepper'

export default{
    components:{
        HorizontalStepper,
        ComposeForm,
        QuestionForm
    },
    data(){
        return{
            activeStep: 0
        }
    },
    methods: {
        addStory(path){
            this.$router.navigator.navigate(path)
        },
        nextStep(){
            this.activeStep = 1
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
        font-size: 2rem;
    }
    .page-title{
        display: flex; 
        justify-content: flex-start; 
        align-items: center;
        line-height: 16px;
        vertical-align: 16px;
    }
    .page-title > i{
        margin-right: 10px;
    }
</style>