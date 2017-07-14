export const addList = (state , {todo}) => {
    const obj = {
        text : todo,
        flag : false
    }
    state.todos.push(obj)
}
export const delList = (state,{todo}) =>{
    state.todos.splice(state.todos.indexOf(todo),1)
}
