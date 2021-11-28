<template>
  <div class="home">
    <MainBar/>
    <b-container>
      <b-row style="height: 60px"></b-row>
      <b-row class="pageTitleStyle pl-3 pb-2 pt-3">
        <span>Hoşgeldin, <b>{{userNickname}}</b></span>
      </b-row>
      <b-row cols="1" cols-sm="1" cols-md="2" cols-lg="2">
        <!-- Calendar -->
        <b-col class="p-2 m-0" style="width: 100%">
          <WeekCalendar/>
        </b-col>
        <!-- Right Side -->
        <b-col class="p-0 m-0">
          <!-- Offers -->
          <b-row class="p-2 m-0">
            <Offers/>
          </b-row>
          <!-- Restaurants List ve Reviews -->
          <b-row class="p-0 m-0" style="width: 100%;" cols="1" cols-sm="2" cols-md="1" cols-lg="2">
            <b-col class="p-2 m-0">
              <RestrList/>
            </b-col>
            <b-col class="p-2 m-0" style="width: 100%;">
              <ReviewList/>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// Bar
import MainBar from '../../bars/MainBar.vue';

// Components
import Offers from "./homecomps/Offers.vue";
import RestrList from './homecomps/RestrList.vue';
import ReviewList from './homecomps/ReviewList.vue';
import WeekCalendar from './homecomps/WeekCalendar.vue'

export default {
  name: 'Home',
  components: {
    MainBar,
    Offers,
    RestrList,
    ReviewList,
    WeekCalendar
  },
  data() {
    return {
      userNickname: "Kullanıcı Adı"
    }
  }
}
</script>