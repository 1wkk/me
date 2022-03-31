import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages({
      extensions: ['vue', 'md'],
      dirs: 'pages',
      extendRoute: (route, parent) => {
        console.log(route)
      }
    })
  ]
})
