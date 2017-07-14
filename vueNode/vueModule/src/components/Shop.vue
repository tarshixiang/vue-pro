<template>
    <div>
        <h1>{{msg}}--{{products}}</h1>
        <ul v-for="(item,index) in list.list" :key="item._id">
            <li>
                商品id：
                <span v-text="item._id"></span>
                -- 商品名称：
                <span v-text="item.name"></span>
                -- 商品价格
                <span v-text="item.price"></span>
                -- 数量
                <span v-text="item.number"></span> --
                <button @click="del(item._id)">删除该商品</button>
                <button @click="buy(item._id)">购买该商品</button>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters ,mapState} from 'vuex';
import axios from 'axios';
export default {
    data() {
        return {
            msg: 'shop',
            list: {
                list: []
            }
        }
    },
    computed: {
        ...mapGetters({
            products: 'products'
        }),
        items: function () {
            return this.list.list
        },
        ...mapState({
            products : state=>state.products.products 
        })
    },
    mounted() {
        this.getData()
    },
    methods: {
        del: (id) => {
            axios.delete('http://localhost:3000/api/shopcar/' + id).then((data) => {
                console.log(data)
                this.getData();
            }).catch((err) => {
                console.log(err)
            })
        },
        getData() {
            axios.get('http://localhost:3000/api/allshop').then((data) => {
                console.log(data.data)
                const code = data.data.code;
                if (code) {
                    this.list.list = data.data.message
                }
            }).catch((err) => {
                console.log(err)
                alert('err')
            })
        },
    }
}
</script>

<style>

</style>
