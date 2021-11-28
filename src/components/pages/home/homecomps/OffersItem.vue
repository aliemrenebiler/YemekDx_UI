<template>
  <div>
    <b-carousel-slide
      class="slideStyle"
      :caption="offerData.caption"
      :text="offerData.text"
      :img-blank="isBlank"
      :img-src="offerData.imgURL"
    ></b-carousel-slide>
  </div>
</template>

<script>
  export default {
    name: 'Offer',
    props: ['anOffer'],
    data() {
      return {
        offerData: {
            caption: this.anOffer.caption,
            text: this.anOffer.text,
            imgURL: this.anOffer.imgURL,
        },
      }
    },
    computed: {
        isBlank() {
            if(this.anOffer.imgURL == null){
                return true;
            }else{
                return false;
            }
        }
    }
  }
</script>