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
  content: {
    filesystem: ['content/**/*.md'],
  },
  shortcuts: [
    ['linear-text', 'text-transparent bg-clip-text bg-gradient-to-r'],
    ['text-p-r', 'linear-text from-cyan to-indigo'],
    ['text-p-r-r', 'linear-text from-teal to-indigo'],

    ['icon', 'w-4.5 h-4.5 cursor-pointer select-none transition-opacity-300 ease-in-out'],
    ['icon-btn', 'icon color-inherit op64 hover-op100 hover-color-teal-500 dark-hover-color-inherit'],
    ['icon-link', 'icon color-inherit op64 hover:op100 hover-text-red-300 dark-hover-color-inherit'],
    ['icon-text', 'color-inherit op64 hover:op100 hover-text-purple dark-hover-color-inherit'],
    ['linkInProse', 'trans c-context'],

    [/^badge-(.*)$/, ([, c]) => `bg-${c}4:10 text-${c}5 rounded`],
    [/^badge-xs-(.*)$/, ([, c]) => `badge-${c} text-xs px2 py0.5`],
    [/^badge-sm-(.*)$/, ([, c]) => `badge-${c} text-sm px3 py0.6`],
    [/^badge-lg-(.*)$/, ([, c]) => `badge-${c} px3 py0.8`],
    [/^badge-square-(.*)$/, ([, c]) => `badge-${c} w-7 h-7 text-lg font-200 flex flex-none items-center justify-center`],
  ],
  theme: {
    colors: {
      context: 'rgba(var(--c-context),%alpha)',
    },
    fontFamily: {
      dank: 'dank',
      sans: 'DM Sans',
      mono: 'DM Mono',
    },
  },
  presets: [
    presetUno({
      // dark: {
      //   dark: '.dark-mode',
      //   light: '.light-mode',
      // },
    }),
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
        // sans: 'DM Sans:400, 500, 600, 700',
        // mono: 'DM Mono',
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
