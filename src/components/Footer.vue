<template>
  <footer class="bg-green-800 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="font-bold text-xl mb-4">Bagad Penhars</h3>
          <p class="mb-2">Association culturelle bretonne</p>
          <p>Musique traditionnelle bretonne</p>
          <p class="mt-4">SIRET: XX XXX XXX XXXXX</p>
        </div>
        
        <div>
          <h3 class="font-bold text-xl mb-4">Navigation</h3>
          <ul class="space-y-2">
            <li><router-link to="/" class="hover:text-green-200">Accueil</router-link></li>
            <li><router-link to="/actualites" class="hover:text-green-200">Actualités</router-link></li>
            <li><router-link to="/presentation" class="hover:text-green-200">Présentation</router-link></li>
            <li><router-link to="/ecole" class="hover:text-green-200">École</router-link></li>
            <li><router-link to="/contact" class="hover:text-green-200">Contact</router-link></li>
          </ul>
        </div>

        <div>
          <h3 class="font-bold text-xl mb-4">Contact</h3>
          <ul class="space-y-2">
            <li>XX rue XXXXX</li>
            <li>29000 Penhars</li>
            <li>02.XX.XX.XX.XX</li>
            <li>contact@bagadpenhars.bzh</li>
          </ul>
        </div>

        <div>
          <h3 class="font-bold text-xl mb-4">Suivez-nous</h3>
          <div class="flex space-x-4">
            <a href="#" class="hover:text-green-200" aria-label="Facebook">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/></svg>
            </a>
            <a href="#" class="hover:text-green-200" aria-label="Instagram">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.27.2-6.78,2.71-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.27,2.71,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.27-.2,6.78-2.71,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.27-2.71-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z"/></svg>
            </a>
            <a href="#" class="hover:text-green-200" aria-label="Youtube">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.5,6.2A3,3,0,0,0,21.4,4c-2-.2-6.2-.3-9.4-.3S4.5,3.8,2.6,4A3,3,0,0,0,.5,6.2,31.5,31.5,0,0,0,0,12a31.5,31.5,0,0,0,.5,5.8A3,3,0,0,0,2.6,20c2,.2,6.2.3,9.4.3s7.4-.1,9.4-.3a3,3,0,0,0,2.1-2.2A31.5,31.5,0,0,0,24,12,31.5,31.5,0,0,0,23.5,6.2ZM9.5,15.5v-7l6,3.5Z"/></svg>
            </a>
          </div>
          <div class="mt-4">
            <p class="text-sm">Inscrivez-vous à notre newsletter</p>
            <form @submit.prevent="subscribeNewsletter" class="mt-2 flex">
              <input type="email" placeholder="Votre email" class="px-3 py-2 text-gray-800 rounded-l focus:outline-none">
              <button type="submit" class="bg-green-700 px-4 py-2 rounded-r hover:bg-green-600">OK</button>
            </form>
          </div>
        </div>
      </div>
      <div class="mt-8 pt-8 border-t border-green-700 text-center text-sm">
        <p>&copy; {{ new Date().getFullYear() }} Bagad Penhars. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const subscribeNewsletter = () => {
  // Logique d'inscription à la newsletter à implémenter
  console.log('Inscription newsletter')
}
</script>