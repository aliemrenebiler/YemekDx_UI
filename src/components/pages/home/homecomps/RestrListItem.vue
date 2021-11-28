<template>
    <div>
        <b-container class="mt-3">
            <b-row align-v="center">
                <b-col left cols="2" class="p-0 m-0">
                    <b-img left width="43" :src="restrData.logoURL" :blank="isBlank" v-bind="restrLogo"></b-img>
                </b-col>
                <b-col left cols="1" class="p-0 m-0"></b-col>
                <b-col left cols="9" class="p-0 m-0 restrTextStyle" width="stretch">
                    <b>{{restrData.name}}</b><br>
                    {{restrData.address}}
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<style>
.restrTextStyle {
    font-size: 12px;
    text-align: left;
}
</style>

<script>
export default {
    name: 'RestrListItem',
    props: ['aRestr'],
    data() {
        return {
            restrData: {
                logoURL: this.aRestr.logoURL,
                name: this.aRestr.name,
                address: this.aRestr.address,
            },
            restrLogo: {
                style: 'border: 2px solid var(--ydx-lgray); object-fit: cover',
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
            if(this.aRestr.logoURL == null){
                return true;
            }else{
                return false;
            }
        }
    }
}
</script>