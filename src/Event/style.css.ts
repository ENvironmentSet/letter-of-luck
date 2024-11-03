import { keyframes, style } from '@vanilla-extract/css'
import { luckyVickyText, pretendardText } from '../typography.css.ts'
import { BEIGE, BLACK } from '../color.ts'

export const page = style({
  height: ['100vh', '100dvh'],
  width: '100vw',

  display: 'flex',
  flexDirection: 'column',

  overflow: 'hidden',
})

export const main = style({
  flex: 1,

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const article = style({
  padding: '0 3.2rem',

  marginTop: '1.8rem',
})

export const title = style([luckyVickyText, {
  fontSize: '9rem',
  lineHeight: '6rem',
  fontWeight: 400,

  margin: '0',
}])

export const description = style([pretendardText, {
  fontSize: '1.2rem',

  marginTop: '2.8rem',
  marginBottom: '0',

  '@media': {
    '(min-width: 768px)': {
      width: '38vw',
    }
  }
}])

export const link = style({
  color: BLACK,
  textDecoration: 'none',
})

export const sliderBox = style({
  height: ['50vh', '50dvh'],
  width: '100vw',

  overflow: 'hidden',
})

const autoSlideLargeDevice = keyframes({
  from: {
    transform: 'translateX(0vw)',
  },
  to: {
    transform: 'translateX(-300vw)',
  }
})

const autoSlideSmallDevice = keyframes({
  from: {
    transform: 'translateX(0vw)',
  },
  to: {
    transform: 'translateX(-1200vw)',
  }
})

export const slider = style({
  display: 'flex',
  flexWrap: 'nowrap',

  height: '100%',

  transform: 'translateX(0vw)',
  willChange: 'transform',

  animationName: autoSlideLargeDevice,
  animationTimingFunction: 'linear',
  animationIterationCount: 'infinite',
  animationDuration: '120s',

  '@media': {
    '(max-width: 1199px)': {
      animationName: autoSlideSmallDevice,
      animationDuration: '60s',

      marginTop: '10rem'
    }
  }
})

export const slide = style({
  objectFit: 'cover',
  minWidth: '0px',
  width: '25vw',
  flexShrink: 0,

  backfaceVisibility: 'hidden',

  '@media': {
    '(max-width: 1199px)': {
      width: '100vw',
    }
  }
})


export const credit = style({
  flex: 1,

  display: 'flex',
  flexDirection: 'column',

  backgroundColor: BEIGE,

  padding: '8rem 5rem 2rem 5rem',

  marginTop: '8rem'
})

export const contributors = style({
  flex: 1,

  alignSelf: 'flex-end',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '0.4rem',
})

export const contributor = style([pretendardText, {
  margin: '0'
}])

export const name = style({
  marginLeft: '1.2rem',

  color: BLACK,
  textDecoration: 'none',
})

export const copyright = style([pretendardText, {
  margin: '0',
  alignSelf: 'flex-start'
}])