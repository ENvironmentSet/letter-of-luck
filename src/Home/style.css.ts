import { style, styleVariants, keyframes } from '@vanilla-extract/css'
import { luckyVickyText, pretendardText } from '../typography.css.ts'
import { SECONDARY, SHADOW, TYPOGRAPHY } from '../color.ts'

import copy from '../assets/copy.jpg'

export const headlineSection = style({
  display: 'flex',
  flexDirection: 'column',

  height: ['100dvh', '100vh'],
})

export const headlineBox = style({
  flex: 1,
  alignSelf: 'center',
  minHeight: 0,
})

export const headline = style({
  objectFit: 'contain',

  height: '100%',
})

export const main = style({
  display: 'flex',
  flexDirection: 'column',

  marginTop: ['33dvh', '33vh'],
})

export const catchphrase = style([luckyVickyText, {
  color: SECONDARY,
  fontSize: '8rem',
  textAlign: 'center',
  lineHeight: 1.8,

  padding: '0 14.625rem',

  margin: 0,
}])

export const introduction = style([pretendardText, {
  lineHeight: 1.8,
  letterSpacing: '-1%',
  fontSize: '1.125rem',
  fontWeight: 600,

  padding: '0 42rem',
  marginBottom: 0,
}])

export const congrats = style([luckyVickyText, {
  position: 'relative',
  right: '6rem',

  color: SHADOW,
  fontSize: '18rem',

  marginTop: '7rem',
}])

export const showcase = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',

  marginTop: '35rem',
})

export const typography = styleVariants({
  large: [luckyVickyText, {
    color: TYPOGRAPHY,
    fontSize: '19.375rem',
    lineHeight: 1.8,
  }],
  medium: [luckyVickyText, {
    color: TYPOGRAPHY,
    fontSize: '10rem',
  }],
  small: [luckyVickyText, {
    color: TYPOGRAPHY,
    fontSize: '5.25rem',
    lineHeight: 1.6,
  }]
})

export const bye = style([luckyVickyText, {
  position: 'relative',
  right: '10rem',

  alignSelf: 'flex-end',

  color: SHADOW,
  fontSize: '16.15rem',
}])

export const footer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  marginTop: '22rem',
})

export const share = style([pretendardText, {
  lineHeight: 1.8,
  fontSize: '2rem',
  fontWeight: 600,
}])

export const shareDescription = style([pretendardText, {
  fontSize: '1.125rem',
  fontWeight: 500,
}])

export const copyButton = style({
  marginTop: '3.25rem',

  backgroundImage: `url(${copy})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  width: '5.5rem',
  height: '5.5rem',

  border: 'none',
  padding: 0,
  backgroundColor: 'transparent',
})

const rotate = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' }
})

export const spin = style({
  animationName: rotate,
  animationDuration: '1.5s'
})