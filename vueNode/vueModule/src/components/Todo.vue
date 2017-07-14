<template>
    <div>
        <div>{{msg}}</div>
        {{todos}}
        <input type="text" v-model="inputText" >
        <button  @click='actionAdd(inputText),clear()'> {{inputText}}</button> 
        <ul>
            <li v-for="(item , index) in todos">
                <span>{{item}}</span>
                <button @click="actionDel(item)">x</button>
            </li>
        </ul>
  </div>
</template>

<script>
import store from '../vuex/todolist/index';
import {mapState,mapActions,mapMutations,mapGetters} from 'vuex';

export default {
    data(){
        return {
            msg:'todolist',
            inputText:'',
        }
    },
    store,
    methods:{
        ...mapActions(['actionAdd','actionDel']),
        clear(){
            this.inputText = ''
        }
    },
    computed:{
        todos (){
            return this.$store.state.todos
        }
    },
}
</script>

<style>
  
</style>

