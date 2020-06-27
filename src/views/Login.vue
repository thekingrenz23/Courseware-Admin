<template>
    
    <div class="login-container">
        <div class="login-section">
            <img src="../assets/teacher.svg" alt="Kiwi standing on oval" class="cover">
            <h1>English Comprehension Courseware</h1>
            <p>"Having fun is the best way to learn"</p>
        </div>
        <div class="login-section">
            <el-form ref="form" label-width="120px" style="width: 60%" :model="form" :rules="rules">
                <el-form-item label="Username" prop="username">
                    <el-input v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item label="Password" prop="password">
                    <el-input v-model="form.password" type="password"></el-input>
                </el-form-item>
            </el-form>
            <el-row type="flex" justify="end" style="width: 60%">
                <el-button type="primary" size="medium" @click="submit" :loading="loading">Login</el-button>
            </el-row>
        </div>
    </div>
    
</template>
<script>
import API from '../API.js'
import { Message } from 'element-ui'

export default{
    data(){
        return{
            form:{
                username: "",
                password: ""
            },
            rules:{
                username: [
                    { 
                        required: true, message: 'username is required', trigger: 'change' 
                    }
                ],
                password: [
                    {
                        required: true, message: 'password is required', trigger: 'change'
                    }
                ]
            },
            loading: false
        }
    },
    methods:{
        submit(){
            let self = this

            this.$refs['form'].validate((valid)=>{
                if(valid){
                    self.loading = true
                    self.login()
                }else{
                    return false;
                }
            })
        },
        async login(){
            let payload = {
                username: this.form.username,
                password: this.form.password
            }

            const { data, status } = await API.login(payload)
            this.loading = false

            if(data.ok == true){
                let userData = {
                    user_id: data.user_id,
                    name: data.name
                }

                this.$store.dispatch('updateUserDataAction', userData)
                this.$store.dispatch('updateLoginAction', true)
                this.$router.push('/')
            }else{
                Message({ message: data.message, duration: 5000 })
            }
        }
    }
}
</script>

<style scoped>
    *{
        box-sizing: border-box;
    }

    .login-container{
        height: 100vh;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .login-section:nth-child(odd){
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .login-section:nth-child(even){
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: gainsboro;
    }

    .cover{
        height: 50vh;
        width: 50vw
    }
</style>
