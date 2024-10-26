import { style, styleVariants } from '@vanilla-extract/css'
import { primaryText, unionText } from '../typography.css.ts'
import { BLACK } from '../color.ts'
import highlightBackground from '../assets/highlight.jpg'

export const header = style({
  display: 'flex',
  alignItems: 'center',

  padding: '0.9rem 2.8rem',

  backgroundColor: 'transparent',
})

export const titleBox = style({
  flex: 1,
})

export const title = style([unionText, {
  fontSize: '1.75rem',
  lineHeight: 1.8,
  color: BLACK,
  textDecoration: 'none',
}])

export const linkList = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '2.5rem',

  listStyle: 'none',

  paddingLeft: 0,
  margin: 0,
})

export const linkItem = styleVariants({
  normal: {
    padding: '1.125rem'
  },
  highlight: {
    padding: '1.125rem',

    backgroundImage: `url(${highlightBackground})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  }
})

const navLinkBase = style([unionText, {
  fontSize: '1.75rem',
  lineHeight: 1.8,
  textDecoration: 'none',
}])

export const navLink = styleVariants({
  normal: [navLinkBase, { color: BLACK }],
  currentPage: [navLinkBase, primaryText],
})