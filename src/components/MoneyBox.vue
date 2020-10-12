<template>
    
    <div class="table-container">
        <table class="table is-narrow is-fullwidth">
            <!-- Your table content -->
            <thead>
                <tr>
                    <th><abbr title="Moneda">Moneda</abbr></th>
                    <th>Cantidad</th>
                    <th><abbr title="Total">Total</abbr></th>                
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>
                        <img src="../assets/coin50.jpg" alt width="50" height="50" /><button class="button is-info is-light" @click="moneyOneAdd">Ahorrar</button>
                    </th>
                    <td>
                        {{moneyOne}}
                    </td>
                    <td>
                       <strong> {{resultMoneyOne}} Pesos </strong> 
                    </td>
                </tr>
                <tr>
                    <th>
                        <img src="../assets/coin100.jpg" alt width="50" height="50" /><button class="button is-info is-light" @click="moneyTwoAdd">Ahorrar</button>
                    </th>
                    <td>
                        {{moneyTwo}}
                    </td>
                    <td>
                        <strong>{{resultMoneyTwo}} Pesos</strong> 
                    </td>
                </tr>
                <tr>
                    <th>
                        <img src="../assets/coin200.jpg" alt width="50" height="50" /><button class="button is-info is-light" @click="moneyThreeAdd">Ahorrar</button>
                    </th>
                    <td>
                        {{moneyThree}}
                    </td>
                    <td>
                        <strong>{{resultMoneyThree}} Pesos</strong> 
                    </td>
                </tr>
                <tr>
                    <th>
                        <img src="../assets/coin500.jpg" alt width="50" height="50" /><button class="button is-info is-light" @click="moneyFourAdd">Ahorrar</button>
                    </th>
                    <td>
                         {{moneyFour}}
                    </td>
                    <td>
                        <strong> {{resultMoneyFour}} Pesos</strong> 
                    </td>
                </tr>
                <tr>
                    <th>
                        <img src="../assets/coin1000.jpg" alt width="50" height="50" /><button class="button is-info is-light" @click="moneyFiveAdd">Ahorrar</button>
                    </th>
                    <td>
                        {{moneyFive}}
                    </td>
                    <td>
                        <strong>{{resultMoneyFive}} Pesos</strong> 
                    </td>
                </tr>
                <tr>
                    <th>
                        Total 
                    </th>
                    <td>
                        {{totalQuantity}}
                    </td>
                    <td>
                        <strong>{{totalQuantityMoney}} Pesos</strong>                        
                    </td>
                </tr>
            </tbody>
        </table>        
        <button id="buttonChange" @click="$emit('change-value', false)" style="display:none"></button>
    </div>
    
    
   
</template>

<script>
    export default {
        name: 'MoneyBox',
        props: ['cleanMoneyBox'],
        data () {
            return {
                moneyOne: 0,
                moneyTwo: 0,
                moneyThree: 0,
                moneyFour: 0,
                moneyFive: 0,
                resultMoneyOne: 0,
                resultMoneyTwo: 0,
                resultMoneyThree: 0,
                resultMoneyFour: 0,
                resultMoneyFive: 0,
                totalMoney: 0,
                valueToSend: 0,
                isClean: false
            }
        },
        computed: {
            totalQuantity () {
                return  this.moneyOne + this.moneyTwo + this.moneyThree + this.moneyFour + this.moneyFive
            },
            totalQuantityMoney () {
                return this.resultMoneyOne + this.resultMoneyTwo + this.resultMoneyThree + this.resultMoneyFour + this.resultMoneyFive
            }
        },
        mounted(){
            
        },
        watch:{
            'cleanMoneyBox'(){                
                if (this.cleanMoneyBox) {
                    this.cleanData();
                }
            }

        },
        methods: {
            moneyOneAdd () {
                this.moneyOne += 1
                this.resultMoneyOne = this.moneyOne * 50
                this.sendTotalValue()
            },
            moneyTwoAdd () {
                this.moneyTwo += 1
                this.resultMoneyTwo = this.moneyTwo * 100
                this.sendTotalValue()
            },
            moneyThreeAdd () {
                this.moneyThree += 1
                this.resultMoneyThree = this.moneyThree * 200
                this.sendTotalValue()
            },
            moneyFourAdd () {
                this.moneyFour += 1
                this.resultMoneyFour = this.moneyFour * 500
                this.sendTotalValue()
            },
            moneyFiveAdd () {
                this.moneyFive += 1
                this.resultMoneyFive = this.moneyFive * 1000
                this.sendTotalValue()
            },
            sendTotalValue(){
                this.valueToSend = this.totalQuantityMoney
                this.$store.commit('setSendValue', this.valueToSend)
            },
            cleanData(){
                this.moneyOne = 0
                this.moneyTwo = 0
                this.moneyThree = 0
                this.moneyFour = 0
                this.moneyFive = 0
                this.resultMoneyOne = 0
                this.resultMoneyTwo = 0
                this.resultMoneyThree = 0
                this.resultMoneyFour = 0
                this.resultMoneyFive = 0
                this.sendTotalValue();                
                document.getElementById('buttonChange').click()                
            }
        }
        

    }
</script>

<style scoped>

</style>