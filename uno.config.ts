import {
  type RuleContext,
  type CSSObject,
  defineConfig,
  presetAttributify,
  presetIcons,
  // presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetUseful } from 'unocss-preset-useful'
import { parseColor } from '@unocss/preset-mini/utils'

const typographyCssExtend: Record<string, CSSObject> = {
  'a': {
    'display': 'inline-block',
    'line-height': '1.5',
    'border-bottom': '1px dashed rgba(var(--c-context), 0.5)',
    'text-decoration': 'none',
    'transition': 'all 0.3s ease-in-out',
  },
  'a:hover': {
    'border-bottom': '1px solid rgba(var(--c-context), 1)',
  },
  // 'pre': {
  //   'background': '#eee !important',
  //   'font-family': 'sans',
  // },
  // '.dark pre': {
  //   background: '#222 !important',
  // },
  // 'blockquote': {
  //   'border-left': '0.1em solid rgba(168,85,247,.4)',
  // },
}

// const borderColorDefault = 'rgb(31 41 55 / 0.1)' // border-gray-800/10
const accentColor700 = 'rgb(42, 90, 203)' // custom accent color

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
    ['linkInProse', 'trans c-context underline hover:underline hover:decoration-solid decoration-dotted underline-offset-6'],

    [/^badge-(.*)$/, ([, c]) => `bg-${c}4:10 text-${c}5 rounded`],
    [/^badge-xs-(.*)$/, ([, c]) => `badge-${c} text-xs px2 py0.5`],
    [/^badge-sm-(.*)$/, ([, c]) => `badge-${c} text-sm px3 py0.6`],
    [/^badge-lg-(.*)$/, ([, c]) => `badge-${c} px3 py0.8`],
    [/^badge-square-(.*)$/, ([, c]) => `badge-${c} w-7 h-7 text-lg font-200 flex flex-none items-center justify-center`],
  ],
  rules: [
    [/^slide-enter-(\d+)$/, ([_, n]) => ({
      '--enter-stage': n,
    })],
    [/^o-(.*)$/, ([, body = '']: string[], { theme }: RuleContext) => {
      const color = parseColor(body, theme)
      if (color?.cssColor?.type === 'rgb' && color.cssColor.components) {
        return {
          '--c-context': `${color.cssColor.components.join(',')}`,
        }
      }
      else {
        return {
          '--c-context': color?.color,
        }
      }
    }],
    [/^(.+)::(.+)$/, ([, n, v], { theme }) => {
      const color = parseColor(v ?? '', theme)
      if (color?.cssColor?.type === 'rgb' && color.cssColor.components) {
        return {
          [`--${n}`]: `${color.cssColor.components.join(',')}`,
        }
      }
      return {
        [`--${n}`]: v,
      }
    }],
    [/^view-transition-([\w-]+)$/, ([, name]) => ({ 'view-transition-name': name })],
  ],
  theme: {
    colors: {
      context: 'rgba(var(--c-context),%alpha)',
      primary: {
        text: 'rgba(var(--text),%alpha)',
      },
      accent: {
        700: accentColor700,
      },
      optSecondary: {
        DEFAULT: 'rgb(212, 178, 255)',
      },
      frost: {
        DEFAULT: `rgb(255 255 255 / 0.25)`, // white/25
        200: `rgb(255 255 255 / 0.75)`, // white/75
      },
      level: {
        0: 'var(--gc-level-0)',
        1: 'var(--gc-level-1)',
        2: 'var(--gc-level-2)',
        3: 'var(--gc-level-3)',
        4: 'var(--gc-level-4)',
      },
    },
    fontFamily: {
      dank: 'dank',
      sans: 'DM Sans',
      mono: 'DM Mono',
      handwriting: 'Dancing Script cursive',
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
    presetWebFonts({
      fonts: {
        // sans: 'DM Sans:400, 500, 600, 700',
        // mono: 'DM Mono',
        // dank: 'Dank Mono, monospace',
      },
    }),
    presetUseful({
      typography: { cssExtend: typographyCssExtend },
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
