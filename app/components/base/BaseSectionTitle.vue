<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    subtitle?: string
  }>(),
  { subtitle: '' }
)
</script>

<template>
  <header class="mb-8">
    <p v-if="subtitle" class="mb-2 text-accent text-sm uppercase tracking-wider">
      {{ subtitle }}
    </p>
    <h2 class="m-0 text-main text-2xl font-semibold leading-tight md:text-3xl">
      {{ title }}
    </h2>
  </header>
</template>
