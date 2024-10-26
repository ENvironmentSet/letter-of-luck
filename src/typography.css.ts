import { fontFace, style } from '@vanilla-extract/css'
import luckyVickyRegular from './assets/LuckyVicky-Regular.woff2'
import unionRegular from './assets/Union-Regular.woff2'
import { PRIMARY } from './color.ts'

const luckyVicky = fontFace({
  src: `url(${luckyVickyRegular}) format(woff2)`,
  fontDisplay: 'swap'
})

export const luckyVickyText = style({
  fontFamily: `${luckyVicky}, sans-serif`
})

const union = fontFace({
  src: `url(${unionRegular}) format(woff2)`,
  fontDisplay: 'swap'
})

export const unionText = style({
  fontFamily: `${union}, sans-serif`
})

export const primaryText = style({
  color: PRIMARY
})