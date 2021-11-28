<template>
    <div class="page">
        <WelcomeBar/>
        <b-button class="secondaryButton backButton" href="/">⬅ Geri</b-button>
        <b-container>
            <b-row style="height: 60px"></b-row>
            <b-row class="pageTitleStyle pl-3 pb-2 pt-3">
                <span><b>Destek | Sıkça Sorulan Sorular</b></span>
            </b-row>
            <b-row style="width: 100%">

                <b-card no-body style="width: 100%" class="mt-3">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-button block v-b-toggle.accordion-0 style="background-color: var(--ydx-red)">{{faq[0].title}}</b-button>
                    </b-card-header>
                    <b-collapse id="accordion-0" visible accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                            <b-card-text>{{faq[0].text}}</b-card-text>
                        </b-card-body>
                    </b-collapse>
                </b-card>

                <b-card no-body style="width: 100%" class="mt-3">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-button block v-b-toggle.accordion-1 style="background-color: var(--ydx-red)">{{faq[1].title}}</b-button>
                    </b-card-header>
                    <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                            <b-card-text>{{faq[1].text}}</b-card-text>
                        </b-card-body>
                    </b-collapse>
                </b-card>

                <b-card no-body style="width: 100%" class="mt-3">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-button block v-b-toggle.accordion-2 style="background-color: var(--ydx-red)">{{faq[2].title}}</b-button>
                    </b-card-header>
                    <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                            <b-card-text>{{faq[2].text}}</b-card-text>
                        </b-card-body>
                    </b-collapse>
                </b-card>

                <!--
                <b-card style="width: 100%;">
                    <b-skeleton animation="wave" width="85%"></b-skeleton>
                    <b-skeleton animation="wave" width="55%"></b-skeleton>
                    <b-skeleton animation="wave" width="70%"></b-skeleton>
                </b-card>
                -->
            </b-row>
        </b-container>
    
        <BottomBar/>
    </div>
</template>

<script>
import WelcomeBar from '../../bars/WelcomeBar.vue';
import BottomBar from '../../bars/BottomBar.vue';

export default {
    name: 'Support',
    components: {
        WelcomeBar,
        BottomBar
    },
    data() {
        return {
            faq: [
                {
                    title: "YemekDx Nedir?",
                    text: "YemekDx, çalışma süreniz boyunca öğünlerinizi planlayabileceğiniz bir öğün planlama uygulamasıdır."
                },
                {
                    title: "YemekDx'e Nasıl Üye Olunur?",
                    text: "Üye olmak için çalıştığınız şirketin, YemekDx ile anlaşmalı olması gerekmektedir. Anlaşmalı olan şirketlerdek çalışanlar, şirket mailleri ile kayıt olup uygulamamızı kullanabilirler."
                },
                {
                    title: "Öğünlerimi Nasıl Planlarım?",
                    text: "Önceden söylemek istediğin yemeği sepetine eklemen ve tarih girerek siparişi onaylaman yeterli, yemeğin zamanında kapında olacak."
                },
            ]
        }
    }
}
</script>