<template>
  <div v-for="project in projects">
    <Project :project="project" />
  </div>
</template>

<script lang="ts" setup>
export interface Project {
  n: string
  d: string
  u: string
  i: string
}

const projects: Array<Project> = [
  {
    n: 'Hitokoto',
    d: 'Beautiful chrome://newtab',
    u: 'https://github.com/echoeureka/hitokoto',
    i: 'i-icon-park-outline-browser-chrome'
  }
]
</script>
