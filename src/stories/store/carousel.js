import Vue from 'vue'
const store = Vue.observable({selected:''})
const mutations = {
    setSelected(selected){
        store.selected = selected
    }
}
export {
    store,
    mutations
}
