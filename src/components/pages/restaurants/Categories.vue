<template>
    <div>
        <link rel="stylesheet" type="text/css" href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css">
        <MainBar/>
        <b-container>
            <b-row style="height: 60px"></b-row>
            <b-row class="p-3" align-v="center" cols="1" cols-sm="1" cols-md="1" cols-lg="2">
                <b-col class="pageTitleStyle p-0">
                    <b>Kategoriler</b>
                </b-col>
                <b-col class="p-0">
                    <b-row class="p-0">
                        <b-col class="px-2" cols="5">
                            <b-button class="primaryButtonTwo" href="all-restaurants" style="width: 100%"><b>Tüm Restoranlar</b></b-button>
                        </b-col>
                        <b-col class="px-2" cols="7">
                            <form class="form-inline" style="width: 100%">
                                <div class="textarea-container" style="width: 100%"> 
                                    <input class="form-control" type="search" placeholder="Yemek ya da restoran ara..." aria-label="Search" style="width: 100%; box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.1); border-radius: 10px;">
                                    <button class="btn" type="submit" style="background-color: var(--ydx-red); color: white; border-radius: 10px;"><i class="fa fa-search"></i></button> 
                                </div>
                            </form>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
            <b-row class="p-0" cols="1" cols-sm="2" cols-md="2" cols-lg="3" cols-xl="5">
                <b-col class="px-2 pb-3">
                    <Breakfast/>
                </b-col>
                <b-col class="px-2 pb-3">
                    <Fit/>
                </b-col>
                <b-col class="px-2 pb-3">
                    <Meat/>
                </b-col>
                <b-col class="px-2 pb-3">
                    <Fast/>
                </b-col>
                <b-col class="px-2 pb-3">
                    <Other/>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<style>
.textarea-container { 
  position: relative; 
} 
.textarea-container textarea { 
  width: 100%; 
  height: 100%; 
  box-sizing: border-box; 
  width: 400px; 
  box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.1); 
  border-radius: 10px;
} 
.textarea-container button { 
  position: absolute; 
  top: 0; 
  right: 0; 
  background-color: #0B208A; 
  color: white; 
  border-radius: 10px;
}
</style>

<script>
import MainBar from '../../bars/MainBar.vue'
import Breakfast from './restrcomps/Breakfast.vue'
import Fit from './restrcomps/Fit.vue'
import Meat from './restrcomps/Meat.vue'
import Fast from './restrcomps/FastFood.vue'
import Other from './restrcomps/DesertsDrinks.vue'

export default {
    name: 'Categories',
    components: {
        MainBar,
        Breakfast,
        Fit,
        Meat,
        Fast,
        Other
    }
}
</script>
