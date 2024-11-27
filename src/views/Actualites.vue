<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-8">Actualités</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div v-for="(actualite, index) in actualites" :key="index" class="bg-white rounded-lg shadow-lg overflow-hidden">
        <img :src="actualite.image" :alt="actualite.titre" class="w-full h-48 object-cover">
        <div class="p-6">
          <h2 class="text-2xl font-bold mb-2">{{ actualite.titre }}</h2>
          <div class="text-gray-600 mb-4">{{ actualite.date }}</div>
          <p class="mb-4">{{ actualite.description }}</p>
          <button class="text-green-800 hover:text-green-600">Lire la suite →</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const actualites = ref([
  {
    titre: "Succès au championnat",
    date: "10 juillet 2023",
    description: "Le Bagad Penhars s'est illustré lors du dernier championnat...",
    image: "/images/actualite1.jpg"
  },
  {
    titre: "Nouvelle école de musique",
    date: "5 juillet 2023",
    description: "Ouverture des inscriptions pour la rentrée 2023...",
    image: "/images/actualite2.jpg"
  }
])
</script>