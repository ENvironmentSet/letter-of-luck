import { style } from '@vanilla-extract/css'
import highlightBackground from './assets/highlight.jpg'

const highlight = style({
  padding: '1.125rem',

  backgroundImage: `url(${highlightBackground})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
})

export default highlight