<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: 'sm' | 'md' | 'lg'
  }>(),
  { size: 'md' }
)
</script>

<template>
  <div
    class="flex items-center justify-center gap-1.5 py-12"
    role="status"
    aria-label="読み込み中"
  >
    <span
      v-for="i in 3"
      :key="i"
      class="loading-dot rounded-full bg-accent"
      :class="{
        'h-1.5 w-1.5': size === 'sm',
        'h-2 w-2': size === 'md',
        'h-2.5 w-2.5': size === 'lg',
      }"
      :style="{ animationDelay: `${(i - 1) * 0.16}s` }"
    />
  </div>
</template>

<style scoped>
.loading-dot {
  animation: loading-bounce 1.4s ease-in-out infinite;
}

@keyframes loading-bounce {
  0%,
  80%,
  100% {
    transform: scale(0.6);
    opacity: 0.5;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
