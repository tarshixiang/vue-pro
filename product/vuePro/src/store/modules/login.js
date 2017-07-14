import util from '../../assets/js/util';
import axios from 'axios';
const state = {
    user:{}
}

const mutations = {
    loginM(data){
        console.log(1)
        const url  = util.url+'users'
        // axios.post(url,data)
        console.log(url)
    }
}

const actions = {
    login({commit},data){
        commit('loginM',data)
    }
}

export default  {
    state,
    mutations,
    actions
}