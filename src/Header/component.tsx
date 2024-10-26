import { Link, useRoute } from 'wouter'
import { ReactNode } from 'react'
import { header, linkItem, linkList, navLink, title, titleBox } from './style.css.ts'

function Header() {
  return (
    <header className={header}>
      <div className={titleBox}>
        <Link to='/' className={title}>LUCKY BIKI YA-YA</Link>
      </div>
      <nav>
        <ul className={linkList}>
          <li className={linkItem.normal}>
            <NavLink to='/about'>ABOUT</NavLink>
          </li>
          <li className={linkItem.normal}>
            <NavLink to='/download'>DOWNLOAD FONT</NavLink>
          </li>
          <li className={linkItem.highlight}>
            <NavLink to='/event'>EVENT</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

interface NavLinkProps {
  to: string
  children: ReactNode
}

function NavLink(props: NavLinkProps) {
  const [match] = useRoute(props.to)

  return (
    <Link className={match ? navLink.currentPage : navLink.normal} {...props} />
  )
}