import Image from 'next/image'
import styles from './page.module.css'
import Hero from '@/src/component/hero/hero'
import Logo from '@/src/component/logo/logo'
import MeaMediaText from '@/src/component/meaMediaText/meaMediaText'
import MeaHowWeWork from '@/src/component/meaHowWeWok/meaHowWeWork'

export default function Home() {
  return (
    <>
      <Hero/>
      <Logo/>
      <MeaMediaText/>
      <MeaHowWeWork/>
    </>
  )
}
