// @ts-check
import unocss from '@unocss/eslint-config/flat'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
)

export const overrides = [
  {
    files: ['**/*.vue'],
    extends: unocss,
  },
]
