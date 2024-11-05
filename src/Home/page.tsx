import { createContext, ReactNode, useContext, useRef, useState } from 'react'
import clsx from 'clsx'
import { useMediaQuery } from 'react-responsive'

import Header from '../Header/component.tsx'
import {
  catchphrase,
  congrats, copyButton,
  description, footer, goodbye,
  heading,
  headline,
  headlineBox,
  luckyVickyTypography,
  main, share, shareDescription, spin, typographyBox, ohlala, sticker, headerBox, stickerBox, cat,
  credit, copyright, contributor, name, contributors, contributorsBox
} from './style.css.ts'

import headline480x from '../assets/headline-480x.webp'
import headline768x from '../assets/headline-768x.webp'
import headline1920x from '../assets/headline-1920x.svg'
import faceSticker from '../assets/face-sticker.webp'
import letterSticker from '../assets/letter-sticker.webp'
import heartSticker from '../assets/heart-sticker.svg'
import smileSticker from '../assets/smile-sticker.svg'
import catSticker from '../assets/cat-sticker.svg'

export default function Home() {
  const isNarrowDevice = useMediaQuery({ query: '(max-width: 767px)' })

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
              ${headline480x} 429w,
              ${headline768x} 693w
            `}
            sizes='100vw'
          />
          <source
            media='(min-width: 768px)'
            srcSet={`
              ${headline1920x} 1755w,
            `}
            sizes='100vw'
          />
          <img
            src={headline1920x}
            alt='이 행운의 편지는 영국에서 최초로 시작되어...'
            className={headline}
            onDragStart={event => event.preventDefault()}
          />
        </picture>

        <StickerSpawnZone>
          <Sticker
            src={faceSticker}
            initialPosition={isNarrowDevice ? { x: '60vw', y: '18rem' } : { x: '12vw', y: '5vh' }}
            size={isNarrowDevice ? '18vw' : '12vw'}
          />
          <Sticker
            src={smileSticker}
            initialPosition={isNarrowDevice ? { x: '0vw', y: '16rem' } : { x: '7vw', y: '30vh' }}
            size='50vw'
          />
          <Sticker
            src={letterSticker}
            initialPosition={isNarrowDevice ? { x: '72vw', y: '25rem' } : { x: '40vw', y: '26vh' }}
            size={isNarrowDevice ? '26vw' : '21vw'}
          />
          <Sticker
            src={heartSticker}
            initialPosition={isNarrowDevice ? { x: '60vw', y: '6.4rem' } : { x: '72vw', y: '64vh' }}
            size='21vw'
          />
        </StickerSpawnZone>
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
        <img src={catSticker} className={cat} alt='a cat' />
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
          navigator.clipboard.writeText('https://luckyvicky-yaya.com').catch(() => {
          })
        }}
        className={clsx(copyButton, isCopied && spin)}
        aria-label='a share button'
      />
      <span className={shareDescription} style={{ height: '1rem' }}>{isCopied && '복사되었습니다!'}</span>

      <section className={credit}>
        <p className={copyright}>© 2024 최여진, CC BY-NC-SA</p>
        <section className={contributorsBox}>
          <section className={contributors}>
            <p className={contributor}>Design<a href='https://www.instagram.com/yojinius/'
                                                className={name}>최여진(@yojinius)</a></p>
            <p className={contributor}>Development<a href='https://github.com/ENvironmentSet'
                                                     className={name}>서재원(@homemade.frenchfries)</a></p>
            <p className={contributor}>Font Design Guidance<a href='https://www.instagram.com/jaehn._.design/'
                                                              className={name}>조재훈(@jaehn._.design)</a></p>
          </section>
        </section>
      </section>
    </footer>
  )
}

interface StickerProps {
  src: string
  initialPosition: { x: string, y: string }
  size: string
}

function Sticker({src, initialPosition, size}: StickerProps) {
  const {push} = useContext(StickerHelpers)

  return <img
    src={src}
    alt='sticker on page'
    style={{top: initialPosition.y, left: initialPosition.x, width: size}}
    onMouseDown={event => {
      const sticker = event.currentTarget
      const {x, y, right} = sticker.getBoundingClientRect()
      const cursorOffsetX = event.pageX - (x + window.scrollX)
      const cursorOffsetY = event.pageY - (y + window.scrollY)
      const rightEdgeDelta = right - event.clientX

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

      push(sticker)
    }}
    onTouchStart={event => {
      const sticker = event.currentTarget
      const { x, y, right } = sticker.getBoundingClientRect()
      const cursorOffsetX = event.touches[0].pageX - (x + window.scrollX)
      const cursorOffsetY = event.touches[0].pageY - (y + window.scrollY)
      const rightEdgeDelta = right - event.touches[0].pageX

      const onTouchMove = (event: TouchEvent) => {
        const rightEdge = event.touches[0].pageX + rightEdgeDelta
        const x = event.touches[0].pageX - cursorOffsetX
        const y = event.touches[0].pageY - cursorOffsetY

        if (rightEdge <= window.innerWidth) {
          sticker.style.top = `${y}px`
          sticker.style.left = `${x}px`
        }

        event.preventDefault()
      }

      document.addEventListener('touchmove', onTouchMove, { passive: false })
      document.addEventListener('touchend', () => {
        document.removeEventListener('touchmove', onTouchMove)
      }, { once: true })

      push(sticker)
    }}
    onDragStart={event => event.preventDefault()}
    className={sticker}
  />
}

const StickerHelpers = createContext<{ push(sticker: HTMLElement): void }>({ push: () => {} })

interface StickerSpawnZoneProps {
  children: ReactNode
}

function StickerSpawnZone({ children }: StickerSpawnZoneProps) {
  const nextZIndex = useRef(0)

  return (
    <StickerHelpers.Provider value={{
      push(sticker) {
        sticker.style.zIndex = String(nextZIndex.current++)
      }
    }}>
      <div className={stickerBox}>
        {children}
      </div>
    </StickerHelpers.Provider>
  )
}