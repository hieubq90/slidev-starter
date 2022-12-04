import AsUI from '@alvarosabu/ui/'
import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetIcons,
  presetWebFonts,
  presetTypography,
  transformerDirectives,
  transformerVariantGroup,
  Preset,
} from 'unocss'

export default defineConfig({
  theme: { ...AsUI.unoconfig.theme },
  shortcuts: AsUI.unoconfig.shortcuts,
  rules: AsUI.unoconfig.rules,
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        ...AsUI.unoconfig.fonts.fonts,
        sans: ['Inter', 'Inter:400,700'],
        display: ['Paytone One'],
      },
    }) as unknown as Preset,
    presetTypography({
      cssExtend: {
        ...AsUI.unoconfig.typography.cssExtend,
        h1: { 'font-family': 'Paytone One' },
        h2: { 'font-family': 'Paytone One' },
        h3: { 'font-family': 'Paytone One' },
        p: { 'font-family': 'Inter', 'font-size': '1.125rem' },
        li: { 'font-family': 'Inter', 'font-size': '1.125rem', 'line-height': '1.5rem' },
      },
    }) as unknown as Preset,
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
