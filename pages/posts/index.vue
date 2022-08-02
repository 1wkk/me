<template>
  <ContentList path="/posts" v-slot="{ list }">
    <ul list-none space-y-4xl>
      <li v-for="article in list" :key="article._path">
        <a :href="article._path" no-underline>
          <div text-lg hover:underline>{{ article.title }}</div>
          <div text-sm opacity-50>{{ article.c }}</div>
        </a>
      </li>
    </ul>
  </ContentList>
</template>

<style scoped></style>
