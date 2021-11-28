<template>
    <div>
        <b-card no-body class="cardStyle">
            <b-card-body class="p-3" style="min-height: 300px">
                <b-card-text><b>Bekleyen Değerlendirmeler</b></b-card-text>
                <ReviewListItem v-for="i in range" :key="i" :aReview="reviewListDatas[i]"/>
            </b-card-body>
            <b-card-footer>
                <a href="reviews" class="footerStyle"><b>Tüm Değerlendirmeler</b></a>
            </b-card-footer>
        </b-card>
    </div>
</template>

<script>
import ReviewListItem from './ReviewListItem.vue'
export default {
    name: 'Review',
    components: {
        ReviewListItem,
    },
    data() {
        return {
            range: [0, 1, 2, 3],
            reviewListDatas: [
                {name: "Burger King Altunizade", address: 'Mahir İz Cd. 34662 Altunizad...', logoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Burger_King_2020.svg/1200px-Burger_King_2020.svg.png'},
            ]
        }
    }
}
</script>