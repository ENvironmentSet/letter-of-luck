import { style } from '@vanilla-extract/css'
import { luckyVickyText, pretendardText } from '../typography.css.ts'
import { SECONDARY, SHADOW } from '../color.ts'

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

  overflowX: 'hidden',
  overflowY: 'visible',

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