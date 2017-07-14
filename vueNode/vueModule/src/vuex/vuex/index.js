import Vue from 'vue' ;
import Vuex from 'vuex' ;
import * as  mutations from './mutations';
import * as getters from './getters';
import * as actions from './actions';

Vue.use(Vuex);

const state = {
    count : 0,
    history:[]
}
const store = new Vuex.Store({
    mutations,getters,actions,state
})
export default store ;