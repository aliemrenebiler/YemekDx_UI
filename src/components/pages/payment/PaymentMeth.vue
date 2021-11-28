<!-- bu ne abi -->
<template>
<div>
  <v-card
    max-width="500"
    class="mx-auto my-auto"
  >
    <v-toolbar
      color="blue"
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Kartlarım</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
    <v-list>
      <v-list-item
        v-for="item in items"
        :key="item.title"
      >
        <v-list-item-icon>
          <v-icon
            v-if="item.icon"
            color="pink"
          >
            mdi-star
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item-content>

        <v-list-item-avatar>
          <v-img :src="item.avatar"></v-img>
        </v-list-item-avatar>
      </v-list-item>
    </v-list>
  </v-card>
</div>
</template>

<style>
  
</style>