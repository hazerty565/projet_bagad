<template>
  <div class="relative">
    <select
      v-model="currentLocale"
      @change="changeLocale"
      class="appearance-none bg-green-700 text-white px-3 py-1 rounded cursor-pointer hover:bg-green-600 focus:outline-none"
    >
      <option value="fr">FR</option>
      <option value="bzh">BZH</option>
      <option value="en">EN</option>
    </select>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const currentLocale = ref(locale.value)

const changeLocale = () => {
  locale.value = currentLocale.value
  localStorage.setItem('locale', currentLocale.value)
}

// Initialiser la langue depuis le localStorage
const savedLocale = localStorage.getItem('locale')
if (savedLocale) {
  currentLocale.value = savedLocale
  locale.value = savedLocale
}
</script>