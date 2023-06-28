import React from 'react'
import Link from 'next/link'
import styles from './header.module.scss'
const Header = () => {
  return (
    <header>
        <nav>
            <ul>
                <li><Link href='/'>Agency</Link></li>
                <li><Link href='/about'>about</Link></li>
                <li><Link href='/services'>services</Link></li>
                <li><Link href='/pricing'>pricing</Link></li>
                <li><Link href='/contact'>contact</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header