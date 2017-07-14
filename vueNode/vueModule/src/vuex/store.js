import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
	count : 0
};

const mutations = {
	add(state){
		state.count++ ;
	},
	reduce(state) {
		state.count--;
	}
}
const getters = {
	count(state){
		state.count+=100;
	}
}
const actions ={
    addAction(context){
        context.commit('add',1000)
        setTimeout(()=>context.commit('reduce'),3000) 
		console.log('我比reduce函数先执行');
    },
    reduceAction({commit}) {
		commit('reduce');
	}
}
export default new Vuex.Store({
	state,
	mutations,
	getters,
	actions
})