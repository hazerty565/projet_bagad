<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-green-800 text-white shadow-lg">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <router-link to="/" class="font-bold text-xl">Bagad Penhars</router-link>
        
        <div class="hidden md:flex items-center space-x-6">
          <!-- Navigation desktop -->
          <nav class="flex space-x-6">
            <router-link 
              v-for="item in menuItems" 
              :key="item.path" 
              :to="item.path"
              class="hover:text-green-200 transition-colors duration-200"
              :class="{ 'text-green-200': isCurrentRoute(item.path) }"
            >
              {{ item.name }}
            </router-link>
          </nav>
        </div>

        <!-- Menu mobile -->
        <button 
          @click="isMenuOpen = !isMenuOpen"
          class="md:hidden p-2 hover:bg-green-700 rounded"
        >
          <svg 
            class="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              v-if="!isMenuOpen" 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path 
              v-else 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Menu mobile dropdown -->
    <div 
      v-show="isMenuOpen" 
      class="md:hidden bg-green-800 border-t border-green-700"
    >
      <div class="container mx-auto px-4 py-2">
        <router-link 
          v-for="item in menuItems" 
          :key="item.path" 
          :to="item.path"
          class="block py-2 hover:text-green-200 transition-colors duration-200"
          :class="{ 'text-green-200': isCurrentRoute(item.path) }"
          @click="isMenuOpen = false"
        >
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isMenuOpen = ref(false)

const menuItems = [
  { path: '/', name: 'Accueil' },
  { path: '/actualites', name: 'Actualités' },
  { path: '/presentation', name: 'Présentation' },
  { path: '/ecole', name: 'École' },
  { path: '/contact', name: 'Contact' }
]

const isCurrentRoute = (path) => {
  return route.path === path
}
</script>