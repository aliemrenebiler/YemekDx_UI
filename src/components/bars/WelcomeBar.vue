<template>
  <div>
    <b-navbar class="topBarStyle text-white d-flex justify-content-end" toggleable="lg" type="dark" fixed="top">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto" style="font-size: 18px;">
          <b-nav-item disabled class="mr-3" style="font-style: normal">Kampanyalar</b-nav-item>
          <b-nav-item disabled class="mr-3" style="font-style: normal">YemekDx Mobil</b-nav-item>
          <b-nav-item class="mr-2" style="font-style: normal" href="support">Destek</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'MainBar',
  data() {
    return {
      cartAmount: 0,
      profileImgURL: null,
    }
  }
}
</script>