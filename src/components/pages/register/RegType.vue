<template>
  <div class="page">
    <RegBar/>
    <b-button class="backButton secondaryButton" href="/">⬅ Geri</b-button>
    <b-card class="regCardStyle cardStyle">
      <b-card-text style="text-align: left">
        <b>Lütfen Kayıt Türünü Seç:</b><br><br>
        <b-button class="secondaryButton" href="user-register" style="width: 32%; float: left;">Kullanıcı</b-button>
        <b-button disabled class="secondaryButton" href="#" style="width: 32%; margin-left: 10px; ">Kurum</b-button>
        <b-button disabled class="secondaryButton" href="#" style="width: 32%; float: right; ">Restoran</b-button>
      </b-card-text>
    </b-card>
    <BottomBar/>
  </div>
</template>

<style>
.regCardStyle {
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -72.5px;
  margin-left: -264.5px;
  width: 529px;
  height: 145px;
}
</style>

<script>
import RegBar from "../../bars/RegBar.vue"
import BottomBar from "../../bars/BottomBar.vue"

export default {
  name: 'RegisterType',
  components: {
    RegBar,
    BottomBar
  }
}
</script>