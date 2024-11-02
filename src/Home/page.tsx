import { useRef, useState } from 'react'
import clsx from 'clsx'

import Header from '../Header/component.tsx'
import {
  catchphrase,
  congrats, copyButton,
  description, footer, goodbye,
  heading,
  headline,
  headlineBox,
  luckyVickyTypography,
  main, share, shareDescription, spin, typographyBox, ohlala, sticker, headerBox, stickerBox, catStickerBox
} from './style.css.ts'

import headline320x from '../assets/headline-320x.png'
import headline480x from '../assets/headline-480x.png'
import headline768x from '../assets/headline-768x.png'
import headline1200x from '../assets/headline-1200x.png'
import headline1920x from '../assets/headline-1920x.png'
import faceSticker from '../assets/face-sticker.png'
import letterSticker from '../assets/letter-sticker.png'
import heartSticker from '../assets/heart-sticker.png'
import smileSticker from '../assets/smile-sticker.png'
import catSticker from '../assets/cat-sticker.png'

export default function Home() {
  return (
    <>
      <section className={heading}>
        <div className={headerBox}>
          <Header />
        </div>

        <picture className={headlineBox}>
          <source
            media='(max-width: 767px)'
            srcSet={`
              ${headline320x} 298w,
              ${headline480x} 429w,
            `}
          />
          <source
            media='(min-width: 768px)'
            srcSet={`
              ${headline768x} 700w,
              ${headline1200x} 1119w,
              ${headline1920x} 1759w,
            `}
          />
          <img
            src={headline1920x}
            alt='이 행운의 편지는 영국에서 최초로 시작되어...'
            className={headline}
            onDragStart={event => event.preventDefault()}
          />
        </picture>

        <div className={stickerBox}>
          <Sticker src={faceSticker} initialPosition={{ x: '12vw', y: '5vh' }} size='8vw' />
          <Sticker src={smileSticker} initialPosition={{ x: '7vw', y: '30vh' }} size='45vw' />
          <Sticker src={letterSticker} initialPosition={{ x: '40vw', y: '26vh' }} size='20vw' />
          <Sticker src={heartSticker} initialPosition={{ x: '72vw', y: '64vh' }} size='21vw' opacity={0.5} />
        </div>
      </section>
      <main className={main}>
        <h1 className={catchphrase}>
          행복을 전하는 메세지를 입력해보세요!
        </h1>

        <p className={description}>
          사람들과 주고받는 따뜻한 말들이 줄어들고, 함께하는 기쁨이 점점 사라져 가고 있는 것 같습니다.
          만약 조금 더 유쾌하고 재밌는 말들이 오간다면, 우리 사회가 좀 더 부드럽고 따뜻하고,
          말랑말랑하고 아카시아 꽃 향기 나는 곳이 될 수 있지 않을까요?
        </p>
        <p className={description}>
          그래서 만들었습니다. 경쾌하고 즐거운 메게지를 위한 서체 "러키비키 야-야"!
          리듬감 있는 두꺼운 획과 웃는 모양의 빈 공간이 특징인 이 서체를, 기쁨과 활기를 담은 글을 쓸 때 사용해 보세요.
        </p>

        <span className={congrats}>축하해</span>
        <div className={catStickerBox}>
          <Sticker src={catSticker} initialPosition={{x: '24vw', y: '-10vh'}} size='40vw' opacity={0.5} position='relative' />
        </div>
      </main>
      <section className={typographyBox}>
        <span className={luckyVickyTypography.large}>럭키한걸</span>
        <span className={clsx(luckyVickyTypography.large, ohlala)} style={{ marginBottom: '3rem' }}>울랄랄라랄</span>
        <span className={luckyVickyTypography.medium}>그렇게 좋은 일이</span>
        <span className={luckyVickyTypography.medium} style={{ marginBottom: '1rem' }}>생겼다니 엄청나다</span>
        <span className={luckyVickyTypography.small}>정말???!!!! 졸 투 더 업 한다고?</span>
        <span className={luckyVickyTypography.small}>축하해 앞으로 너에게</span>
        <span className={luckyVickyTypography.small}>좋은 일만 있길...</span>

        <span className={goodbye}>안녕</span>
      </section>
      <Footer/>
    </>
  )
}

function Footer() {
  const [isCopied, setIsCopied] = useState(false)

  return (
    <footer className={footer}>
      <span className={share}>공유하기</span>
      <span className={shareDescription}>이 사이트를 소중한 사람들에게 공유해보세요!</span>
      <button
        onClick={() => {
          setIsCopied(true)
          navigator.clipboard.writeText('https://lucky-biki-ya-ya.vercel.app').catch(() => {
          })
        }}
        className={clsx(copyButton, isCopied && spin)}
      />
      <span className={shareDescription} style={{ height: '1rem' }}>{isCopied && '복사되었습니다!'}</span>
    </footer>
  )
}

interface StickerProps {
  src: string
  initialPosition: { x: string, y: string }
  size: string
  opacity?: number
  position?: 'absolute' | 'relative'
}

function Sticker({ src, initialPosition, size, opacity = 1, position = 'absolute' }: StickerProps) {
  return <img
    src={src}
    alt='sticker on page'
    style={{ position, top: initialPosition.y, left: initialPosition.x, width: size, opacity }}
    onMouseDown={event => {
      const sticker = event.currentTarget
      const { x, y, right } = sticker.getBoundingClientRect()
      const cursorOffsetX = event.pageX - x
      const cursorOffsetY = event.pageY - y
      const rightEdgeDelta = right - event.pageX

      const onMouseMove = (event: MouseEvent) => {
        const rightEdge = event.pageX + rightEdgeDelta
        const x = event.pageX - cursorOffsetX
        const y = event.pageY - cursorOffsetY

        if (rightEdge <= window.innerWidth) {
          sticker.style.top = `${y}px`
          sticker.style.left = `${x}px`
        }
      }

      document.addEventListener('mousemove', onMouseMove)
      document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', onMouseMove)
      }, { once: true })
    }}
    onDragStart={event => event.preventDefault()}
    className={sticker}
  />
}