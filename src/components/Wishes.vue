<template>
     
        <div class="container">
            <div class="columns is-gapless is-multiline is-mobile">
                <div class="column"><strong>Objetivo</strong></div>
                <div class="column"><strong>Valor</strong></div>
                <div class="column"><strong>Estado</strong></div>                                
            </div>
            <div v-bind:key="item.id" v-for="item in wishList">
                <WishItem v-bind:wish="item"  />                            
            </div>    
        </div>

</template>

<script>
import WishItem from './WishItem'

    export default {
        name:'Wishes',
        props: ['wishList'],
        components: {WishItem}        
    }
    
</script>

<style scoped>

</style>