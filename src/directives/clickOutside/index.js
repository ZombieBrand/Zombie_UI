export default {
    bind:function(el,binding){
        document.addEventListener('click',(e)=>{
            let {target} = e
            if(target===el || el.contains(target)){
                return
            }
            binding.value()
        })
    }
}
