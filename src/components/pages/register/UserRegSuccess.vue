<template>
    <div>
        <WelcomeBar/><br><br><br>
        <link rel="stylesheet" type="text/css" href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css">
        <i class="fa fa-check" style="margin-top: 10%; font-size: 140px; color: rgba(26, 174, 32, 0.55);"></i>
        <h3><b>Kayıt işleminiz tamamlandı.</b></h3>
        <p>Aktivasyon için size bir e-posta gönderdik. Hesabınızı doğrulamak için<br>gelen kutunuzu kontrol etmeyi unutmayın.</p>
        <b-button class="primaryButtonTwo" href="/" style="width: 160px;">Ana Sayfa</b-button>
        <br><br><br>
        <BottomBar/>
    </div>
</template>

<script>
    import WelcomeBar from '../../bars/WelcomeBar.vue'
    import BottomBar from '../../bars/BottomBar.vue'

    export default {
        name: 'UserRegisterSuccess',
        components: {
            WelcomeBar,
            BottomBar
        }
    }
</script>