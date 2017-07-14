<template>
  <div class="login">
    <h1>登录</h1>
    <input type="text" placeholder="账号密码">
    <input type="password" placeholder="密码">
    <button @click='login'>登录</button>
    <br>
    
    <router-link to="/register">跳转到register </router-link> 
    <br>
    <router-link to="/all">跳转到all</router-link> 
    <br>
      
    <router-link to="/vuex">跳转到vuex </router-link> 
    <br>
    <router-link to="/todolist">跳转到todolist </router-link> 
    <br>
    <router-link to="/shopcar">跳转到shopcar </router-link> 
     <br>
    <router-link to="/pro">跳转到pro </router-link> 
    <i class="icon iconfont icon-feng"></i>
        
  </div>
  
</template>

<script>
import store from '@/vuex/store'
import axios from 'axios';
export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  methods:{
    login(){
      var a = new Headers();
      console.log(a.get('set-cookie'))
    }
  },
  store
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
