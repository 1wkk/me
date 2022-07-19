<template>
  <main prose prose-gray p-8>
    <ContentQuery :path="$route.path" v-slot="{ data }" find="one">
      <h1>{{ data.title }}</h1>
      <div text-sm opacity-50 pl-1>{{ data.c }}</div>
      <ContentRenderer :value="data" />
      <Toc :toc="data.body.toc" />
    </ContentQuery>
  </main>
</template>
