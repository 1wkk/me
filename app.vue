<template>
  <Head>
    <Link rel="icon" href="assets/i.ico" />
  </Head>
  <Header />
  <NuxtPage />
  <Footer />
</template>

<style>
body {
  --at-apply: m0 w-screen;
}

#__nuxt {
  --at-apply: p-8 mx-auto prose prose-gray;
}

a {
  --at-apply: color-inherit;
}
</style>
