<template>
  <div class="page">
    <RestrLoginBar/>
    <b-button class="secondaryButton backButton" href="login-type">⬅ Geri</b-button>
    <b-card tag="article" class="cardStyle" style="position: fixed; top: 50%; left: 50%; margin-top: -140px; margin-left: -200px; width: 400px; height: 280px;">
      <b-card-text style="text-align: left">
        <form>
          <b>Restoran Kodu</b><br>
          <input class="inputStyle form-control" v-model="checkingRestr.id" type="search" aria-label="Search" required><br>
          <b>Şifre</b><br>
          <input class="inputStyle form-control" v-model="checkingRestr.password" type="password" aria-label="Search" required>
          <div style="text-align: right">
            <br>
            <b>Şifrenizi mi unuttunuz?</b>
            <br>
          </div>
          <button type="submit" class="alwaysActiveButton" style="float: center"><b>Giriş Yap</b></button>
        </form>
      </b-card-text>
    </b-card>
    <BottomBar/>
  </div>
</template>

<style>
.inputStyle {
  width: 355px;
  box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
}
</style>

<script>
import RestrLoginBar from '../../bars/RestrLoginBar.vue';
import BottomBar from '../../bars/BottomBar.vue';

export default {
  name: 'RestrLogin',
  components: {
    RestrLoginBar,
    BottomBar
  },
  data() {
    return {
      checkingRestr: {
        id: null,
        password: null
      }
    }
  }
}
</script>