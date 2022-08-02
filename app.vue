<template>
  <Head>
    <Link rel="icon" href="assets/i.ico" />
  </Head>
  <Header />
  <main p-4>
    <NuxtPage />
  </main>
  <Footer />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&display=swap');

body {
  --at-apply: m0 w-screen;
  font-family: 'Baloo 2';
}

#__nuxt {
  --at-apply: p-4 mx-auto prose prose-gray;
}

a {
  --at-apply: color-inherit;
}
</style>
