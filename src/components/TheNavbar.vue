<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse align-items-center justify-content-center"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav mb-2 justify-content-center mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/"> {{ $t('Home') }}</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about"> {{ $t('About') }}</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/projects"> {{ $t('Projects') }}</RouterLink>
          </li>
        </ul>
        <div class="locale-changer d-flex flex-row">
          <LocaleButton
            v-for="locale in availableLocales"
            :key="`locale-${locale}`"
            :locale="locale"
          />
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import LocaleButton from './LocaleButton.vue'

export default {
  components: {
    LocaleButton
  },
  computed: {
    availableLocales() {
      return this.$i18n.availableLocales
    }
  }
}
</script>
