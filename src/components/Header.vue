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
              {{ $t(`menu.${item.translationKey}`) }}
            </router-link>
          </nav>
          <LanguageSelector />
        </div>

        <!-- Menu mobile -->
        <div class="md:hidden flex items-center space-x-4">
          <LanguageSelector />
          <button 
            @click="isMenuOpen = !isMenuOpen"
            class="p-2 hover:bg-green-700 rounded"
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
          {{ $t(`menu.${item.translationKey}`) }}
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import LanguageSelector from './LanguageSelector.vue'

const route = useRoute()
const isMenuOpen = ref(false)

const menuItems = [
  { path: '/', translationKey: 'home' },
  { path: '/actualites', translationKey: 'news' },
  { path: '/presentation', translationKey: 'presentation' },
  { path: '/ecole', translationKey: 'school' },
  { path: '/contact', translationKey: 'contact' }
]

const isCurrentRoute = (path) => {
  return route.path === path
}
</script>