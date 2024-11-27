<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <Header />
    
    <main class="flex-grow pt-16">
      <router-view></router-view>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>