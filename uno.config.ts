import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    [/^badge-(.*)$/, ([, c]) => `bg-${c}4:10 text-${c}5 rounded`],
    [/^badge-xs-(.*)$/, ([, c]) => `badge-${c} text-xs px2 py0.5`],
    [/^badge-sm-(.*)$/, ([, c]) => `badge-${c} text-sm px3 py0.6`],
    [/^badge-lg-(.*)$/, ([, c]) => `badge-${c} px3 py0.8`],
    [/^badge-square-(.*)$/, ([, c]) => `badge-${c} w-7 h-7 text-lg font-200 flex flex-none items-center justify-center`],
  ],
  theme: {
    colors: {
      // ...
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'height': '1.2em',
        'width': '1.2em',
        'vertical-align': 'text-bottom',
      },
    }),
    presetTypography({
      cssExtend: {
        a: {
          // eslint-disable-next-line @stylistic/quote-props
          color: 'inherit',
          'font-weigth': '700',
          'text-decoration': 'none',
        },
      },
    }),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans:400, 500, 600, 700',
        mono: 'DM Mono',
        // dank: 'Dank Mono, monospace',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: [
    'i-ri-menu-2-fill',
    Array.from({ length: 5 }, (j, i) => `fill-level-${i}`),
    'sm-fsc max-w-75'.split(' '),
  ].flat(),
})
