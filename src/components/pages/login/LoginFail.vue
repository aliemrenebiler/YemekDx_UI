<template>
    <div>
        <WelcomeBar/><br><br><br>
        <link rel="stylesheet" type="text/css" href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css">
        <i class="fa fa-times" style="margin-top: 10%; font-size: 140px; color: var(--ydx-lred);"></i>
        <h3><b>Hatalı Giriş</b></h3>
        <p>Oturum açılamadı, kullanıcı adı ve şifrenizi tekrar gözden geçirip lütfen<br>bu işlemi tekrar deneyin.</p>
        <b-button class="primaryButtonTwo" href="login-type" style="width: 160px;">Yeniden Dene</b-button>
        <br><br><br>
        <BottomBar/>
    </div>
</template>

<script>
    import WelcomeBar from '../../bars/WelcomeBar.vue'
    import BottomBar from '../../bars/BottomBar.vue'

    export default {
        name: 'LoginFail',
        components: {
            WelcomeBar,
            BottomBar
        }
    }
</script>
