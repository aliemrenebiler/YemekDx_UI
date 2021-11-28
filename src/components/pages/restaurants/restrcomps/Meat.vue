<template>
    <div>
        <b-card no-body class="cardStyle">
            <b-card-header class="p-0">
                <b-img class="topImgStyle" src="https://i.insider.com/60ff193df350d50019590561?width=1200&format=jpeg"></b-img>
                <b-card-text class="p-2"><b>Et Yemekleri</b></b-card-text>
            </b-card-header>
            <b-card-body class="pt-1">
                <b-container>
                    <b-row>
                    </b-row>
                    <b-row v-for="i in range" class="mt-3" :key="i" align-v="center">
                        <b-col v-if="restrListDatas[i].logoURL == null" left cols="2" class="p-0 m-0">
                            <b-img left width="43" blank v-bind="restrLogo"></b-img>
                        </b-col>
                        <b-col v-else left cols="2" class="p-0 m-0">
                            <b-img left width="43" :src="restrListDatas[i].logoURL" v-bind="restrLogo"></b-img>
                        </b-col>
                        <b-col left cols="2" class="p-0 m-0"></b-col>
                        <b-col left cols="8" class="p-0 m-0 restrTextStyle" width="stretch">
                            <b>{{restrListDatas[i].name}}</b><br>
                            {{restrListDatas[i].address}}
                        </b-col>
                    </b-row>
                </b-container>
            </b-card-body>
            <b-card-footer>
                <a href="all-restaurants" class="footerStyle"><b>Tümünü Gör</b></a>
            </b-card-footer>
        </b-card>
    </div>
</template>

<style>
.topImgStyle {
    width: 100%;
    height: 100px;
    object-fit: cover;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px
}
</style>

<script>
export default {
    name: 'Meat',
    data() {
        return {
            range: [0, 1, 2, 3],
            restrLogo: {
                style: 'border: 2px solid var(--ydx-lgray); object-fit: cover',
                rounded: 'circle',
                blankColor: '#E5E5E5',
                width: 43,
                height: 43,
                class: 'mr-2'
            },
            restrListDatas: [
                {name: "...", address: '......', logoURL: null},
                {name: "...", address: '......', logoURL: null},
                {name: "...", address: '......', logoURL: null},
                {name: "...", address: '......', logoURL: null},
            ]
        }
    },
}
</script>