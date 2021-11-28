<template>
  <div>
    <b-card no-body class="cardStyle">
      <b-card-text class="mt-3 mb-0"><b>Takvim</b></b-card-text>
      <b-card no-body class="mb-2 py-1 px-2 dateStyle">
        <b-card-text>
          {{todaysDay}} {{todaysMonth}} {{todaysYear}} - {{futureDay}} {{futureMonth}} {{futureYear}}
        </b-card-text>
      </b-card>
      <b-container class="px-3 pb-3">
        <b-row class="m-0 p-0" cols="1" cols-sm="2" cols-md="1" cols-lg="2">
          <template v-if="shownDates[1].date.getDay() == 0">
            <!-- Today is Sunday -->
            <b-col>
              <b-row>
                <!-- Saturday -->
                <b-col class="p-1">
                  <b-card no-body class="boxStyle">
                    <b-card-header class="p-1 dayTextStyle"><b>Cumartesi</b></b-card-header>
                    <b-card-body>
                      <!-- shownDates[0].date bilgileri gelecek -->
                    </b-card-body>
                  </b-card>
                </b-col>
                <!-- Sunday -->
                <b-col class="p-1">
                  <b-card no-body class="boxStyle">
                    <b-card-header class="p-1 dayTextStyle"><b>Pazar</b></b-card-header>
                    <b-card-body>
                      <!-- shownDates[1].date bilgileri gelecek -->
                    </b-card-body>
                  </b-card>
                </b-col>
              </b-row>
            </b-col>
            <b-col class="p-1" v-for="i in 5" :key="i">
              <!-- Weekdays -->
              <b-card no-body class="boxStyle">
                <b-card-header class="p-1 dayTextStyle"><b>{{shownDates[i+1].day}}</b></b-card-header>
                <b-card-body>
                  <!-- shownDates[i+1].date bilgileri gelecek -->
                </b-card-body>
              </b-card>
            </b-col>
          </template>
          <template v-else>
            <!-- Today is a Weekday OR Saturday -->
            <b-col class="p-1" v-for="i in 6-(shownDates[1].date.getDay())" :key="i">
              <!-- Weekdays -->
              <b-card no-body class="boxStyle">
                <b-card-header class="p-1 dayTextStyle"><b>{{shownDates[i].day}}</b></b-card-header>
                <b-card-body>
                  <!-- shownDates[i].date bilgileri gelecek -->
                </b-card-body>
              </b-card>
            </b-col>
            <b-col>
              <b-row>
                <!-- Saturday -->
                <b-col class="p-1">
                  <b-card no-body class="boxStyle">
                    <b-card-header class="p-1 dayTextStyle"><b>Cumartesi</b></b-card-header>
                    <b-card-body>
                      <!-- shownDates[7-(shownDates[1].date.getDay())].date bilgileri gelecek -->
                    </b-card-body>
                  </b-card>
                </b-col>
                <!-- Sunday -->
                <b-col class="p-1">
                  <b-card no-body class="boxStyle">
                    <b-card-header class="p-1 dayTextStyle"><b>Pazar</b></b-card-header>
                    <b-card-body>
                      <!-- shownDates[8-(shownDates[1].date.getDay())].date bilgileri gelecek -->
                    </b-card-body>
                  </b-card>
                </b-col>
              </b-row>
            </b-col>
            <b-col class="p-1" v-for="i in (shownDates[1].date.getDay())-1" :key="i">
              <!-- Weekdays -->
              <b-card no-body class="boxStyle">
                <b-card-header class="p-1 dayTextStyle"><b>{{shownDates[8-shownDates[1].date.getDay()+i].day}}</b></b-card-header>
                <b-card-body>
                  <!-- shownDates[8-shownDates[1].date.getDay()+i].date bilgileri gelecek -->
                </b-card-body>
              </b-card>
            </b-col>
          </template>

        </b-row>
      </b-container>
    </b-card>
  </div>
</template>

<style>
.dayTextStyle {
  font-size: small;
  color: var(--ydx-black);
}

.boxStyle {
  width: 100%;
  height: 150px;
  border-radius: 5px;
  border: 2px solid var(--ydx-lgray);
}

.dateStyle {
  font-size: small;
  align-self: center;
  width: fit-content;
  border-radius: 5px;
  border: 2px solid var(--ydx-lgray);
}
</style>

<script>
export default {
  name: 'WeekCalendar',
  data() {
    return {
      shownDates: [
        {date: null, day: null}, // Yesterday
        {date: null, day: null}, // Today
        {date: null, day: null},
        {date: null, day: null},
        {date: null, day: null},
        {date: null, day: null},
        {date: null, day: null},
        {date: null, day: null}, // Future Date
      ],
      days: ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'],
      months: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
      'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
    }
  },
  methods: {
    setShownDate() {
      this.shownDates[0].date = new Date(Date.now() + (-1 * 86400000))
      this.shownDates[0].day = this.days[this.shownDates[0].date.getDay()]
      this.shownDates[1].date = new Date(Date.now())
      this.shownDates[1].day = this.days[this.shownDates[0].date.getDay()]
      this.shownDates[2].date = new Date(Date.now() + (1 * 86400000))
      this.shownDates[2].day = this.days[this.shownDates[1].date.getDay()]
      this.shownDates[3].date = new Date(Date.now() + (2 * 86400000))
      this.shownDates[3].day = this.days[this.shownDates[2].date.getDay()]
      this.shownDates[4].date = new Date(Date.now() + (3 * 86400000))
      this.shownDates[4].day = this.days[this.shownDates[3].date.getDay()]
      this.shownDates[5].date = new Date(Date.now() + (4 * 86400000))
      this.shownDates[5].day = this.days[this.shownDates[4].date.getDay()]
      this.shownDates[6].date = new Date(Date.now() + (5 * 86400000))
      this.shownDates[6].day = this.days[this.shownDates[5].date.getDay()]
      this.shownDates[7].date = new Date(Date.now() + (6 * 86400000))
      this.shownDates[7].day = this.days[this.shownDates[6].date.getDay()]
    },
  },
  created() {
      this.setShownDate()
  },
  computed: {
    todaysDay() {
      if(this.shownDates[1].date.getDay() == 7){
        return this.shownDates[0].date.getDate()
      }else{
        return this.shownDates[1].date.getDate()
      }
    },
    todaysMonth() {
      if(this.shownDates[1].date.getDay() == 7){
        return this.months[this.shownDates[0].date.getMonth()]
      }else{
        return this.months[this.shownDates[1].date.getMonth()]
      }
    },
    todaysYear() {
      if(this.shownDates[1].date.getDay() == 7){
        return this.shownDates[0].date.getFullYear()
      }else{
        return this.shownDates[1].date.getFullYear()
      }
    },

    futureDay() {
      if(this.shownDates[1].date.getDay() == 7){
        return this.shownDates[6].date.getDate()
      }else{
        return this.shownDates[7].date.getDate()
      }
    },
    futureMonth() {
      if(this.shownDates[1].date.getDay() == 7){
        return this.months[this.shownDates[6].date.getMonth()]
      }else{
        return this.months[this.shownDates[7].date.getMonth()]
      }
    },
    futureYear() {
      if(this.shownDates[1].date.getDay() == 7){
        return this.shownDates[6].date.getFullYear()
      }else{
        return this.shownDates[7].date.getFullYear()
      }
    }
  }
}
</script>