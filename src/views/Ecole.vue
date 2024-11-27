<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-8">École de musique</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      <div class="bg-white rounded-lg shadow-lg p-6">
        <h2 class="text-2xl font-bold mb-4">Formation musicale</h2>
        <ul class="list-disc list-inside space-y-2">
          <li>Apprentissage du solfège</li>
          <li>Pratique instrumentale</li>
          <li>Cours collectifs et individuels</li>
          <li>Participation aux événements du bagad</li>
        </ul>
      </div>
      
      <div class="bg-white rounded-lg shadow-lg p-6">
        <h2 class="text-2xl font-bold mb-4">Instruments enseignés</h2>
        <ul class="list-disc list-inside space-y-2">
          <li>Bombarde</li>
          <li>Cornemuse écossaise</li>
          <li>Caisse claire écossaise</li>
          <li>Percussions traditionnelles</li>
        </ul>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow-lg p-8">
      <h2 class="text-2xl font-bold mb-6">Inscriptions</h2>
      <p class="mb-4">Les inscriptions pour l'année 2023-2024 sont ouvertes.</p>
      <p class="mb-4">Tarifs :</p>
      <ul class="list-disc list-inside mb-6">
        <li>Cours instrument : XXX€/an</li>
        <li>Formation musicale : XXX€/an</li>
        <li>Pack complet : XXX€/an</li>
      </ul>
      <router-link to="/contact" class="inline-block bg-green-800 text-white px-6 py-2 rounded-lg hover:bg-green-700">
        Nous contacter pour s'inscrire
      </router-link>
    </div>
  </div>
</template>

<script setup>
// Composant école de musique
</script>