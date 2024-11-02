import { globalStyle } from '@vanilla-extract/css';

globalStyle('#root', {
  isolation: 'isolate'
});

globalStyle('html', {
  '@media': {
    '(min-width: 320px)': {
      fontSize: '8px',
    },
    '(min-width: 480px)': {
      fontSize: '10px',
    },
    '(min-width: 768px)': {
      fontSize: '12px',
    },
    '(min-width: 1200px)': {
      fontSize: '14px',
    },
    '(min-width: 1400px)': {
      fontSize: '16px',
    },
    '(min-width: 1920px)': {
      fontSize: '20px',
    }
  }
})