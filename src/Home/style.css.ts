import { style, styleVariants, keyframes } from '@vanilla-extract/css'

import { luckyVickyText, pretendardText } from '../typography.css.ts'
import { SECONDARY, SHADOW, TYPOGRAPHY } from '../color.ts'
import copy from '../assets/copy.jpg'

export const heading = style({
  width: '100vw',

  display: 'flex',
  flexDirection: 'column',

  '@media': {
    '(min-width: 768px)': {
      height: ['100vh', '100dvh'],
    }
  }
})

export const headerBox = style({
  isolation: 'isolate',
  zIndex: 2,
})

export const headlineBox = style({
  alignSelf: 'center',

  display: 'flex',
  flexDirection: 'column',

  minHeight: '0',

  '@media': {
    '(max-width: 767px)': {
      paddingTop: '2rem'
    },
    '(min-width: 768px)': {
      flex: 1,
    }
  }
})

export const headline = style({
  objectFit: 'contain',

  width: '100vw',
  padding: '0 2.5rem',
  boxSizing: 'border-box',

  userSelect: 'none',

  '@media': {
    '(min-width: 768px)': {
      flex: 1,

      maxHeight: '100%',
    },
    '(max-width: 767px)': {
      height: '60vw',
    }
  }
})

export const main = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  marginTop: ['33vh', '33dvh'],

  '@media': {
    '(max-width: 767px)': {
      marginTop: ['7vh', '7dvh'],
    }
  }
})

export const catchphrase = style([luckyVickyText, {
  width: '80vw',

  color: SECONDARY,
  fontSize: '16rem',
  fontWeight: 'normal',
  lineHeight: '10rem',
  textAlign: 'center',

  marginTop: '0',
  marginBottom: ['10vh', '10dvh'],

  '@media': {
    '(min-width: 768px) and (max-width: 1199px)': {
      fontSize: '12rem',
      lineHeight: '7.5rem',
    },
    '(min-width: 320px) and (max-width: 767px)': {
      fontSize: '10rem',
      lineHeight: '6rem',

      marginBottom: ['7vh', '7dvh'],
    },
  }
}])

export const description = style([pretendardText, {
  width: '33vw',

  fontWeight: 500,
  fontSize: '0.9rem',
  lineHeight: '1.5rem',

  '@media': {
    '(min-width: 768px) and (max-width: 1199px)': {
      width: '55vw',
    },
    '(min-width: 320px) and (max-width: 767px)': {
      width: '60vw',

      fontSize: '1rem',
    }
  }
}])

export const congrats = style([luckyVickyText, {
  color: SHADOW,
  fontSize: '36rem',

  alignSelf: 'flex-start',

  marginTop: '-7rem',
  marginLeft: '-5rem',

  '@media': {
    '(min-width: 768px) and (max-width: 1199px)': {
      marginTop: '-5rem',
      fontSize: '24rem',
    },
    '(min-width: 320px) and (max-width: 767px)': {
      marginTop: '-3rem',
      marginLeft: '-2rem',
      fontSize: '16rem',
    }
  }
}])

export const cat = style({
  alignSelf: 'flex-end',

  opacity: 0.5,

  objectFit: 'contain',
  width: '45vw',
  aspectRatio: 166 / 300,

  marginTop: ['-15vh', '-15dvh'],
  marginRight: '3.5rem'
})

export const typographyBox = style({
  display: 'flex',
  flexDirection: 'column',

  padding: '3rem',
})

export const luckyVickyTypography = styleVariants({
  large: [luckyVickyText, {
    color: TYPOGRAPHY,
    fontSize: '42rem',
    lineHeight: '22rem',

    '@media': {
      '(min-width: 768px) and (max-width: 1199px)': {
        fontSize: '28rem',
        lineHeight: '15rem',
      },
      '(min-width: 320px) and (max-width: 767px)': {
        fontSize: '16rem',
        lineHeight: '8rem',
      }
    }
  }],
  medium: [luckyVickyText, {
    color: TYPOGRAPHY,
    fontSize: '21rem',
    lineHeight: '12rem',

    '@media': {
      '(min-width: 768px) and (max-width: 1199px)': {
        fontSize: '14rem',
        lineHeight: '8rem',
      },
      '(min-width: 320px) and (max-width: 767px)': {
        fontSize: '9rem',
        lineHeight: '5rem',
      }
    }
  }],
  small: [luckyVickyText, {
    color: TYPOGRAPHY,
    fontSize: '11.5rem',
    lineHeight: '8.5rem',

    '@media': {
      '(min-width: 768px) and (max-width: 1199px)': {
        fontSize: '8rem',
        lineHeight: '6rem',
      },
      '(min-width: 320px) and (max-width: 767px)': {
        fontSize: '5rem',
        lineHeight: '4rem',
      }
    }
  }]
})

export const ohlala = style({
  letterSpacing: '-1.8rem',

  '@media': {
    '(min-width: 768px) and (max-width: 1199px)': {
      letterSpacing: '-1rem',
    },
    '(min-width: 320px) and (max-width: 767px)': {
      letterSpacing: '-0.6rem',
    }
  }
})

export const goodbye = style([luckyVickyText, {
  color: SHADOW,
  fontSize: '36rem',

  alignSelf: 'flex-end',

  marginTop: '-18rem',

  '@media': {
    '(min-width: 768px) and (max-width: 1199px)': {
      fontSize: '22rem',
      marginTop: '-12rem',
    },
    '(min-width: 320px) and (max-width: 767px)': {
      fontSize: '16rem',
      marginTop: '-6rem',
    }
  }
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

export const sticker= style({
  position: 'absolute',

  objectFit: 'contain',

  cursor: 'grab',
  userSelect: 'none',

  transition: 'transform 250ms',

  ':hover': {
    transform: 'scale(1.1)'
  }
})

export const stickerBox = style({
  isolation: 'isolate',
  zIndex: 1,
})