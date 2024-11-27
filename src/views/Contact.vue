<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-8">Contact</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="bg-white rounded-lg shadow-lg p-6">
        <h2 class="text-2xl font-bold mb-4">Formulaire de contact</h2>
        <form @submit.prevent="submitForm" class="space-y-4">
          <div>
            <label class="block text-gray-700 mb-2">Nom</label>
            <input type="text" v-model="form.nom" class="w-full p-2 border rounded">
          </div>
          <div>
            <label class="block text-gray-700 mb-2">Email</label>
            <input type="email" v-model="form.email" class="w-full p-2 border rounded">
          </div>
          <div>
            <label class="block text-gray-700 mb-2">Message</label>
            <textarea v-model="form.message" rows="4" class="w-full p-2 border rounded"></textarea>
          </div>
          <button type="submit" class="bg-green-800 text-white px-6 py-2 rounded-lg hover:bg-green-700">
            Envoyer
          </button>
        </form>
      </div>
      
      <div class="bg-white rounded-lg shadow-lg p-6">
        <h2 class="text-2xl font-bold mb-4">Informations</h2>
        <div class="space-y-4">
          <div>
            <h3 class="font-bold">Adresse</h3>
            <p>XX rue XXXXX</p>
            <p>29000 Penhars</p>
          </div>
          <div>
            <h3 class="font-bold">Téléphone</h3>
            <p>02.XX.XX.XX.XX</p>
          </div>
          <div>
            <h3 class="font-bold">Email</h3>
            <p>contact@bagadpenhars.bzh</p>
          </div>
          <div>
            <h3 class="font-bold">Réseaux sociaux</h3>
            <div class="flex space-x-4 mt-2">
              <a href="#" class="text-green-800 hover:text-green-600">Facebook</a>
              <a href="#" class="text-green-800 hover:text-green-600">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  nom: '',
  email: '',
  message: ''
})

const submitForm = () => {
  // Logique d'envoi du formulaire à implémenter
  console.log('Formulaire soumis:', form.value)
}
</script>