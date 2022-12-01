<script setup lang="ts">
import NavBar from './shared/components/NavBar.vue'
import { routeLinks } from './router/link-router';
</script>

<template>
  <div class="container mx-auto my-4">

    <header class="flex">
      <NavBar title="BreakingBad" :links="routeLinks" />

    </header>

    <main>
      <RouterView></RouterView>
    </main>
  </div>
</template>

<style scoped>

</style>
