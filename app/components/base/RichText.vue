<script setup lang="ts">
defineProps<{
  html: string
}>()
</script>

<template>
  <div
    class="rich-text"
    v-html="html"
  />
</template>

<style scoped>
.rich-text :deep(p) {
  margin: 0 0 1em;
  line-height: 1.9;
}

.rich-text :deep(p:last-child) {
  margin-bottom: 0;
}

.rich-text :deep(h1),
.rich-text :deep(h2),
.rich-text :deep(h3),
.rich-text :deep(h4) {
  margin: 1.5em 0 0.5em;
  font-weight: 600;
  line-height: 1.4;
}

.rich-text :deep(h1) { font-size: 1.5em; }
.rich-text :deep(h2) { font-size: 1.25em; }
.rich-text :deep(h3) { font-size: 1.125em; }
.rich-text :deep(h4) { font-size: 1em; }

.rich-text :deep(ul),
.rich-text :deep(ol) {
  margin: 0.75em 0;
  padding-left: 1.5em;
}

.rich-text :deep(ul) {
  list-style-type: disc;
}

.rich-text :deep(ol) {
  list-style-type: decimal;
}

.rich-text :deep(li) {
  margin-bottom: 0.25em;
  line-height: 1.7;
}

.rich-text :deep(li::marker) {
  color: var(--color-main);
}

.rich-text :deep(a) {
  color: var(--color-accent);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.rich-text :deep(a:hover) {
  color: var(--color-main-deep);
}

.rich-text :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: 6px;
  margin: 1em 0;
}

.rich-text :deep(strong) {
  font-weight: 600;
}

.rich-text :deep(blockquote) {
  margin: 1em 0;
  padding-left: 1em;
  border-left: 3px solid var(--color-border);
  color: var(--color-muted);
}

/* テーブル */
.rich-text :deep(table) {
  display: table;
  width: 100%;
  margin: 1em 0;
  border-collapse: collapse;
  font-size: 0.9375em;
}

.rich-text :deep(thead) {
  display: table-header-group;
}

.rich-text :deep(tbody) {
  display: table-row-group;
}

.rich-text :deep(tr) {
  display: table-row;
}

.rich-text :deep(th),
.rich-text :deep(td) {
  display: table-cell;
  padding: 0.5em 0.75em;
  border: 1px solid var(--color-border);
  text-align: left;
  vertical-align: top;
}

.rich-text :deep(th) {
  font-weight: 600;
  background-color: var(--color-bg-soft);
  color: var(--color-main-deep);
}

.rich-text :deep(tbody tr:nth-child(even)) {
  background-color: var(--color-overlay);
}

.rich-text :deep(tbody tr:hover) {
  background-color: var(--color-bg-soft);
}
</style>
