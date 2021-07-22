import Vue from 'vue'
const store = Vue.observable({
    selected: '',
    accordion: false
})
const mutations = {
    setSelected(selected){
        store.selected = selected
    },
    setAccordion(accordion){
        store.accordion = accordion
    }
}
export {
    store,
    mutations
}
