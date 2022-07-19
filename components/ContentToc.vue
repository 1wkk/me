<!-- For [@nuxt/content](https://content.nuxtjs.org/) -->

<template>
  <ul v-if="toc.links.length">
    <li v-for="(h2, i) in toc.links" :key="i">
      {{ h2.text }}
      <ul v-if="h2.children">
        <li v-for="(h3, i) in h2.children" :key="i">{{ h3.text }}</li>
      </ul>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { ParsedContent } from "@nuxt/content-edge/dist/runtime/types";

interface Props {
  toc: ParsedContent;
}

const { toc } = defineProps<Props>();
</script>
