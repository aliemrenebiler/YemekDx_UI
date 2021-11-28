<template>
  <div>
    <b-navbar class="bottomBarStyle text-white" toggleable="lg" type="dark" fixed="bottom">
      <b-navbar-nav class="ml-auto" right>
        <b-nav-item disabled href="#">Kullanım Koşulları</b-nav-item>
        <b-nav-item disabled href="#">Gizlilik</b-nav-item>
        <b-nav-item disabled href="#">Hakkında</b-nav-item>
        <b-nav-text class="ml-2">YemekDx © {{ new Date().getFullYear() }}</b-nav-text>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "BottomBar",
};
</script>