import { style, styleVariants } from '@vanilla-extract/css'

import { plainText, primaryText, unionText } from '../typography.css.ts'

import eventHighlight from '../assets/event-highlight.jpg'

export const header = style({
  display: 'flex',
  alignItems: 'center',

  height: '3.9rem',

  padding: '0 1.56rem',
})

export const navBox = style({
  flex: 1,
})

export const navList = style({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '2rem',

  listStyle: 'none',

  padding: '0',
  margin: '0',
})

export const eventNavItem = style({
  display: 'flex',
  placeItems: 'center',

  backgroundImage: `url(${eventHighlight})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  backgroundPosition: 'center',

  height: '3rem',
  padding: '0.625rem',
  marginLeft: '-0.625rem'
})

const linkBase = style([unionText, {
  display: 'block',

  textDecoration: 'none',
}])

export const link = styleVariants({
  normal: [linkBase, plainText],
  currentPage: [linkBase, primaryText]
})
