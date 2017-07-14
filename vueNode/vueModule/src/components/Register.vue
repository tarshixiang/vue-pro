<template>
  <div class="register">
    <h1>注册页面</h1>
    <input type="text" placeholder="账号密码" v-model='username'>
    <input type="password" placeholder="密码" v-model='password'>
    <button v-on:click="register">注册</button>
    <router-link to="/login">跳转到login </router-link> 
    <router-link to="/nn">vuex </router-link> 
  </div>
</template>

<script>
import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar','appid':'12312313'}
});
export default {
  name: 'register',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      username:'',
      password:''
    }
  },
  methods:{
    register:function(){
     instance.get('/cherry').then((res) => {
          console.log(res)
      }, (res) => {
          console.log(res);
      })
    }
  }
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
