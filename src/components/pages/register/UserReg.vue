<template>
  <div class="page">
    <UserRegBar/>
    <b-button class="backButton secondaryButton" href="register-type">⬅ Geri</b-button>
    <b-container>
      <b-row style="height: 60px"></b-row>
      <UserForm class="mt-5"/>
    </b-container>
  </div>
</template>

<script>
import UserRegBar from '../../bars/UserRegBar.vue'
import UserForm from './registercomps/UserForm.vue'

export default {
  name: 'UserReg',
  components: {
    UserRegBar,
    UserForm
  }
}
</script>