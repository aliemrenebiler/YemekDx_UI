<template>
    <div>
        <link rel="stylesheet" type="text/css" href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css">
        <MainBar/>
        <b-container>
            <b-row style="height: 60px"></b-row>
            <b-row class="pageTitleStyle pl-3 pb-2 pt-3">
                <span><b>Sepet</b></span>
            </b-row>
            <div class="d-flex bd-highlight align-items-center" style="height: 70px; background-color: var(--ydx-lgray);">
                <div class="flex-grow-1 bd-highlight d-flex align-items-center" style="margin-left:6.6%">
                    <b-container class="my-2">
                        <b-row align-v="center">
                            <b-col md="left">
                                <b-img align="left" v-bind:src="restrData.logoURL" v-bind="restrLogo" rounded="circle"></b-img>
                            </b-col>
                            <b-col md="left" align="left" style="font-size: 15px">
                                <b>{{restrData.name}}</b><br>
                                {{restrData.address}}
                            </b-col>
                        </b-row>
                    </b-container>
                </div>
                <div class="p-2 bd-highlight" style="margin-right: 34%;">Miktar</div>
                <div class="p-2 bd-highlight" style="margin-right: 2%;">Fiyat</div>
            </div>
            
            <table class="table">
                <tbody>
                    <tr>
                        <td><img :src="foodList[0].photoURL" class="img-cart" width="47" height="47"></td>
                        <td class="price">{{foodList[0].name}}</td>
                        <td>
                            <form class="form-inline" style="margin-left: 40%">
                                <i class="fa fa-minus mr-3" style="color: #838585;" @click="foodList[0].quantity--"></i>                                                
                                <input class="form-control" type="text" :value="foodList[0].quantity" style="text-align: center; width: 50px; box-shadow: 0px 0px 0px 1.5px rgba(0, 0, 0, 0.25); border-radius: 8px;">
                                <i class="fa fa-plus ml-3" style="color: #838585" @click="foodList[0].quantity++"></i>
                                <button rel="tooltip" class="secondaryButton ml-4" style="height: 30px; width: 30px;"><i class="fa fa-save"></i></button>
                                <a href="#" class="primaryButtonTwo ml-2" style="height: 30px; width: 30px;"><i class="fa fa-trash-o"></i></a>
                            </form>
                        </td>
                        <td style="text-align:right">{{mult(foodList[0])}} ₺</td>
                    </tr>
                    <tr>
                        <td><img :src="foodList[1].photoURL" class="img-cart" width="47" height="47"></td>
                        <td class="price">{{foodList[1].name}}</td>
                        <td>
                            <form class="form-inline" style="margin-left: 40%">
                                <i class="fa fa-minus mr-3" style="color: #838585;" @click="foodList[1].quantity--"></i>                                                
                                    <input class="form-control" type="text" :value="foodList[1].quantity" style="text-align: center; width: 50px; box-shadow: 0px 0px 0px 1.5px rgba(0, 0, 0, 0.25); border-radius: 8px;">
                                    <i class="fa fa-plus ml-3" style="color: #838585" @click="foodList[1].quantity++"></i>
                                    <button rel="tooltip" class="secondaryButton ml-4" style="height: 30px; width: 30px;"><i class="fa fa-save"></i></button>
                                    <a href="#" class="primaryButtonTwo ml-2" style="height: 30px; width: 30px;"><i class="fa fa-trash-o"></i></a>
                            </form>
                        </td>
                        <td style="text-align:right">{{mult(foodList[1])}} ₺</td>
                    </tr>
                    <tr>
                        <td><img :src="foodList[2].photoURL" class="img-cart" width="47" height="47"></td>
                        <td class="price">{{foodList[2].name}}</td>
                        <td>
                            <form class="form-inline" style="margin-left: 40%">
                                <i class="fa fa-minus mr-3" style="color: #838585;" @click="foodList[2].quantity--"></i>                                                
                                <input class="form-control" type="text" :value="foodList[2].quantity" style="text-align: center; width: 50px; box-shadow: 0px 0px 0px 1.5px rgba(0, 0, 0, 0.25); border-radius: 8px;">
                                <i class="fa fa-plus ml-3" style="color: #838585" @click="foodList[2].quantity++"></i>
                                <button rel="tooltip" class="secondaryButton ml-4" style="height: 30px; width: 30px;"><i class="fa fa-save"></i></button>
                                <a href="#" class="primaryButtonTwo ml-2" style="height: 30px; width: 30px;"><i class="fa fa-trash-o"></i></a>
                            </form>
                        </td>
                        <td style="text-align:right">{{mult(foodList[2])}} ₺</td>
                    </tr>
                    <tr>
                        <td colspan="6"><div class="p-2 bd-highlight" style="text-align:right"><b>{{add(foodList[0], foodList[1], foodList[2])}} ₺</b></div></td>
                    </tr>
                    <tr><td colspan="12">&nbsp;</td></tr>
                    <tr><td colspan="12">&nbsp;</td></tr>
                </tbody>
            </table>
        </b-container>
    </div>
</template>

<script>
import MainBar from '../../bars/MainBar.vue'

export default {
    name: 'Cart',
    components: {
        MainBar,
    },
    methods: {
        mult: function(food){
            return food.unitPrice * food.quantity
        },
        add: function(one, two, three){
            return (this.mult(one) + this.mult(two) + this.mult(three))
        }
    },
    data() {
        return {
            restrLogo: {
                style: 'border: 2px solid #E5E5E5; object-fit: cover',
                blankColor: '#E5E5E5',
                width: 43,
                height: 43,
                class: 'mr-2'},
            restrData: {
                logoURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Burger_King_2020.svg/1024px-Burger_King_2020.svg.png",
                name: "Burger King Altunizade",
                address: "Mahir İz Cd. 34662 Altunizade, İstanbul",
                mainProps: {blank: true, blankColor: '#838585', width: 43, class: 'm1'}
            },
            foodList: [
                {photoURL: "https://www.burgerking.com.tr/cmsfiles/products/whopper.png?v=173", 
                name: "Whopper®", 
                quantity: 2, 
                unitPrice: 26.90},
                {photoURL: "https://www.burgerking.com.tr/cmsfiles/products/apple-pie.png?v=173",
                name: "Apple Pie",
                quantity: 4,
                unitPrice: 17.85,},
                {photoURL: "https://www.burgerking.com.tr/cmsfiles/products/coca-cola.png?v=173",
                name: "Coca-Cola",
                quantity: 3,
                unitPrice: 8.25,}
            ]
        }
    }
}
</script>

<style>

</style>
