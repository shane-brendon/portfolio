import Image from 'next/image'
import styles from './page.module.css'
import Hero from '@/src/component/hero/hero'
import Logo from '@/src/component/logo/logo'
export default function Home() {
  return (
    <>
      <Hero/>
      <Logo/>
    </>
  )
}
