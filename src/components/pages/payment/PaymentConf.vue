<!-- Görüntüyü ve metni ortalamak gerekiyor -->
<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="info" class="bg-primary text-white">
    <b-navbar-brand>Yemek<b>Dx</b></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="home" disabled>Ana Sayfa</b-nav-item>
        <b-nav-item href="restaurants">Restoranlar</b-nav-item>
        <b-nav-item href="cart">Sepet <b-badge variant="light"><b>0</b></b-badge></b-nav-item>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>
              <span class="mr-auto">Kullanıcı Adı Soyadı </span>
              <b-avatar class="mr-3"></b-avatar>
            </em>
          </template>
          <b-dropdown-item href="settings">Ayarlar</b-dropdown-item>
          <b-dropdown-item href="logout">Çıkış</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <v-banner two-line>
    <v-avatar
      slot="icon"
      color="deep-purple accent-4"
      size="40"
    >
      <v-icon
        icon="mdi-lock"
        color="grey"
      >
        mdi-lock
      </v-icon>
    </v-avatar>
    
    <b-container style="margin-left: 250px"> 
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Light_green_check.svg" class="checkStyle" alt="check">
      <h2>Ödemenizi Aldık</h2>
      <p>0000 referans kodlu siparişiniz alındı, detaylı bilgi cep telefonunuza SMS olarak iletildi.</p>
    </b-container>

    <template v-slot:actions>
      <v-btn
        text
        style="padding-bottom: 30px"
        color="deep-purple accent-4"
      >
        Ana Sayfa
      </v-btn>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Sipariş detayları
      </v-btn>
    </template>
  </v-banner>
  </div>
</template>

<style>
.checkStyle{
  width:100px;
  height:100px;
}
</style>