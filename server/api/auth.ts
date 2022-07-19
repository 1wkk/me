import { defineHandler } from 'h3'

const config = useRuntimeConfig()

export default defineEventHandler(() => ({
  p: config.p
}))
