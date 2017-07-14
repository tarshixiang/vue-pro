<template>
  <div>
      <h2>history---{{history}}</h2>
      <h2>getters---{{count}}</h2>
      <button @click='$store.commit("add")'>add</button>
      <button @click='$store.commit("reduce")'>reduce</button>
      <button @click="actionsAdd">actionsAdd</button>
      <button @click="actionsReduce">actionsReduce</button>
  </div>
       
</template>

<script>
import store from '../vuex/vuex/index'
import {mapGetters,mapMutations,mapActions} from 'vuex' ;
export default {
  data(){
      return {
          msg:'123'
      }
  },
  store,
  computed:{...mapGetters(['count','history'])},
  methods:{...mapActions(['actionsAdd','actionsReduce']),...mapMutations(['add','reduce'])}
}
</script>
