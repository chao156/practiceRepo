<template>
  <el-card class="box-card" style="width:500px">
    <div id="form">
      <el-row>
        <el-input v-model="Login.username" id="username" type="text" placeholder="请输入用户名" style="width:200px" />
      </el-row>
       <br><br>
      <el-row>
        <el-input v-model="Login.password" id="password" type="password" placeholder="请输入密码" style="width:200px"/>
      </el-row>
    </div>
      <br><br>
    <div id="login">
      <el-button v-on:click="login()">登录</el-button>
    </div>
  </el-card>
</template>

<script>
  export default {
    data() {
      return {
        Login:{
          username:"",
          password:""
        }
      }
    },
    methods:{
      login(){
        this.$axios
        .post('api/login',{
          username:this.Login.username,
          password:this.Login.password
        })
        .then(successResponse =>{
          if(successResponse.data.code==200){
            this.$router.replace({path:'/FunRealize'})
          }
        })
        .catch(failResponse=>{

        })
      }
    }
  }
</script>

<style>
</style>
