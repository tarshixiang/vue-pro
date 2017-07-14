export const add = state => {
    state.count++;
    state.history.push('add')
}
export const reduce = state => {
    state.count--;
    state.history.push('reduce')
}

