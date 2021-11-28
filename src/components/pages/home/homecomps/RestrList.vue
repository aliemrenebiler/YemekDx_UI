<template>
    <div>
        <b-card no-body class="cardStyle">
            <b-card-body class="p-3" style="min-height: 300px">
                <b-card-text><b>Restoran Listesi</b></b-card-text>
                <RestrListItem v-for="i in range" :key="i" :aRestr="restrListDatas[i]"/>
            </b-card-body>
            <b-card-footer>
                <a href="restaurants" class="footerStyle"><b>Tüm Restoranlar</b></a>
            </b-card-footer>
        </b-card>
    </div>
</template>

<script>
import RestrListItem from './RestrListItem.vue'
export default {
    name: 'RestrList',
    components: {
        RestrListItem,
    },
    data() {
        return {
            range: [0, 1, 2, 3],
            restrListDatas: [
                {name: "City Salad", address: 'Mahir İz Cd. 34662 Altunizad...', logoURL: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/102010/logo_citysalads1.png?itok=LyplJBVO"},
                {name: 'Subway Capitol', address: 'Mahir İz Cd. 34662 Altunizad...', logoURL: null},
                {name: "Burger King Altunizade", address: 'Mahir İz Cd. 34662 Altunizad...', logoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Burger_King_2020.svg/1200px-Burger_King_2020.svg.png'},
                {name: "Domino's Pizza", address: 'Mahir İz Cd. 34662 Altunizad...', logoURL: "https://i.pinimg.com/originals/04/83/d1/0483d14533e9d19e635923cdc21ee439.jpg"},
                {name: "Mc Donald's", address: 'Mahir İz Cd. 34662 Altunizad...', logoURL: "https://markantalya.com/wp-content/uploads/2019/12/MC.jpg"},
                {name: "Dürümcü Amca", address: 'Mahir İz Cd. 34662 Altunizad...', logoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXqy6XEqE_OY39U74I78xJtgXYms7X0w8yUg&usqp=CAU"},
            ]
        }
    },
}
</script>