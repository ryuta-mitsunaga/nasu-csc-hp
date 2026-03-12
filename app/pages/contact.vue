<script setup lang="ts">
definePageMeta({
  layout: 'default',
})
</script>

<template>
  <div class="px-5 py-10">
    <div class="mx-auto max-w-[1080px]">
      <BaseSectionTitle title="お問い合わせ" subtitle="Contact" />
      <div class="prose text-text">
        <p>お問い合わせは以下の連絡先までお願いいたします。</p>
        <dl class="mt-8 space-y-4">
          <div>
            <dt class="text-main font-semibold">電話番号</dt>
            <dd class="mt-1">000-0000-0000</dd>
          </div>
          <div>
            <dt class="text-main font-semibold">メールアドレス</dt>
            <dd class="mt-1">
              <a href="mailto:info@example.com" class="text-accent hover:underline">info@example.com</a>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>
