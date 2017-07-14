<template>
  <div class="na">
    <span> {{$store.state.count}}</span>
    <!-- {{count}} -->
    <button @click='$store.commit("add")'>+</button>
    <button @click='add'>mutations(add)</button>
    <button @click='addAction'>action(add)</button>
    <button @click='reduceAction'>action(reduce)</button>
  </div>
</template>

<script>
import axios from 'axios'
import store from '@/vuex/store' ;
import {mapState,mapMutations,mapGetters,mapActions } from 'vuex'
var instance = axios.create({
  baseURL: 'http://localhost:3000/api/na',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

export default {
  name: 'na',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      username:'',
      password:''
    }
  },
  store,
  methods:{ ...mapMutations(['add','reduce']),...mapActions(['addAction','reduceAction'])},
  computed:{ 
  }
}
</script>
