<template>
  <div class="page">
    <LoginBar/>
    <b-button class="secondaryButton backButton" href="/">⬅ Geri</b-button>
    <b-card tag="article" class="cardStyle loginTypeStyle">
      <b-card-text style="text-align: left"><b>Lütfen Giriş Türünü Seç:</b><br><br>
        <div class="d-flex justify-content-center">
          <b-button class="secondaryButton" href="user-login" style="width: 47%;">Kullanıcı</b-button>
          <pre>   </pre>
          <b-button disabled class="secondaryButton" href="restaurant-login" style="width: 47%;">Restoran</b-button>
        </div>
      </b-card-text>
    </b-card>
    <BottomBar/>
  </div>
</template>

<style>
.loginTypeStyle {
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
import LoginBar from "../../bars/LoginBar.vue"
import BottomBar from "../../bars/BottomBar.vue"

export default {
  name: 'LoginType',
  components: {
    LoginBar,
    BottomBar
  }
}
</script>