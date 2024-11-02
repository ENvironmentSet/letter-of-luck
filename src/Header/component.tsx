import { Link, useRoute } from 'wouter'
import { ReactNode } from 'react'

import { eventNavItem, header, link, navBox, navList } from './style.css.ts'

export default function Header() {
  return (
    <header className={header}>
      <Link to='/' className={link.normal}>LUCKY BIKI YA-YA</Link>
      <nav className={navBox}>
        <ul className={navList}>
          <li>
            <NavLink to='/about'>ABOUT</NavLink>
          </li>
          <li>
            <NavLink to='/download'>DOWNLOAD FONT</NavLink>
          </li>
          <li className={eventNavItem}>
            <NavLink to='/event'>EVENT</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

interface NavLinkProps {
  to: string,
  children: ReactNode
}

function NavLink(props: NavLinkProps) {
  const [match] = useRoute(props.to)

  return (
    <Link className={match ? link.currentPage : link.normal} {...props} />
  )
}