import Vue from 'vue';
import Vuex from 'vuex';
import * as mutations from './mutations';
import * as getters from './getters';
import * as actions from './actions';
Vue.use(Vuex);

const state = {
    todos: []
}
export default new Vuex.Store({
    state, mutations, actions, getters
});