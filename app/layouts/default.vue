<script setup lang="ts">
// definePageMeta({
//   pageTransition: {
//     name: 'page-fade',
//     mode: 'out-in',
//     appear: true,
//   },
// })
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <TemplateSiteHeader />
    <main class="flex-1">
      <slot />
    </main>
    <TemplateSiteFooter />
  </div>
</template>

<style>
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>
