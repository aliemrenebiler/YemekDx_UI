<template>
    <div class="welcomeBody">
        <WelcomeBar/>
            <div class="d-flex bd-highlight align-items-center" style="position: absolute; width: 100%; height: 170px; left: 0px; background-color: rgba(245, 245, 245, 0.9)">
                <div class="p-2 flex-grow-1 bd-highlight ml-3"><h1 class="col-sm-12 my-auto text-left" style="color: var(--ydx-red)">Yemek<b>Dx</b></h1></div>
                <div class="p-2 bd-highlight"><b-button class="secondaryButton" href="login-type" style="width: 140px;"><b>Giriş</b></b-button></div>
                <div class="p-2 bd-highlight mr-4"><b-button class="primaryButtonTwo" href="register-type" style="width: 140px;"><b>Kayıt Ol</b></b-button></div>
            </div>
            <div class="welcomeText align-items-right mr-3">
                <p><i>Önceden planla, </i><br><b>tam zamanında gelsin!</b></p>
            </div>
    <BottomBar/>
    </div>
</template>

<style>
@import '../../../assets/style.css';
.welcomeBody {
    background-image: url('http://www.brandlifemag.com/wp-content/uploads/2016/04/finedining_01-1170x670.jpg');
    background-attachment: fixed;
    background-size: cover;
    position: absolute;
    top: 60px;
    right: 0px;
    bottom: 0px;
    left: 0px;
}
.welcomeText {
    font-size: 64px;
    color: #FFFFFF;
    text-align: right;
    position: absolute;
    right: 20px;
    bottom: 30px;
}
</style>

<script>
import WelcomeBar from "../../bars/WelcomeBar.vue";
import BottomBar from "../../bars/BottomBar.vue";

export default {
  name: "Welcome",
  components: {
    WelcomeBar,
    BottomBar,
  }
};
</script>