<script setup lang="ts"></script>

<template>
  <section class="relative flex min-h-[70vh] w-full items-center justify-center overflow-hidden">
    <div class="flex flex-col items-center justify-center gap-8 px-5 py-16">
      <!-- <Transition name="fade"> -->
        <img
          src="/hero-icon.png"
          alt="那須町総合型地域スポーツクラブ"
          class="max-h-[min(50vh,320px)] w-auto object-contain max-w-[1080px]"
          fetchpriority="high"
        />
      <!-- </Transition> -->
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
