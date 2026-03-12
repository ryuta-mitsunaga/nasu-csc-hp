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
  <header class="mb-6">
    <p v-if="subtitle" class="mb-1 text-muted text-sm uppercase tracking-wider">
      {{ subtitle }}
    </p>
    <h2 class="m-0 text-main text-xl font-medium leading-tight md:text-2xl">
      {{ title }}
    </h2>
  </header>
</template>
