export const actionAdd = ({commit},todo) => {
    commit('addList',{todo})
}
export const actionDel = ({commit},todo) => {
    commit('delList',{todo})
}
