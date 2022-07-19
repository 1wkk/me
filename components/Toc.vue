<template>
  <ul
    v-if="toc.links.length"
    hidden
    lg:block
    fixed
    top-30
    right-30
    text-sm
    list-none
    opacity-25
    hover:opacity-75
    transition
    transition-duration-500
  >
    <li v-for="(h2, i) in toc.links" :key="i" m-14px>
      <NuxtLink :to="`#${h2.id}`">{{ h2.text }}</NuxtLink>
      <ul v-if="h2.children" list-none>
        <li v-for="(h3, i) in h2.children" :key="i" m-14px>
          <NuxtLink :to="`#${h3.id}`">{{ h3.text }}</NuxtLink>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { ParsedContent } from '@nuxt/content-edge/dist/runtime/types'

interface Props {
  toc: ParsedContent
}

const { toc } = defineProps<Props>()
</script>
