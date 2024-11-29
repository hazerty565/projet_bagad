<template>
  <div class="container mx-auto px-4 py-8">
    <div class="bg-green-800 text-white rounded-lg p-12 mb-12">
      <div class="text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">{{ $t('home.title') }}</h1>
        <p class="text-xl md:text-2xl">{{ $t('home.subtitle') }}</p>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      <div class="bg-white rounded-lg shadow-lg p-6">
        <h2 class="text-2xl font-bold mb-4">{{ $t('home.news') }}</h2>
        <p class="mb-4">{{ $t('home.news_desc') }}</p>
        <router-link to="/actualites" class="text-green-800 hover:text-green-600">{{ $t('home.more') }} →</router-link>
      </div>

      <div class="bg-white rounded-lg shadow-lg p-6">
        <h2 class="text-2xl font-bold mb-4">{{ $t('home.school') }}</h2>
        <p class="mb-4">{{ $t('home.school_desc') }}</p>
        <router-link to="/ecole" class="text-green-800 hover:text-green-600">{{ $t('home.more') }} →</router-link>
      </div>

      <div class="bg-white rounded-lg shadow-lg p-6">
        <h2 class="text-2xl font-bold mb-4">{{ $t('home.join') }}</h2>
        <p class="mb-4">{{ $t('home.join_desc') }}</p>
        <router-link to="/contact" class="text-green-800 hover:text-green-600">{{ $t('home.more') }} →</router-link>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow-lg p-8 mb-12">
      <h2 class="text-3xl font-bold mb-6 text-center">Prochaines dates</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="border rounded-lg p-4">
          <div class="font-bold text-lg">Festival Interceltique</div>
          <div class="text-gray-600">15 août 2024</div>
          <div>Lorient</div>
        </div>
        <div class="border rounded-lg p-4">
          <div class="font-bold text-lg">Championnat National</div>
          <div class="text-gray-600">1er septembre 2024</div>
          <div>Brest</div>
        </div>
        <div class="border rounded-lg p-4">
          <div class="font-bold text-lg">Concert d'hiver</div>
          <div class="text-gray-600">15 décembre 2024</div>
          <div>Penhars</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Composant page d'accueil
</script>