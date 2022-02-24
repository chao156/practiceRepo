<template>
  <div id="Form">
 <el-button @click="dialogFormVisible = true">新增学生信息</el-button>

  <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
   <el-form :model="form">
     <el-form-item label="学校" :label-width="formLabelWidth">
       <el-input v-model="form.college" autocomplete="off"></el-input>
     </el-form-item>
     <el-form-item label="院系" :label-width="formLabelWidth">
       <el-input v-model="form.department" autocomplete="off"></el-input>
     </el-form-item>
     <el-form-item label="班级" :label-width="formLabelWidth">
       <el-input v-model="form.classes" autocomplete="off"></el-input>
     </el-form-item>
     <el-form-item label="姓名" :label-width="formLabelWidth">
       <el-input v-model="form.name" autocomplete="off"></el-input>
     </el-form-item>
     <el-form-item label="年龄" :label-width="formLabelWidth">
       <el-input v-model="form.age" autocomplete="off"></el-input>
     </el-form-item>
     <el-form-item label="性别" :label-width="formLabelWidth">
       <el-input v-model="form.sex" autocomplete="off"></el-input>
     </el-form-item>
   </el-form>
   <div slot="footer" class="dialog-footer">
     <el-button @click="dialogFormVisible = false">取 消</el-button>
     <el-button v-on:click="save" type="primary" @click="dialogFormVisible = false">确 定</el-button>
   </div>
 </el-dialog>
 </div>
</template>

<script>
  export default {
      data() {
           return {
             dialogFormVisible: false,
             form: {
               college: "",
               department: "",
               classes:"",
               name:"",
               age:"",
               sex:""
             },
             formLabelWidth: '50px'
           };
         },
      methods:{
        save(){
          this.$axios
          .post('student/save',{
            college:this.form.college,
            department:this.form.department,
            classes:this.form.classes,
            name:this.form.name,
            age:this.form.age,
            sex:this.form.sex
          })
          .then(successResponse =>{
            if(successResponse.data.code == 200){
              this.$message('新增保存成功');
            }
          })
          .catch(failResponse =>{
            this.$message("新增保存失败");
          })
        }
      }

    }
</script>

<style>
</style>
