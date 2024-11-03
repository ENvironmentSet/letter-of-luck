import { keyframes, style, styleVariants } from '@vanilla-extract/css'
import { PRIMARY } from '../color.ts'
import { luckyVickyText } from '../typography.css.ts'

export const page = style({
  height: ['100vh', '100dvh'],

  display: 'flex',
  flexDirection: 'column',

  overflow: 'hidden',
})

export const main = style({
  flex: 1,

  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  zIndex: 1,
})

export const message = style([luckyVickyText, {
  color: PRIMARY,
  fontSize: '7rem',
  lineHeight: '4.5rem',

  zIndex: 1,

  margin: '0',
}])

const shoot = keyframes({
  from: {
    transform: 'translate(0, 0)',
  },
  to: {
    transform: `translate(var(--xOffSet), var(--yOffSet))`,
  }
})

const spin = keyframes({
  from: {
    transform: 'translate(var(--xOffSet), var(--yOffSet)) rotate(0deg)',
  },
  to: {
    transform: 'translate(var(--xOffSet), var(--yOffSet)) rotate(360deg)',
  }
})

export const clover = styleVariants({
  shot: {
    position: 'absolute',

    animationName: shoot,
    animationDuration: '0.5s',
    animationTimingFunction: 'ease-out',

    objectFit: 'contain'
  },
  spinning: {
    position: 'absolute',

    transform: `translate(var(--xOffSet), var(--yOffSet)) rotate(0deg)`,

    animationName: spin,
    animationDuration: '4s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',

    objectFit: 'contain'
  }
})

export const downloadButton = style({
  display: 'none'
})