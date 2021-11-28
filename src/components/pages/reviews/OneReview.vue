<template>
  <div class="home">
    <link rel="stylesheet" type="text/css" href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css">
    <MainBar />
    <b-container>
      <b-row style="height: 60px"></b-row>
      <b-row class="mt-5" align-h="center" align-v="center">
        <b-card no-body tag="article" class="cardStyle">
          <b-card-text class="mt-4"><b>Restoranı Değerlendir</b></b-card-text>
          <b-card-body>
            <form class="form-inline">
              <span>Yorum Yap</span>
              <input class="inputStyle form-control mx-3" style="width: 500px" type="text"/>
              <star-rating  v-bind:increment="1"
                v-bind:max-rating="5"
                inactive-color="#838585"
                active-color="#020B8A"
                v-bind:star-size="28"/>
            </form>
          </b-card-body>
          <b-card-footer class="mt-2">
          <a class="footerStyle" href="reviews"><b>Değerlendirmeyi Onayla</b></a>
        </b-card-footer>
        </b-card>
      </b-row>
    </b-container>
  </div>
</template>


<style>
.footerStyle {
  color: var(--ydx-lred);
  font-size: 15px;
}
.inputStyle {
  border-radius: 5px;
  border: 2px solid var(--ydx-lgray);
}
</style>

<script>
// Bar
import MainBar from "../../bars/MainBar.vue";

// Components
import StarRating from 'vue-star-rating'
export default {
  name: "OneVote",
  components: {
    MainBar,
    StarRating,
  },
  data() {
    return {
      VoteListDatas: [
        {
          name: "Burger King Altunizade",
          address: "Mahir İz Cd. 34662 Altunizad...aaaaaaa",
          logoURL: "https://cdn.logo.com/hotlink-ok/logo-social.png",
        },
      ],
    };
  },
};
</script>


