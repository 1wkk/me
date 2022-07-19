const config = useRuntimeConfig()

export default defineEventHandler(() => ({
  p: config.p
}))
