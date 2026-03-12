<script setup lang="ts">
definePageMeta({
  layout: 'default',
})
</script>

<template>
  <div class="px-5 py-10">
    <div class="mx-auto max-w-[1080px]">
      <BaseSectionTitle title="組織概要" subtitle="Overview" />
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
              <td class="border border-border px-4 py-3 text-text">法人名称</td>
              <td class="border border-border px-4 py-3 text-text">（仮称）那須町総合型地域スポーツクラブ</td>
            </tr>
            <tr>
              <td class="border border-border px-4 py-3 text-text">代表者</td>
              <td class="border border-border px-4 py-3 text-text">代表者名を記載</td>
            </tr>
            <tr>
              <td class="border border-border px-4 py-3 text-text">所在地</td>
              <td class="border border-border px-4 py-3 text-text">栃木県那須町〇〇〇〇</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
