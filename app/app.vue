<template>
  <div>
    <NuxtLayout>
      <!-- <Transition name="page-fade" mode="out-in" appear> -->
        <NuxtPage />
      <!-- </Transition> -->
    </NuxtLayout>
  </div>
</template>

<style scoped>
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.35s ease;
}
.page-fade-enter-from,
.page-fade-leave-to {
  opacity: 0;
}
</style>
