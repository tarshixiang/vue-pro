import Vue from 'vue';
import Vuex from 'vuex';
import  cart from './module/cart';
import  products from './module/products';
import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';
Vue.use(Vuex);

const state = {
    status : 0,
    length:0
}

export default new Vuex.Store({
    actions,
    mutations,
    getters,
    state,
    modules: {
        cart,
        products
    }
})