<template>
  <div>
    <b-navbar class="topBarStyle text-white" toggleable="lg" type="dark" fixed="top">
      <b-navbar-brand>Yemek<b>Dx</b></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="home">Ana Sayfa</b-nav-item>
          <b-nav-item href="restaurants">Restoranlar</b-nav-item>
          <b-nav-item href="cart">Sepet <b-badge variant="light" style="color: var(--ydx-dred)"><b>{{cartAmount}}</b></b-badge></b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
                <b-nav-text class="mr-2">{{userNickname}}</b-nav-text>
                <b-avatar class="mr-1"></b-avatar>
            </template>
            <b-dropdown-item disabled href="settings">Ayarlar</b-dropdown-item>
            <b-dropdown-item href="/">Çıkış</b-dropdown-item>
          </b-nav-item-dropdown>
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
      userNickname: "Kullanıcı Adı",
      profileImgURL: null,
    }
  }
}
</script>