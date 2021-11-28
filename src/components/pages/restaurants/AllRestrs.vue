<template>
    <div>
        <MainBar/>
        <b-container>
            <b-row style="height: 60px"></b-row>
            <b-row class="pageTitleStyle pl-3 pb-2 pt-3">
                <span><b>Tüm Restoranlar</b></span>
            </b-row>
            <b-row>
                <table class="table">
                    <tbody>
                        <tr v-for="(restr, index) in restrListDatas" :key="index">
                            <td v-if="restr.logoURL == null"><b-img style="float: left" width="43" blank v-bind="restrLogo"></b-img></td>
                            <td v-else><b-img style="float: left" width="43" :src="restr.logoURL" v-bind="restrLogo"></b-img></td>
                            <td class="price" style="text-align: center; float: center">{{restr.name}}</td>
                            <td><b-button size="sm" class="primaryButtonTwo" style="float: right" href="#"><b>Restorana Git</b></b-button></td>
                        </tr>
                    </tbody>
                </table>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import MainBar from '../../bars/MainBar.vue'

export default {
    name: 'AllRestrs',
    components: {
        MainBar,
    },
    data() {
        return {
            restrLogo: {
                style: 'border: 2px solid var(--ydx-lgray); object-fit: cover',
                rounded: 'circle',
                blankColor: '#E5E5E5',
                width: 43,
                height: 43,
                class: 'mr-2'
            },
            restrListDatas: [
                {name: "Saray Muhallebicisi", address: 'Mahir İz Cd. 34662 Altunizad...', logoURL: 'https://media-exp1.licdn.com/dms/image/C560BAQFy5XKykorOTg/company-logo_200_200/0/1563981265523?e=2159024400&v=beta&t=HiNsRjhF6ba6u1QhnHp0QnlKnTq0ObrZugR4RpeIRa0'},
                {name: "Simit Sarayı", address: 'Mahir İz Cd. 34662 Altunizad...', logoURL: "https://seeklogo.com/images/S/simit-sarayi-logo-6012EC4362-seeklogo.com.png"},
                {name: "Kahvaltıcım", address: 'Mahir İz Cd. 34662 Altunizad...', logoURL: "http://kahvalticim.com.tr/images/logo.png"},
                {name: 'Subway Capitol', address: 'Mahir İz Cd. 34662 Altunizad...', logoURL: null},
                {name: "Kahve Diyarı", address: 'Mahir İz Cd. 34662 Altunizad...', logoURL: "https://pbs.twimg.com/profile_images/1385745710809763849/onQ1D2tY.jpg"},
                {name: "FitChef", address: 'Mahir İz Cd. 34662 Altunizad...', logoURL: "https://www.fitchef.com.tr/images/logo-png-300.png"},
                {name: "City Salad", address: 'Mahir İz Cd. 34662 Altunizad...', logoURL: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/102010/logo_citysalads1.png?itok=LyplJBVO"},
                {name: "Burger King Altunizade", address: 'Mahir İz Cd. 34662 Altunizad...', logoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Burger_King_2020.svg/1200px-Burger_King_2020.svg.png'},
                {name: "Domino's Pizza", address: 'Mahir İz Cd. 34662 Altunizad...', logoURL: "https://i.pinimg.com/originals/04/83/d1/0483d14533e9d19e635923cdc21ee439.jpg"},
                {name: "Mc Donald's", address: 'Mahir İz Cd. 34662 Altunizad...', logoURL: "https://markantalya.com/wp-content/uploads/2019/12/MC.jpg"},
                {name: "Dürümcü Amca", address: 'Mahir İz Cd. 34662 Altunizad...', logoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXqy6XEqE_OY39U74I78xJtgXYms7X0w8yUg&usqp=CAU"},
            ]
        }
    }
}
</script>