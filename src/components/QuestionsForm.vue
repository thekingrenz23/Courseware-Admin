<template>
    <div>
    <el-row type="flex" justify="left" style="margin-top: 50px">
        <el-col :span="20">
            <el-form ref="wew" :model="form" label-width="120px">
                <div v-for="(item, index) in form.questions" :key="index">
                    <el-form-item label="Question Type">
                        <el-select v-model="item.type" placeholder="Please select question type" @change="item.sagot = undefined">
                            <el-option label="Choices" value="choice"></el-option>
                            <el-option label="True or False" value="boolean"></el-option>
                            <el-option label="Fill in the blanks" value="fill"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item :label="'Question # '+(index+1)" prop="question">
                        <el-input v-model="item.tanong">
                            <template slot="append">
                                <el-button type="danger" icon="el-icon-plus" circle @click="addQuestion"></el-button>
                                <el-button type="danger" icon="el-icon-delete" circle @click="deleteQuestion(index)" v-if="index != 0"></el-button>
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item :label="'Choice #:'+(answerIndex+1)" style="margin-left: 50px" v-for="(answerItem, answerIndex) in item.answers" :key="answerIndex" v-if="item.type == 'choice'" prop="question">
                        <el-input placeholder="Please input" v-model="answerItem.answerLabel">
                            <template slot="append">
                                <el-radio :label="answerIndex+1" v-model="item.sagot"></el-radio>
                                <el-button type="danger" icon="el-icon-plus" circle @click="addAnswer(index)"></el-button>
                                <el-button type="danger" icon="el-icon-delete" circle @click="deleteAnswer(index,answerIndex)" v-if="answerIndex != 0"></el-button>
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="Select answer" v-if="item.type == 'boolean'">
                        <el-radio-group v-model="item.sagot" prop="tort">
                            <el-radio label="True"></el-radio>
                            <el-radio label="False"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="Provide answer" v-if="item.type == 'fill'">
                        <el-input placeholder="Please input" v-model="item.sagot">
                        </el-input>
                    </el-form-item>
                    <el-divider></el-divider>
                </div>
            </el-form>
        </el-col>
    </el-row>
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
            form: {
                questions: [
                    {
                        type: "choice",
                        tanong: "",
                        answers: [
                            {
                                answerLabel: "",
                            }
                        ],
                        sagot: undefined
                    }
                ]
            },
            rules: {
                question: [
                    { 
                        required: true, message: 'Please input question', trigger: 'blur' 
                    },
                    { 
                        min: 3, max: 9999, message: 'Length should atleast be 3', trigger: 'blur' 
                    }
                ]
            }
        }
    },
    methods:{
        wew(){
            alert("potah")
        },
        addAnswer(index){
            this.form.questions[index].answers.push(
                {
                    answerLabel: ""
                }
            )
        },
        addQuestion(){
            this.form.questions.push(
                {
                    type: "choice",
                    tanong: "",
                    answers: [
                        {
                            answerLabel: "",
                        }
                    ],
                    sagot: undefined
                }
            )
        },
        deleteAnswer(index, answerIndex){
            if(this.form.questions[index].answers.length != 1){
                this.form.questions[index].answers = this.form.questions[index].answers.filter(function(value, dex){
                    if(dex == answerIndex)
                        return false
                    else
                        return true
                })
            }
        },
        deleteQuestion(index){
            if(this.form.questions.length != 1){
                this.form.questions = this.form.questions.filter(function(value, dex){
                    if(index == dex)
                        return false
                    else
                        return true
                })
            }
        },
        submit(){
            let self = this
            let valid = true
            let message = ""

            for(let i=0; i<self.form.questions.length; i++){
                if(self.form.questions[i].type == 'choice'){
                    if(self.form.questions[i].tanong.length > 0){

                        for(let x=0; x<self.form.questions[i].answers.length; x++){
                            if(self.form.questions[i].answers[x].answerLabel.length == 0){
                                valid = false
                                message = `Question #${i+1} has an invalid choices`
                                break
                            }
                        }

                        if(self.form.questions[i].sagot == undefined || self.form.questions[i].sagot == ""){
                            valid = false
                            message = `Question #${i+1} has no answer`
                            break
                        }

                    }else{
                        valid = false
                        message = `Question #${i+1} is invalid`
                        break
                    }
                }else if(self.form.questions[i].type == 'boolean'){
                    if(self.form.questions[i].tanong.length == 0){
                        valid = false
                        message = `Question #${i+1} is invalid`
                        break
                    }
                    if(self.form.questions[i].sagot == undefined || self.form.questions[i].sagot == ""){
                        valid = false
                        message = `Question #${i+1} has no answer`
                        break
                    }
                }else if(self.form.questions[i].type == 'fill'){
                    if(self.form.questions[i].tanong.length == 0){
                        valid = false
                        message = `Question #${i+1} is invalid`
                        break
                    }
                    if(self.form.questions[i].sagot == undefined || self.form.questions[i].sagot.length == 0){
                        valid = false
                        message = `Question #${i+1} has no answer`
                        break
                    }
                }
            }

            if(valid){
                alert("pwede mga boss")
            }else{
                Message({ message: message, offset: 65, type: 'error', duration: 10000 })
            }
        }
    }
}
</script>