import { keyframes, style } from '@vanilla-extract/css'
import { BLACK, LETTER_BACKGROUND } from '../color.ts'
import { luckyVickyText } from '../typography.css.ts'

export const page = style({
  height: ['100dvh', '85vh'],

  display: 'flex',
  flexDirection: 'column',

  overflow: 'hidden',
})

export const scene = style({
  flex: 1,

  isolation: 'isolate',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  perspective: '1600px',
})

export const letterBox = style({
  transformStyle: 'preserve-3d',
  transform: 'translateZ(0px)',
  willChange: 'transform',
})

const spin = keyframes({
  from: {
    transform: 'rotateZ(-22.25deg) rotateY(0deg)',
  },
  to: {
    transform: 'rotateZ(-22.25deg) rotateY(360deg)',
  }
})

export const spinLetter = style({
  animationName: spin,
  animationDuration: '30s',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'linear',
})

export const letter = style({
  position: 'relative',

  width: '36rem',
  height: '50rem',
  maxHeight: '50rem',

  transformStyle: 'preserve-3d',
  transform: 'rotateZ(-22.25deg) rotateY(0deg)',
  willChange: 'transform',
})

export const letterFace = style([luckyVickyText, {
  position: 'absolute',

  width: '100%',
  height: '100%',
  resize: 'none',

  color: BLACK,
  fontSize: '6rem',
  lineHeight: '4.38rem',
  fontWeight: 100,
  backgroundColor: LETTER_BACKGROUND,
  outline: 'none',

  padding: '3rem 1.8rem',
  border: 'none',

  backfaceVisibility: 'hidden',

  '::placeholder': {
    color: BLACK
  },
}])

