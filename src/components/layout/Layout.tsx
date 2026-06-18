import type { ReactNode } from 'react'
import Navbar from './Navbar.tsx'
import Footer from './Footer.tsx'

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
