import Header from '../Header/component.tsx'
import { useEffect, useRef } from 'react'
import { clover, downloadButton, main, message, page } from './style.css.ts'

import font from '../assets/LuckyVicky-Regular.otf'
import cloverEmpty from '../assets/clover-empty.svg'
import cloverEmptyLarge from '../assets/clover-empty-large.svg'
import cloverFilled from '../assets/clover-filled.svg'

export default function Download() {
  const downloadLink = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (downloadLink.current) {
      downloadLink.current.click()
    }
  }, []);

  return (
    <>
      <div className={page}>
        <Header />
        <main className={main}>
          <p className={message}>다운로드가 진행 중입니다!</p>
          <p className={message}>행복한 메시지를</p>
          <p className={message}>널리널리 퍼뜨려주세요.</p>

          <Clover size='30vw' offset={{ x: '-43vw', y: '-18vh' }} src={cloverEmptyLarge} />
          <Clover size='5vw' offset={{ x: '5vw', y: '-32vh' }} src={cloverEmpty} />
          <Clover size='3vw' offset={{ x: '9vw', y: '-11vh' }} src={cloverFilled} />
          <Clover size='2vw' offset={{ x: '28vw', y: '-38vh' }} src={cloverFilled} />
          <Clover size='6vw' offset={{ x: '40vw', y: '-22vh' }} src={cloverFilled} />
          <Clover size='5vw' offset={{ x: '34vw', y: '14vh' }} src={cloverEmpty} />
          <Clover size='20vw' offset={{ x: '14vw', y: '34vh' }} src={cloverFilled} />
          <Clover size='5vw' offset={{ x: '-16vw', y: '22vh' }} src={cloverFilled} />
        </main>
      </div>
      <a href={font} download ref={downloadLink} className={downloadButton} />
    </>
  )
}

interface CloverProps {
  offset: { x: string, y: string }
  size: string
  src: string
}

function Clover({ offset, size, src }: CloverProps) {
  const isSpinning = useRef(false)

  return (
    <img
      className={clover.shot}
      src={src}
      style={{ width: size,'--xOffSet': offset.x, '--yOffSet': offset.y  } as Record<string, unknown>}
      onAnimationEnd={event => {
        if (isSpinning.current) return;

        event.currentTarget.classList.remove(clover.shot)
        event.currentTarget.classList.add(clover.spinning)
      }}
    />
  )
}