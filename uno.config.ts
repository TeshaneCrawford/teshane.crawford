import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
    presetWebFonts,
    transformerDirectives,
    transformerVariantGroup
  } from 'unocss'
  
  export default defineConfig({
    shortcuts: [
      // ...
    ],
    theme: {
      colors: {
        // ...
      }
    },
    presets: [
      presetUno(),
      presetAttributify(),
      presetIcons(),
      presetTypography(),
      presetWebFonts({
        fonts: {
            sans: 'DM Sans, sans-serif',
            mono: 'DM Mono, monospace',
            dank: 'Dank Mono, monospace',
        },
      }),
    ],
    transformers: [
      transformerDirectives(),
      transformerVariantGroup(),
    ],
  })