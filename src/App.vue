<script setup>
import MenuBar from './components/MenuBar.vue'
import TodayData from './components/TodayData.vue'
import ForecastData from './components/ForecastData.vue'
import FooterBar from './components/FooterBar.vue'
import Weather from './components/weather.vue'

</script>

<template>
  <header>
    <MenuBar />
  </header>
  <main>
    <TodayData />
    <ForecastData />
  </main>
  <footer>
    <FooterBar />
  </footer>
   <!-- <Weather/>  -->
  
</template>

<style scoped></style>
