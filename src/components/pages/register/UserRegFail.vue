<template>
    <div>
        <WelcomeBar/><br><br><br>
        <link rel="stylesheet" type="text/css" href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css">
        <i class="fa fa-times" style="margin-top: 10%; font-size: 140px; color: rgba(228, 4, 44, 0.55);"></i>
        <h3><b>Kayıt işleminiz tamamlanamadı.</b></h3>
        <p>İşleminiz tamamlanamadı. Bilgilerinizi tekrar gözden geçirip lütfen bir<br>süre sonra bu işlemi tekrar deneyin.</p>
        <b-button class="primaryButtonTwo" href="/" style="width: 160px;">Ana Sayfa</b-button>
        <br><br><br>
        <BottomBar/>
    </div>
</template>

<script>
    import WelcomeBar from '../../bars/WelcomeBar.vue'
    import BottomBar from '../../bars/BottomBar.vue'

    export default {
        name: 'UserRegisterFail',
        components: {
            WelcomeBar,
            BottomBar
        }
    }
</script>
