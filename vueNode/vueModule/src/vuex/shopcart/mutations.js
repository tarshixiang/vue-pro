export const mutations = {
    add(state){
        axios.post('http://localhost:3000/api/shopcar',state.obj).then((result)=>{
            console.log(result)
            alert('success')
        }).catch((err)=>{
            console.log(err)
            alert('err')
        })
    }
}