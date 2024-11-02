import { style } from '@vanilla-extract/css'

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