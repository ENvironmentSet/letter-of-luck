import Header from '../Header/component.tsx'
import { useState } from 'react'
import {
  bye,
  catchphrase,
  congrats, copyButton, footer,
  headline,
  headlineBox,
  headlineSection,
  introduction,
  main, share, shareDescription,
  showcase, spin, sticker, typography
} from './style.css.ts'
import clsx from 'clsx'

import headlineLargeDesktop from '../assets/headline-large-desktop.png'
import faceSticker from '../assets/face-sticker.png'
import letterSticker from '../assets/letter-sticker.png'
import heartSticker from '../assets/heart-sticker.png'
import smileSticker from '../assets/smile-sticker.png'
import catSticker from '../assets/cat-sticker.png'

function Home() {
  return (
    <>
      <section className={headlineSection}>
        <Header/>

        <picture className={headlineBox}>
          <img src={headlineLargeDesktop} alt='이 행운의 편지는 영국에서 최초로 시작되어...' className={headline}/>
        </picture>
      </section>
      <main className={main}>
        <h2 className={catchphrase}>
          행복을 전하는 메세지를 입력해보세요!
        </h2>

        <p className={introduction} style={{marginTop: '8rem'}}>
          사람들과 주고받는 따뜻한 말들이 줄어들고, 함께하는 기쁨이 점점 사라져 가고 있는 것 같습니다.
          만약 조금 더 유쾌하고 재밌는 말들이 오간다면, 우리 사회가 좀 더 부드럽고 따뜻하고,
          말랑말랑하고 아카시아 꽃 향기 나는 곳이 될 수 있지 않을가요?
        </p>
        <p className={introduction} style={{marginTop: '2rem'}}>
          그래서 만들었습니다. 경쾌하고 즐거운 메게지를 위한 서체 "러키비키 야-야"!
          리듬감 있는 두꺼운 획과 웃는 모양의 빈 공간이 특징인 이 서체를, 기쁨과 활기를 담은 글을 쓸 때 사용해 보세요.
        </p>

        <span className={congrats}>축하해</span>
      </main>
      <section className={showcase}>
        <span className={typography.large} style={{ marginBottom: '-8.5rem' }}>럭키한걸</span>
        <span className={typography.large} style={{letterSpacing: '-10%'}}>울랄랄라랄</span>
        <span className={typography.medium} style={{marginBottom: '2.5rem'}}>그렇게 좋은 일이</span>
        <span className={typography.medium} style={{marginBottom: '5rem'}}>생겼다니 엄청나다</span>
        <span className={typography.small} style={{marginBottom: '2rem'}}>정말???!!!! 졸 투 더 업 한다고?</span>
        <span className={typography.small} style={{marginBottom: '2rem'}}>축하해 앞으로 너에게</span>
        <span className={typography.small}>좋은 일만 있길...</span>

        <span className={bye}>안녕</span>
      </section>
      <Footer/>
      <Sticker src={faceSticker} width='10vw' initialPosition={{ x: '12vw', y: '5rem' }} />
      <Sticker src={smileSticker} width='60vw' initialPosition={{ x: '3vw', y: '20rem' }} />
      <Sticker src={letterSticker} width='20vw' initialPosition={{ x: '48vw', y: '16rem' }} />
      <Sticker src={heartSticker} width='20vw' initialPosition={{ x: '75vw', y: '40rem' }} opacity={0.5} />
      <Sticker src={catSticker} width='45vw' initialPosition={{ x: '52vw', y: '180rem' }} opacity={0.5} />
    </>
  )
}

export default Home

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
      <span className={shareDescription}
            style={{height: '1.125rem', marginTop: '1.125rem', marginBottom: '7.56rem'}}>{isCopied && '복사되었습니다!'}</span>
    </footer>
  )
}

interface StickerProps {
  src: string
  initialPosition: {
    x: string,
    y: string,
  }
  width: string
  opacity?: number
}

function Sticker({ src, initialPosition, width, opacity = 1 }: StickerProps) {
  const [{ dx, dy }, setDelta] = useState({ dx: 0, dy: 0 })

  return <img
    src={src}
    alt='sticker on page'
    style={{ left: `calc(${initialPosition.x} + ${dx}px)`, top: `calc(${initialPosition.y} + ${dy}px)`, width, opacity }}
    onMouseDown={event => {
      const startX = event.pageX - dx
      const startY = event.pageY - dy
      const onMouseMove = (event: MouseEvent) => {
        setDelta({
          dx: event.pageX - startX,
          dy: event.pageY - startY
        })
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