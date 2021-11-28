<template>
    <div>
        <WelcomeBar/><br><br><br>
        <link rel="stylesheet" type="text/css" href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css">
        <i class="fa fa-info iconStyle"></i>
        <h3><b>Sıfırlama kodu gönderildi.</b></h3>
        <p>Eğer girdiğiniz kullanıcı adı veya restoran kodu doğruysa e-posta<br>adresinize bir sıfırlama kodu gönderdik.</p>
        <b-button class="primaryButtonTwo" href="/" style="width: 160px;">Ana Sayfa</b-button>
        <br><br><br>
        <BottomBar/>
    </div>
</template>

<style>
.iconStyle {
    margin-top: 10%;
    font-size: 140px;
    color: var(--ydx-lred);
}
</style>

<script>
    import WelcomeBar from '../../bars/WelcomeBar.vue'
    import BottomBar from '../../bars/BottomBar.vue'

    export default {
        name: 'TokenSent',
        components: {
            WelcomeBar,
            BottomBar
        }
    }
</script>
