<template>
    <div>
        <b-card no-body class="cardStyle">
            <b-card-header class="p-0">
                <b-img class="topImgStyle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCWfnrUBa_TQ_1RT9AQH85mk1blu3kD5J5og&usqp=CAU"></b-img>
                <b-card-text class="p-2"><b>Kahvaltı</b></b-card-text>
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
    name: 'Breakfast',
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
                {name: "Saray Muhallebicisi", address: 'Mahir İz Cd. 34662 Altunizad...', logoURL: 'https://media-exp1.licdn.com/dms/image/C560BAQFy5XKykorOTg/company-logo_200_200/0/1563981265523?e=2159024400&v=beta&t=HiNsRjhF6ba6u1QhnHp0QnlKnTq0ObrZugR4RpeIRa0'},
                {name: "Simit Sarayı", address: 'Mahir İz Cd. 34662 Altunizad...', logoURL: "https://seeklogo.com/images/S/simit-sarayi-logo-6012EC4362-seeklogo.com.png"},
                {name: "Kahvaltıcım", address: 'Mahir İz Cd. 34662 Altunizad...', logoURL: "http://kahvalticim.com.tr/images/logo.png"},
                {name: "Kahve Diyarı", address: 'Mahir İz Cd. 34662 Altunizad...', logoURL: "https://pbs.twimg.com/profile_images/1385745710809763849/onQ1D2tY.jpg"},
            ]
        }
    },
}
</script>