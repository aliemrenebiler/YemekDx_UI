<template>
  <div>
    <b-card no-body tag="article" class="cardStyle">
      <b-card-text class="mt-3"><b>Kampanyalar</b></b-card-text>
      <b-card-body class="p-0">
        <b-carousel class="carouselStyle" :interval="intervalValue" fade controls indicators>
          <OffersItem v-for="(item, index) in offerListData" :key="index" :anOffer="item"/>
        </b-carousel>
      </b-card-body>
      <b-card-footer>
          <a href="" class="footerStyle"><b>Tüm Kampanyalar</b></a>
      </b-card-footer>
    </b-card>
  </div>
</template>

<style>
.carouselStyle {
  text-shadow: 0px 0px 5px var(--ydx-black);
  background: var(--ydx-lgray);
}
</style>

<script>
  import OffersItem from './OffersItem.vue'
  export default {
    name: 'Offers',
    components: {
        OffersItem,
    },
    data() {
      return {
        intervalValue: 5000,
        offerListData: [
          {caption: null, text: null, imgURL: 'https://pbs.twimg.com/media/EUwz7-VXQAADPeP.jpg:large'},
          {caption: null, text: null, imgURL: 'https://firsat.me/img/big1024/20709_5be5846e1ce4a_1920x1080.jpg'},
        ]
      }
    },
    methods: {
    }
  }
</script>