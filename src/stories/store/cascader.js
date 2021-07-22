import Vue from 'vue'
const store = Vue.observable({
    remote: false
})
const mutations = {
    setRemote(remote){
        store.remote = remote
    }
}
export {
    store,
    mutations
}
