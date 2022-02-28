<template>
  <div>
    <el-card>
    <el-table ref="multipleTable":data="tableData" height="250" border style="width: 720px" >
         <el-table-column type="selection" width="55"></el-table-column>
         <el-table-column prop="id" ></el-table-column>
         <el-table-column prop="college" label="学校" width="120"></el-table-column>
         <el-table-column prop="department" label="院系" width="120"></el-table-column>
         <el-table-column prop="classes" label="班级" width="120"></el-table-column>
         <el-table-column prop="name" label="姓名" width="120"></el-table-column>
         <el-table-column prop="age" label="年龄" width="120"></el-table-column>
         <el-table-column prop="sex" label="性别" width="120"></el-table-column>
         <el-table-column
      fixed="right"
      label="操作"
      width="100">
                 <el-button @click="open()" type="text" size="small">删除</el-button>
                 <el-button type="text" size="small">编辑</el-button>
                 </el-table-column>
    </el-table>
     <el-button @click="openBatchDelete()" type="primary">批量删除</el-button>
 <el-button @click="dialogFormVisible = true" type="primary">新增学生信息</el-button>
</el-card>
  <el-dialog title="新增信息" :visible.sync="dialogFormVisible">
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
       created:function(){
        this.loadInfo();
      },
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
             formLabelWidth: '50px',
             tableData:[],
             rows:[]
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
        },
        loadInfo(){
           this.$axios.get('student/selectStudentInfo').then(resp=>{
            this.tableData = resp.data.list
          });
        },
        openBatchDelete(){
          var rows = this.$refs.multipleTable.selection;
          var idArray=[];
          for(var i = 0;i<rows.length;i++){
            idArray[i] = rows[i].id;
          }
          var ids = idArray.join();
          this.$confirm('确定批量删除选中信息吗?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                  })
                  .then(() => {
                    var _this=this;
                    _this.$axios.post("/student/batchDelete",ids)
                    .then(successResponse =>{
                      if(successResponse.data.code==200){
                        this.$message({
                          type: 'success',
                          message: '删除成功!'
                        });
                      }
                    })
                    .catch(failResponse=>{
                      this.$message({
                        type: 'error',
                        message: '删除失败!'
                      });
                    })
                  })
                  .catch(() => {
                    this.$message({
                      type: 'info',
                      message: "取消删除"
                    });
                  })
            },
      }
    }
</script>

<style>
</style>
