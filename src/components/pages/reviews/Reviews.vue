<template>
    <div>
        <MainBar/>
        <b-container>
            <b-row style="height: 60px"></b-row>
            <b-row class="pageTitleStyle pl-3 pb-2 pt-3">
                <span><b>Değerlendirmeler</b></span>
            </b-row>
            <b-row>
                <table class="table">
                    <tbody>
                        <tr v-for="(restr, index) in restrListDatas" :key="index">
                            <td v-if="restr.logoURL == null"><b-img style="float: left" width="43" blank v-bind="restrLogo"></b-img></td>
                            <td v-else><b-img style="float: left" width="43" :src="restr.logoURL" v-bind="restrLogo"></b-img></td>
                            <td class="price" style="text-align: center; float: center">{{restr.name}}</td>
                            <td><b-button size="sm" class="primaryButtonTwo" style="float: right" href="one-review"><b>Oyla</b></b-button></td>
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
    name: 'Reviews',
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
                {name: "Burger King Altunizade", address: 'Mahir İz Cd. 34662 Altunizad...', logoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Burger_King_2020.svg/1200px-Burger_King_2020.svg.png'},
                {name: "FitChef", address: 'Mahir İz Cd. 34662 Altunizad...', logoURL: "https://www.fitchef.com.tr/images/logo-png-300.png"},
            ]
        }
    }
}
</script>