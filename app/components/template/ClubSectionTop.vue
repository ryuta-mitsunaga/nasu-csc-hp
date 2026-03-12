<script setup lang="ts">
import type { ClubItem } from '~/types/club'
import { Swiper, SwiperSlide } from 'swiper/vue'

const { data: clubs } = await useFetch<ClubItem[]>('/api/clubs?limit=3')

const activeSlideIndex = ref(0)

const swiperOptions = {
  slidesPerView: 1,
  spaceBetween: 16,
  grabCursor: true,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
  },
}

function onSwiper(swiper: { activeIndex: number }) {
  activeSlideIndex.value = swiper.activeIndex
}

function onSlideChange(swiper: { activeIndex: number }) {
  activeSlideIndex.value = swiper.activeIndex
}
</script>

<template>
  <section id="clubs" class="px-5 py-10">
    <div class="mx-auto max-w-[1080px]">
      <BaseSectionTitleCompact title="活動クラブ" subtitle="Activity Clubs" />
      <p class="mb-6 text-text text-base leading-relaxed md:text-lg">
        那須町総合型地域スポーツクラブでは、様々な活動クラブが活動しています。
      </p>

      <div class="mb-6">
        <BaseClientOnly loading-size="sm">
          <div>
            <Swiper
              v-bind="swiperOptions"
              class="club-swiper -mx-5 md:mx-0"
              @swiper="onSwiper"
              @slide-change="onSlideChange"
            >
              <SwiperSlide
                v-for="club in clubs ?? []"
                :key="club.id"
                class="!h-auto"
              >
                <BaseClubCard
                  :club="{ id: club.id, name: club.name, thumbnail: club.thumbnail }"
                />
              </SwiperSlide>
            </Swiper>
            <BaseSwipeHint
              :total="(clubs ?? []).length"
              :active-index="activeSlideIndex"
            />
          </div>
        </BaseClientOnly>
      </div>

      <BaseLinkToList text="活動クラブ" to="/clubs" size="compact" />
    </div>
  </section>
</template>

<style scoped>
.club-swiper :deep(.swiper-slide) {
  height: auto;
}
</style>
