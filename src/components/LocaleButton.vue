<template>
  <img :src="flag" alt="" class="flag-icon" @click="changeLocale(locale)" />
</template>

<script>
export default {
  props: {
    locale: {
      type: String,
      required: true
    }
  },
  computed: {
    name() {
      return this.$t(`locales.${this.locale}.name`)
    },
    flag() {
      return this.$t(`locales.${this.locale}.flag`)
    }
  },
  methods: {
    changeLocale(locale) {
      this.$i18n.locale = locale
    }
  }
}
</script>

<style scoped>
.flag-icon {
  width: 25px;
  height: 17.5px;
  margin-right: 8px;
  cursor: pointer;
  border-radius: 2px;
  transition: 0.5s all;
}
.flag-icon:hover {
  width: 30px;
  height: 20px;
}
</style>
