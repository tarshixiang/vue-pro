<template>
  <div>
      <span>状态</span><span v-text="status"></span>
    <h1 :model="obj">{{msg}}</h1>
    <label >
        商品名
        <input placeholder="name"  v-model="obj.name" >
    </label>
     <label >
        商品价格
        <input placeholder="price"  v-model="obj.price" >
    </label>
    <label >
        商品数量
        <input placeholder="number"  v-model="obj.number" >
    </label>
    <button @click='addShop'>add shop</button>
    <Shop ></Shop>    
    <Cart></Cart>    
  </div>
</template>

<script>
import store from './../vuex/shopcart/index' ;
import Shop from './Shop';
import Cart from './Cart';
import axios from 'axios' ;
import {mapGetters,mapActions} from 'vuex'

export default {
    data(){
        return {
            msg:'购物车',
            obj:{}
        }
    },
    methods:{
        ...mapActions(['addShop'])
    },
    computed:{
        ...mapGetters(['status']),
    },
    components:{
        Shop,Cart
    },
    filters:{
        capitalize: function (value) {
                if (!value) return ''
                value = value.toString()
                return value.charAt(0).toUpperCase() + value.slice(1)
            }
    },
    store
}
</script>

<style>
  
</style>
