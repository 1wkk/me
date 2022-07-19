import { defineNuxtConfig } from 'nuxt'
import transformerDirective from '@unocss/transformer-directives'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  modules: ['@nuxt/content-edge', '@unocss/nuxt'],
  runtimeConfig: {
    p: ''
  },
  experimental: {
    reactivityTransform: true
  },
  unocss: {
    uno: true, // enable `@unocss/preset-uno`
    icons: {
      scale: 1.5,
      collections: {
        // @ts-ignore
        all: () => import('@iconify/json').then(i => i.default)
      }
    }, // enable `@unocss/preset-icons`
    attributify: true, // enable `@unocss/preset-attributify`,
    typography: true, // enable `@unocss/preset-typography`
    transformers: [transformerDirective()],
    // core options
    shortcuts: [],
    rules: []
  },
  content: {
    highlight: {
      theme: 'github-light'
    }
  }
})
