<template>
    <div>
        <b-container>
            <form class="d-flex justify-content-center d-flex align-items-center" style="max-width: 1400px; left-margin: 5%; text-align: left;">
                <b-row>
                    <b-col>
                        <b-row class="d-flex align-items-center">
                            <h2><b-badge pill style="color: var(--ydx-white); background-color: var(--ydx-red); text-align: center;">1</b-badge></h2>
                            <h5 class="ml-2 mt-2"><b>Kullanıcı Bilgileri</b></h5>
                        </b-row>
                        <b-row class="d-flex align-items-center ml-4 mb-3">
                            <b-col cols="4">Kullanıcı Adı*</b-col>
                            <b-col cols="8">
                                <input v-model="newUser.nickname" class="form-control regInputStyle" type="input" placeholder="Kullanıcı Adı" aria-label="Name" required>
                            </b-col>
                        </b-row>
                        <b-row class="d-flex align-items-center ml-4 mb-3">
                            <b-col cols="4">Ad*</b-col>
                            <b-col cols="8">
                                <input v-model="newUser.name" class="form-control regInputStyle" type="input" placeholder="Ad" aria-label="Name" required>
                            </b-col>
                        </b-row>
                        <b-row class="d-flex align-items-center  ml-4 mb-3">
                            <b-col cols="4">Soyad*</b-col>
                            <b-col cols="8">
                                <input v-model="newUser.surname" class="form-control regInputStyle" type="input" placeholder="Soyad" aria-label="Surname" required>
                            </b-col>
                        </b-row>
                        <b-row class="d-flex align-items-center  ml-4 mb-3">
                            <b-col cols="4">
                                <label for="Mail">Kurum E-Posta*</label>
                            </b-col>
                            <b-col cols="8">
                                <input v-model="newUser.mail" class="form-control regInputStyle" type="email" placeholder="Kurum E-Postası" aria-label="Mail" required>
                            </b-col>
                        </b-row>
                        <b-row class="d-flex align-items-center  ml-4 mb-3">
                            <b-col cols="4">
                                <label for="Pass">Şifre*</label>
                            </b-col>
                            <b-col cols="8">
                                <input v-model="newUser.password" id="password" class="form-control validate regInputStyle" type="password" placeholder="Şifre" aria-label="Pass" required>
                            </b-col>
                        </b-row>
                        <b-row class="d-flex align-items-center  ml-4 mb-3">
                            <b-col cols="4">
                                <label for="PassCheck">Şifre Tekrar*</label>
                            </b-col>
                            <b-col cols="8">
                                <input class="form-control regInputStyle" id="passwordCheck" type="password" placeholder="Şifre Tekrar" aria-label="PassCheck" required>
                            </b-col>
                        </b-row>
                        <b-row class="d-flex align-items-center  ml-4 mb-3">
                            <b-col cols="4">
                                <label for="Bday">Doğum Tarihi*</label>
                            </b-col>
                            <b-col cols="8">
                                <b-row>
                                    <b-col class="pr-1">
                                        <select class="form-control regInputStyle" id="Bday" required>
                                            <option selected disabled>Gün</option>
                                            <option>01</option><option>02</option><option>03</option><option>04</option><option>05</option>
                                            <option>06</option><option>07</option><option>08</option><option>09</option><option>10</option><option>11</option>
                                            <option>12</option><option>13</option><option>14</option><option>15</option><option>16</option><option>17</option>
                                            <option>18</option><option>19</option><option>20</option><option>21</option><option>22</option><option>23</option>
                                            <option>24</option><option>25</option><option>26</option><option>27</option><option>28</option><option>29</option>
                                            <option>30</option><option>31</option>
                                        </select>
                                    </b-col>
                                    <b-col class="px-1">
                                        <select class="form-control regInputStyle" id="Bmonth" required>
                                            <option selected disabled>Ay</option>
                                            <option value="1">01</option>
                                            <option value="2">02</option>
                                            <option value="3">03</option>
                                            <option value="4">04</option>
                                            <option value="5">05</option>
                                            <option value="6">06</option>
                                            <option value="7">07</option>
                                            <option value="8">08</option>
                                            <option value="9">09</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                        </select>
                                    </b-col>
                                    <b-col class="pl-1">
                                        <input class="form-control regInputStyle" id="Byear" type="input" placeholder="Yıl" aria-label="Byear" required>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <b-row class="d-flex align-items-center  ml-4 mb-3">
                            <b-col cols="4">
                                <label for="areacode">Telefon*</label>
                            </b-col>
                            <b-col cols="8">
                                <b-row>
                                    <b-col cols="4" class="pr-1">
                                        <select class="form-control regInputStyle" id="areacode" required>
                                            <option selected="true" disabled>Alan</option>
                                            <optgroup label="Operatörler">
                                            <option>501</option><option>505</option><option>506</option><option>507</option><option>551</option><option>552</option>
                                            <option>553</option><option>554</option><option>555</option><option>559</option>

                                            <option>516</option><option>530</option><option>531</option><option>532</option><option>533</option><option>534</option>
                                            <option>535</option><option>536</option><option>537</option><option>538</option><option>539</option><option>561</option>

                                            <option>541</option><option>542</option><option>543</option><option>544</option><option>545</option><option>546</option>
                                            <option>547</option><option>548</option><option>549</option>
                                            </optgroup>
                                            <optgroup label="Yerel Hatlar" aria-required="true">
                                            <option>Adana (322)</option><option>Adıyaman (416)</option><option>Afyon (272)</option><option>Ağrı (472)</option><option>Aksaray (382)</option>
                                            <option>Amasya (358)</option><option>Ankara (312)</option><option>Antalya (242)</option><option>Ardahan (478)</option><option>Artvin (466)</option>
                                            <option>Aydın (256)</option><option>Balıkesir (266)</option><option>Bartın (378)</option><option>Batman (488)</option><option>Bayburt (458)</option>
                                            <option>Biecik (228)</option><option>Bingöl (426)</option><option>Bitlis (434)</option><option>Bolu (374)</option><option>Burdur (248)</option>
                                            <option>Bursa (224)</option><option>Çanakkale (286)</option><option>Çankırı (376)</option><option>Çorum (364)</option><option>Denizli (258)</option>
                                            <option>Diyarbakır (412)</option><option>Düzce (380)</option><option>Edirne (284)</option><option>Elazığ (424)</option><option>Erzincan (446)</option>
                                            <option>Erzurum (442)</option><option>Eskişehir (222)</option><option>Gaziantep (342)</option><option>Giresun (454)</option><option>Gümüşhane (456)</option>
                                            <option>Hakkari (438)</option><option>Hatay (326)</option><option>Iğdır (476)</option><option>Isparta (246)</option><option>İstanbul Asya (216)</option>
                                            <option>İstanbul Avrupa (212)</option><option>İzmir (232)</option><option>Kahramanmaraş (344)</option><option>Karabük (370)</option><option>Karaman (338)</option>
                                            <option>Kars (474)</option><option>Kastamonu (366)</option><option>Kayseri (352)</option><option>Kırıkkale (318)</option><option>Kırklareli (288)</option>
                                            <option>Kırşehir (386)</option><option>Kilis (348)</option><option>Kocaeli (262)</option><option>Konya (332)</option><option>Kütahya (274)</option>
                                            <option>Malatya (422)</option><option>Manisa (236)</option><option>Mardin (482)</option><option>Mersin (324)</option><option>Muğla (252)</option>
                                            <option>Muş (436)</option><option>Nevşehir (384)</option><option>Niğde (388)</option><option>Ordu (452)</option><option>Osmaniye (328)</option>
                                            <option>Rize (464)</option><option>Sakarya (264)</option><option>Samsun (362)</option><option>Siirt (484)</option><option>Sinop (368)</option>
                                            <option>Sivas (346)</option><option>Şanlıurfa (414)</option><option>Şırnak (486)</option><option>Tekirdağ (282)</option><option>Tokat (356)</option>
                                            <option>Trabzon (462)</option><option>Tunceli (428)</option><option>Uşak (276)</option><option>Van (432)</option><option>Yalova (226)</option>
                                            <option>Yozgat (354)</option><option>Zonguldak (372)</option>
                                            </optgroup>
                                        </select>
                                    </b-col>
                                    <b-col cols="8" class="pl-1">
                                        <input v-model="newUser.phone" class="form-control regInputStyle" type="input" placeholder="Telefon" aria-label="phone" required>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <b-row class="d-flex align-items-center ml-4">
                            <b-col cols="4">
                                <label>Fotoğraf</label>
                            </b-col>
                            <b-col cols="8" align-v="center">
                                <input type="file" accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*">
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col>
                        <b-row class="align-items-center">
                                <h2><b-badge pill style="color: var(--ydx-white); background-color: var(--ydx-red); text-align: center;">2</b-badge></h2>
                                <h5 class="ml-2 mt-2"><b>Şartlar</b></h5>
                        </b-row>
                        <b-col class="ml-4">
                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" required>
                                <label class="form-check-label" for="exampleCheck1" style="text-align: left; text-align: justify;">Aydınlatma Metni’ni, Son Kullanıcı Sözleşmesi’ni ve KVKK Politikasını okudum ve kabul ediyorum. Buna ek olarak, kullanıcı deneyimini ileştirmek üzere tarafımdan gönderilen verilerin YemekDx ve yurtiçi/yurtdışı ortakları tarafından anonim olarak görüntülenebilmesine ve işlenebilmesine izin veriyorum.*</label>
                            </div>
                        </b-col>
                            <b-row class="align-items-center">
                                <h2><b-badge pill style="color: var(--ydx-white); background-color: var(--ydx-red); text-align: center;">3</b-badge></h2>
                                <h5 class="ml-2 mt-2"><b>Kampanyalar</b></h5>
                            </b-row>
                        <b-col class="ml-4">
                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck2">
                                <label class="form-check-label" for="exampleCheck2" style="text-align: left; text-align: justify;">Tüm üyeler için hazırlanmış veya benim için geçerli olan kampanyalar, indirimler ve güncellemeler hakkında e-posta almak istiyorum.</label>
                            </div>
                        </b-col>
                        <b-col class="ml-4">
                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck3">
                                <label class="form-check-label" for="exampleCheck3" style="text-align: left; text-align: justify;">Tüm üyeler için hazırlanmış veya benim için geçerli olan kampanyalar, indirimler ve güncellemeler hakkında SMS almak istiyorum.</label>
                            </div>
                        </b-col>
                            <br><br><br>
                        <b-row class="d-flex align-items-center">
                            <b-col class="d-flex align-items-center">
                                <p style="color: #838585;">*doldurulması zorunlu alanlar</p>
                            </b-col>
                            <b-col class="d-flex flex-row-reverse bd-highlight">
                                <!-- class="alwaysActiveButton" id="RegisterButton" style="width: 150px; float: center; color: #FFFFFF;" -->
                                <b-button type="submit" class="primaryButtonTwo ml-4" @click="sendTestTwo" href="/ur-success"><b>Üye Ol</b></b-button>
                                <b-button type="reset" class="secondaryButton">Formu Sıfırla</b-button>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </form>
        </b-container>
    </div>
</template>

<style>
.regInputStyle {
    width: 100%;
    box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
}
</style>

<script>
import axios from 'axios'

  export default {
    name: 'UserForm',
    data() {
        return {
            inProgress: false,
            newUser: {
                nickname: null,
                company_ID: null,
                name: null,
                surname: null,
                isAdmin: false,
                password: null,
                birthday: null,
                mail: null,
                phone: null,
                photo_URL: null,
                order_ID: null
            },
        }
    },
    methods: {
        sendNewPost() {
            this.inProgress = true;
            axios
                .post("https://localhost:44356/api/User", this.newUser)
                .then(response => (this.sendNewPostResult = response.data))
                .catch(error => {
                this.errors.push(error);
                })
                .finally(() => (this.inProgress = false));
        },
        getData() {
            this.tableData = [];
            axios.get('https://localhost:44356/api/User')
                    .then(response => {console.log(response);
                var c;
                for (c = 0; c < response.data.length; c++)
                this.tableData.push(response.data[c]);
                });
        },
        sendTest() {
            axios.post('https://localhost:44356/api/User', {
                nickname: 'testnick',
                company_ID: 1,
                name: 'testname',
                surname: 'testsurname',
                isAdmin: true,
                password: '123',
                birthday: '2020-09-21T11:55:20.624',
                mail: 'test@mail.com',
                phone: 1234567,
                photo_URL: 'google.com',
                order_ID: 1
            }, {})
            .then(response => {console.log(response);})
            .catch(err => {console.log(err, err.response);});
        },
        sendTestTwo() {
            axios.post('https://localhost:44356/api/User', this.newUser, {})
            .then(response => {console.log(response);})
            .catch(err => {console.log(err, err.response);});
        },
    }
    
  }
</script>