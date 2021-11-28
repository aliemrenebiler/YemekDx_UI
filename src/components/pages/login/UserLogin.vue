<template>
  <div class="page">
    <UserLoginBar/>
    <b-button class="secondaryButton backButton" href="login-type">⬅ Geri</b-button>
    <b-card tag="article" class="cardStyle" style="position: fixed; top: 50%; left: 50%; margin-top: -140px; margin-left: -200px; width: 400px; height: 280px;">
      <b-card-text style="text-align: left">
        <form>
          <b>Kullanıcı Adı</b><br>
          <input class="inputStyle form-control" v-model="checkingUser.nickname" type="input" aria-label="Nick" required><br>
          <b>Şifre</b><br>
          <input class="inputStyle form-control" v-model="checkingUser.password" type="password" aria-label="Pass" required>
          <div style="text-align: right">
            <br>
            <a href="forgot-password" style="color: var(--ydx-red)"><b>Şifrenizi mi unuttunuz?</b></a>
            <br>
          </div>
          <b-button class="alwaysActiveButton" style="float: center" @click="checkUser(checkingUser.password)"><b>Giriş Yap</b></b-button>
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
import UserLoginBar from '../../bars/UserLoginBar.vue';
import BottomBar from '../../bars/BottomBar.vue';
import axios from 'axios';

export default {
  name: 'UserLogin',
  components: {
    UserLoginBar,
    BottomBar
  },
  data() {
      return {
        checkingUser: {
            nickname: null,
            password: null
        },
      }
  },
  methods: {
    checkUser(passtest) {
      axios.get('https://localhost:44356/api/User/' + this.checkingUser.nickname)
      .then(function (response) {
        console.log(response.status);
        console.log(response.data);
        console.log(response.data.password);
        if (response.status == 200 && response.data.password == passtest){
          window.location = "http://localhost:8080/home";
        }
        else {
          window.location = "http://localhost:8080/login-fail";
        } 
      })
    }
  }
}
</script>