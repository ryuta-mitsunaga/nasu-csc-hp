<script setup lang="ts">
withDefaults(
  defineProps<{
    /** ローディングのサイズ（fallbackスロット未使用時） */
    loadingSize?: 'sm' | 'md' | 'lg'
  }>(),
  { loadingSize: 'md' }
)
</script>

<template>
  <ClientOnly>
    <slot />
    <template #fallback>
      <slot name="fallback">
        <BaseLoading :size="loadingSize" />
      </slot>
    </template>
  </ClientOnly>
</template>
