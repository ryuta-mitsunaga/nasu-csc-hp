<script setup lang="ts">
definePageMeta({
  layout: 'default',
})
</script>

<template>
  <div class="px-5 py-20">
    <div class="mx-auto max-w-[1080px]">
      <BaseSectionTitle title="入会案内" subtitle="Membership" />
      <div class="overflow-x-auto">
        <table class="w-full border-collapse border border-border">
          <thead>
            <tr class="bg-bg">
              <th class="border border-border px-4 py-3 text-left text-main font-semibold">項目</th>
              <th class="border border-border px-4 py-3 text-left text-main font-semibold">内容</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-border px-4 py-3 text-text">入会方法</td>
              <td class="border border-border px-4 py-3 text-text">入会申込書の提出</td>
            </tr>
            <tr>
              <td class="border border-border px-4 py-3 text-text">連絡先</td>
              <td class="border border-border px-4 py-3 text-text">電話・メールにてお問い合わせください</td>
            </tr>
            <tr>
              <td class="border border-border px-4 py-3 text-text">電話番号</td>
              <td class="border border-border px-4 py-3 text-text">000-0000-0000</td>
            </tr>
            <tr>
              <td class="border border-border px-4 py-3 text-text">メールアドレス</td>
              <td class="border border-border px-4 py-3 text-text">info@example.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
