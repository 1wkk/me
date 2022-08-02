<template>
  <div>
    <a :href="u" target="_blank" rel="noopener noreferrer" :title="n" :key="n">
      <div :class="i"></div>
      <div>
        <div>{{ n }}</div>
        <div>{{ d }}</div>
      </div>
    </a>
  </div>
</template>

<script lang="ts" setup>
import { Project } from '~~/pages/projects/index.vue'

const { project } = defineProps<{ project: Project }>()

const { u, n, d, i } = project
</script>
