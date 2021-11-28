<template>
    <div>
        <ForgotPassBar/>
        <link rel="stylesheet" type="text/css" href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css">
        <b-button class="secondaryButton backButton" href="login-type">⬅ Geri</b-button>
        <b-card tag="article" class="cardStyle" style="position: fixed; top: 50%; left: 50%; margin-top: -215px; margin-left: -200px; width: 400px; height: 430px;">
            <b-card-text style="text-align: center">
                <form>
                <i class="fa fa-lock" style="margin-top: 10%; font-size: 140px; color: rgba(90, 90, 90, 0.55);"></i>
                <h3><b>Şifre Sıfırlama</b></h3><br>
                <div style="text-align: left">
                    <b>Kullanıcı Adı veya Restoran Kodu</b><br>
                </div>
                <input class="form-control" v-model="check" type="input" aria-label="Check" style="width: 355px; box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.05); border-radius: 10px;" required>
                <br><b-button class="alwaysActiveButton" style="float: center; color: #FFFFFF;" @click="checkNickOrCode"><b>Şifremi Sıfırla</b></b-button>
                </form>
            </b-card-text>
            </b-card>
        <BottomBar/>
    </div>
</template>

<script>
    import ForgotPassBar from '../../bars/ForgotPassBar.vue'
    import BottomBar from '../../bars/BottomBar.vue'
    import axios from 'axios';

    export default {
        name: 'ForgotPassword',
        data() {
            return {
                check: null,
            }
        },
        components: {
            ForgotPassBar,
            BottomBar
        },
        methods: {
            checkNickOrCode() {
                axios.get('https://localhost:44356/api/User/' + this.check)
                .then(function (response) {
                    console.log(response.status);
                    if (response.status == 200){
                        //Mail burada gonderilecek. (Paket yüklenmesi gerekiyor.)
                        window.location = "http://localhost:8080/token-sent";
                    }
                    else {
                        window.location = "http://localhost:8080/token-sent";
                    } 
                })
            }
        }
    }
</script>
