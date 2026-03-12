<script setup lang="ts">
withDefaults(
  defineProps<{
    /** ドットの総数（スライド数） */
    total: number
    /** 現在表示中のスライドインデックス（0始まり） */
    activeIndex?: number
  }>(),
  { activeIndex: 0 }
)
</script>

<template>
  <div
    v-if="total > 0"
    class="flex items-center justify-center gap-1.5 py-3 md:hidden"
    aria-label="左右にスワイプできます"
  >
    <span
      v-for="i in total"
      :key="i"
      class="h-1.5 w-1.5 rounded-full transition-colors duration-200"
      :class="i - 1 === activeIndex ? 'bg-main' : 'bg-muted/60'"
    />
  </div>
</template>
