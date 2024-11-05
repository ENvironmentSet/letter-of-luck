import { style, styleVariants } from '@vanilla-extract/css'

import { plainText, primaryText, unionText } from '../typography.css.ts'

import eventHighlight from '../assets/event-highlight.svg'
import eventHighlightActive from '../assets/event-highlight-active.svg'

export const header = style({
  display: 'flex',
  alignItems: 'center',

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

const eventNavItemBase = style({
  display: 'flex',
  placeItems: 'center',

  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  backgroundPosition: 'center',

  height: '3rem',
  padding: '1rem',
  marginLeft: '-1rem'
})

export const eventNavItem = styleVariants({
  inactive: [eventNavItemBase, {
    backgroundImage: `url(${eventHighlight})`,
  }],
  active: [eventNavItemBase, {
    backgroundImage: `url(${eventHighlightActive})`,
  }]
})

const linkBase = style([unionText, {
  display: 'block',

  fontSize: '1.5rem',
  fontWeight: 500,

  textDecoration: 'none',
}])

export const link = styleVariants({
  normal: [linkBase, plainText],
  currentPage: [linkBase, primaryText]
})
