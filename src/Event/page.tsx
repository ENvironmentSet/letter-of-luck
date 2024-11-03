import Header from '../Header/component.tsx'
import { ReactNode } from 'react'
import {
  article, contributor,
  contributors, copyright,
  credit,
  description,
  link,
  main,
  page,
  slide,
  slider,
  sliderBox,
  space,
  title
} from './style.css.ts'
import { useMediaQuery } from 'react-responsive'

import goods1 from '../assets/goods1.jpg'
import goods2 from '../assets/goods2.jpg'
import goods3 from '../assets/goods3.jpg'
import goods4 from '../assets/goods4.jpg'

export default function Event() {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 1199px)' })

  return (
    <div className={page}>
      <Header />
      <main className={main}>
        <article className={article}>
          <h1 className={title}>전시 이벤트 :)</h1>
          <p className={description}>
            즐거운 관람이 되셨나요? ‘이 행운의 편지는 영국에서 최초로 시작되어...’ 전시에 방문 해주셔서 감사합니다.
            관람 후 인증 사진을 <a href='https://www.instagram.com/yojinius/' className={link}>@yojinius</a>를 태그해 스토리 인증해주시는 분들 중 30분에게 추첨을 통해 서체가 적용된 굿즈를 보내드립니다.
          </p>
        </article>
        <Slider>
          <img src={goods1} className={slide} alt='stickers'/>
          <img src={goods2} className={slide} alt='letters'/>
          <img src={goods3} className={slide} alt='a mouse pad'/>
          <img src={goods4} className={slide} alt='stickers, too'/>
        </Slider>
        {isSmallScreen && <Footer />}
      </main>
    </div>
  )
}

interface SliderProps {
  children: ReactNode[]
}

function Slider({ children }: SliderProps) {
  const slides = [...children, ...children, ...children, ...children]

  return (
    <div className={sliderBox}>
      <section
        className={slider}
      >
        {slides}
      </section>
    </div>
  )
}

function Footer() {
  return (
    <>
      <div className={space}/>
      <footer className={credit}>
        <section className={contributors}>
          <p className={contributor}>
            Design
            <a href='https://www.instagram.com/yojinius/' className={link}>최여진(@yojinius)</a>
          </p>
          <p className={contributor}>
            Development
            <a href='https://github.com/ENvironmentSet' className={link}>서재원(@homemade.frenchfries)</a>
          </p>
          <p className={contributor}>
            Font Design Guidance
            <a href='https://www.instagram.com/jaehn._.design/' className={link}>조재훈(@jaehn._.design)</a>
          </p>
        </section>
        <p className={copyright}>© 2024 최여진, CC BY-NC-SA</p>
      </footer>
    </>
  )
}