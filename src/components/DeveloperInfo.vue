<style scoped>
div.d-flex {
  height: 30vh;
}
</style>

<template>
  <section>
    <div class="container-fluid">
      <div class="d-flex flex-column align-items-center justify-content-center">
        <h2 class="">{{ developer.name }}</h2>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import developerService from '../api/services/developerService'

const developer = ref({})

onMounted(async () => {
  try {
    const response = await developerService.getDeveloper()
    developer.value = response.data
  } catch (error) {
    console.error('Error fetching developer:', error)
  }
})
</script>
