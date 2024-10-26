import { fontFace, style } from '@vanilla-extract/css'
import luckyVickyRegular from './assets/LuckyVicky-Regular.woff2'

const luckyVicky = fontFace({
  src: `url(${luckyVickyRegular}) format(woff2)`,
  fontDisplay: 'swap'
})

export const font = style({
  fontFamily: `${luckyVicky}, sans-serif`
})