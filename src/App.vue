<script>
import DefaultLayout from './layouts/DefaultLayout.vue'
export default {
  components: {
    DefaultLayout,
  },
}
</script>

<template>
  <component :is="$route.meta.layout === 'notfound' ? 'notfound' : 'DefaultLayout'">
    <router-view />
  </component>

</template>

<style scoped>
</style>
