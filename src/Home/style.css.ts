import { style, styleVariants, keyframes } from '@vanilla-extract/css'

import { luckyVickyText, pretendardText } from '../typography.css.ts'
import { SECONDARY, SHADOW, TYPOGRAPHY } from '../color.ts'
import copy from '../assets/copy.jpg'

export const heading = style({
  height: ['100dvh', '100vh'],
  width: '100vw',

  display: 'flex',
  flexDirection: 'column',
})

export const headlineBox = style({
  flex: 1,
  alignSelf: 'center',

  minHeight: '0',
  padding: '0 2.5rem',
})

export const headline = style({
  objectFit: 'contain',
  height: '100%',
  maxWidth: '100%',
})

export const main = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  overflow: 'hidden',

  marginTop: ['33dvh', '33vh']
})

export const catchphrase = style([luckyVickyText, {
  width: '80vw',

  color: SECONDARY,
  fontSize: '16rem',
  fontWeight: 'normal',
  lineHeight: '10rem',
  textAlign: 'center',

  marginTop: '0',
  marginBottom: ['10dvh', '10vh'],
}])

export const description = style([pretendardText, {
  width: '33vw',

  fontWeight: 500,
  fontSize: '0.9rem',
}])

export const congrats = style([luckyVickyText, {
  color: SHADOW,
  fontSize: '36rem',

  alignSelf: 'flex-start',

  marginTop: '-7rem',
  marginLeft: '-5rem',
}])

export const typographyBox = style({
  display: 'flex',
  flexDirection: 'column',
})

export const luckyVickyTypography = styleVariants({
  large: [luckyVickyText, {
    color: TYPOGRAPHY,
    fontSize: '45rem',
    lineHeight: '24rem'
  }],
  medium: [luckyVickyText, {
    color: TYPOGRAPHY,
    fontSize: '21rem',
    lineHeight: '12rem'
  }],
  small: [luckyVickyText, {
    color: TYPOGRAPHY,
    fontSize: '11.5rem',
    lineHeight: '8.5rem'
  }]
})

export const goodbye = style([luckyVickyText, {
  color: SHADOW,
  fontSize: '36rem',

  alignSelf: 'flex-end',

  marginTop: '-18rem',
  marginRight: '6rem',
}])


export const footer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  marginTop: '15rem',
  marginBottom: '4.2rem',
})

export const share = style([pretendardText, {
  fontSize: '1.25rem',
  fontWeight: 500,
}])

export const shareDescription = style([pretendardText, {
  fontSize: '0.7rem',

  marginTop: '0.7rem',
}])

export const copyButton = style({
  marginTop: '3.25rem',

  backgroundImage: `url(${copy})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  width: '3rem',
  height: '3rem',

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