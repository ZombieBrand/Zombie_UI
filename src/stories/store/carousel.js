import Vue from 'vue'
const store = Vue.observable({selected:'',reverse:false})
const mutations = {
    setSelected(selected){
        store.selected = selected
    },
    setReverse(value){
        store.reverse = value
    }
}
export {
    store,
    mutations
}
