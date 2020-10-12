<template>
    
    <div class="columns is-gapless is-multiline is-mobile">
        <div class="column">
            <ul>
                <li>
                    <strong>{{wish.objective}}</strong>
                </li>
            </ul>            
        </div>
        <div class="column ">
            {{wish.value}}
        </div>
        <div class="column ">
            {{ valueToSend >= wish.value ? 'Logrado' : 'Ahorrar más' }}
        </div>
    </div>
    
</template>

<script>
import {mapState} from 'vuex'

export default {
    name: 'WishItem',
    props: ['wish'],
    computed:{
        ...mapState(['valueToSend'])

    }
    
}
</script>

<style scoped>
     .todo{
        border-bottom: solid 1px #ccc;
        padding: 10px;
    }

    .todo:not(.completed):hover{
        background-color: #eee;
    }

    .completed{
        color: #ccc;
        text-decoration: line-through;
    }
    .completed .todo-body{
        text-decoration: line-through;
    }

    .todo-body, .todo-actions{
        display: inline-block;
        vertical-align: top;
    }

    .todo-body{
        width: 85%;
    }
    .todo-actions{
        padding: 0
         
    }
</style>