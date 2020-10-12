<template>  
  <div>
    <div id="header">
      
    </div>

    <div class="columns ">
      <div class="column is-1"></div>
      <div class="column is-5">
          <div>
            <h3> <strong>Alcancía</strong> </h3>
            <MoneyBox v-bind:cleanMoneyBox="cleanMoneyBox" v-on:change-value="changeValueMoneyBox"/>
        </div>
      </div>
      <div class="column is-1"></div>
      <div class="column is-5 ">
          <h3> <strong>Lista de Deseos</strong> </h3>
            <Wishes v-bind:wishList="copyObjectives"/>            
      </div>

    </div>
    <div class="columns is-gapless is-multiline is-mobile">
        <div class="column is-3"></div>
        <div class="column">
            <img src="./assets/pig.png" @click="showInformation" alt width="100" height="100" />
        </div>
        <div class="column is-3"></div>
        <div class="column">
            <img src="./assets/hammer.png" @click="showMessage" alt width="100" height="100" />
        </div>
    </div>

    <footer class="footer">
      <div class="content has-text-centered">
        <p>
         <strong>MoneyBox Project</strong>  
        </p>
      </div>
    </footer>
    
  </div>
</template>

<script>

import MoneyBox from './components/MoneyBox';
import Wishes from './components/Wishes';
import { uuid } from 'vue-uuid';
import {mapState} from 'vuex'


export default {
  name: 'App',
  components: {
    MoneyBox,  Wishes 
  },
  methods:{   
    addObjective(item){
        this.objectives.push(item);
        this.copyObjectives = [...this.objectives];
    },
    showMessage(){      
      if (this.valueToSend == 0) {
        this.cleanMoneyBox = false;        
        this.$swal({
                    title: "Aun no hay dinero ahorrado en la alcancía.",                    
                    icon: "warning"                    
                  });
      }else{
        
        this.$swal({
            title: '¿Quieres romper la alcancía?',            
            showCancelButton: true,
            confirmButtonText: `Si`,            
            cancelButtonText: `No`
          }).then((result) => {
            
            if (result.isConfirmed) {
              this.$swal("Tu dinero ahorrado fue: " + this.valueToSend + " Pesos", '', 'success')
              this.cleanMoneyBox = true;
            } else if (result.isDenied) {
              this.$swal('Aun no', '', 'info')
            }
          })        
      }       
    },
    showInformation(){
        this.$swal("Actulamente tienes ahorrado: " + this.valueToSend + " Pesos", '', 'success')
    },
    changeValueMoneyBox(val){
        this.cleanMoneyBox = val;
    }

  },
  data(){
    return {
      objectives: [
        {
          id: uuid.v4(),
          objective: 'Helado',
          value: 1500
        },
        {
          id: uuid.v4(),
          objective: 'Perro Caliente',
          value: 7000
        },
        {
          id: uuid.v4(),
          objective: 'Hamburguesa',
          value: 10000
        },
        {
          id: uuid.v4(),
          objective: 'Camiseta',
          value: 20000
        },
        {
          id: uuid.v4(),
          objective: 'Teclado',
          value: 25000
        }
      ],
      cleanMoneyBox: false,
      copyObjectives: []
    }
  },
  created(){
    this.copyObjectives = [...this.objectives];
  },
  computed:{
        ...mapState(['valueToSend'])
  },
  mounted(){
    
  }
  
}
</script>

<style>
  *{
    box-sizing: border-box;
  }

  body{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.5em;
    padding: 0;
    margin: 0;
  }

  #main-container{
    border: solid 1px #ccc;
    width: 600px;
    margin: 100px auto;
  }

  #header{
    background: black;
    padding: 20px;
  }

  h2{
    padding: 0 10px;
  }
</style>
