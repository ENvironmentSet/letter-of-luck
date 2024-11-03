import Header from '../Header/component.tsx'
import { useEffect, useRef, useState } from 'react'
import { letter, letterBox, letterFace, page, scene, spinLetter } from './style.css.ts'
import clsx from 'clsx'

export default function About() {
  return (
    <div className={page}>
      <Header />
      <Letter />
    </div>
  )
}

function Letter() {
  const [content, setContent] = useState('')
  const letterRef = useRef<HTMLElement>(null)
  const letterBoxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let delta = 0

    const onWheel = (event: WheelEvent) => {
      if (letterBoxRef.current) letterBoxRef.current.style.transform = `translateZ(${delta += event.deltaY}px)`
    }

    document.addEventListener('wheel', onWheel)

    return () => document.removeEventListener('wheel', onWheel)
  }, [])

  useEffect(() => {
    let delta = 0

    const onTouchStart = (event: TouchEvent) => {
      if (!letterBoxRef.current) return;

      const startY = event.touches[0].pageY - delta
      const onTouchMove = (event: TouchEvent) => {
        if (letterBoxRef.current) letterBoxRef.current.style.transform = `translateZ(${delta = event.touches[0].pageY - startY}px)`
        event.preventDefault()
      }

      document.addEventListener('touchmove', onTouchMove, { passive: false })
      document.addEventListener('touchend', () => {
        document.removeEventListener('touchmove', onTouchMove)
      }, { once: true })
    }

    document.addEventListener('touchstart', onTouchStart)

    return () => document.removeEventListener('touchstart', onTouchStart)
  }, []);

  return (
    <div className={scene}>
      <div className={letterBox} ref={letterBoxRef}>
        <article className={clsx(letter, spinLetter)} ref={letterRef}>
        <textarea
          value={content}
          placeholder={placeholder}
          onChange={({target: {value}}) => setContent(value)}
          className={letterFace}
          onMouseEnter={() => {
            if (letterRef.current) letterRef.current.style.animationPlayState = 'paused'
          }}
          onMouseLeave={() => {
            if (letterRef.current) letterRef.current.style.animationPlayState = 'running'
          }}
          onFocus={() => {
            if (letterRef.current) letterRef.current.classList.remove(spinLetter)
          }}
          onBlur={() => {
            if (letterRef.current) letterRef.current.classList.add(spinLetter)
          }}
        />
          <textarea
            value={content}
            placeholder={placeholder}
            onChange={({target: {value}}) => setContent(value)}
            className={letterFace}
            style={{transform: 'rotateY(180deg)'}}
            onMouseEnter={() => {
              if (letterRef.current) letterRef.current.style.animationPlayState = 'paused'
            }}
            onMouseLeave={() => {
              if (letterRef.current) letterRef.current.style.animationPlayState = 'running'
            }}
            onFocus={() => {
              if (letterRef.current) letterRef.current.classList.remove(spinLetter)
            }}
            onBlur={() => {
              if (letterRef.current) letterRef.current.classList.add(spinLetter)
            }}
          />
        </article>
      </div>
    </div>
  )
}

const placeholder = `러키비키 야-야체는 행복을 담아낸 서체입니다. 행복을 전하는 가장 따뜻한 도구는 편지일 것입니다. 이 서체를 제작하며, 저는 '행운의 편지'를 새롭게 작성했습니다. 이천이십사년 십일월 육일부터 십일일까지 진행되는 2024 경희대학교 시각디자인학과 졸업전시에서 새로운 편지를 직접 만나보실 수 있습니다.`