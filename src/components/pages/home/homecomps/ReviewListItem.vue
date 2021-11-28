<template>
    <div>
        <b-container class="mt-3">
            <b-row align-v="center">
                <!-- Logo -->
                <b-col left cols="2" class="p-0 m-0">
                    <b-img :src="reviewData.logoURL" :blank="isBlank" v-bind="restrLogo"></b-img>
                </b-col>
                <!-- Space -->
                <b-col left cols="1" class="p-0 m-0"></b-col>
                <!-- Text -->
                <b-col left cols="5" class="p-0 m-0 reviewTextStyle" width="stretch">
                    <b>{{reviewData.name}}</b><br>
                    {{reviewData.address}}
                </b-col>
                <!-- Space -->
                <b-col cols="1" class="p-0 m-0"></b-col>
                <!-- Button -->
                <b-col right cols="3" class="p-0 m-0">
                    <b-button right size="sm" class="primaryButtonTwo" href="one-review"><b>Oyla</b></b-button>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<style>
.reviewTextStyle {
    font-size: 12px;
    text-align: left;
}
</style>

<script>
export default {
    name: 'ReviewListItem',
    props: ['aReview'],
    data() {
        return {
            reviewData: {
                logoURL: this.aReview.logoURL,
                name: this.aReview.name,
                address: this.aReview.address,
            },
            restrLogo: {
                style: 'border: 2px solid #E5E5E5; object-fit: cover',
                rounded: 'circle',
                blankColor: '#E5E5E5',
                width: 43,
                height: 43,
                class: 'mr-2'
            },
        }
    },
    computed: {
        isBlank() {
            if(this.aReview.logoURL == null){
                return true;
            }else{
                return false;
            }
        }
    }
}
</script>