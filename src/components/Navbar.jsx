'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen(!open)
  }

  const closeMenu = () => {
    setOpen(false)
  }

  return (
    <nav className="bg-white/70 text-black dark:bg-black/70 dark:text-white backdrop-blur border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo / Nombre */}
        <div className="text-xl font-bold text-white">
          <Link href="/">MiPortafolio</Link>
        </div>

        {/* Botón de menú (solo en móviles) */}
        <div className="md:hidden text-white text-2xl cursor-pointer" onClick={toggleMenu}>
          {open ? <FiX /> : <FiMenu />}
        </div>

        {/* Enlaces: versión escritorio */}
        <div className="hidden md:flex space-x-6 text-gray-300 font-medium">
          <Link href="/" className="hover:text-white">Inicio</Link>
          <Link href="/about" className="hover:text-white">Sobre mí</Link>
          <Link href="/projects" className="hover:text-white">Proyectos</Link>
          <Link href="/contact" className="hover:text-white">Contacto</Link>                   
        </div>
      </div>

      {/* Enlaces: versión móvil */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-800 px-4 py-4 space-y-2">
          <Link href="/" onClick={closeMenu} className="block text-gray-300 hover:text-white">Inicio</Link>
          <Link href="/about" onClick={closeMenu} className="block text-gray-300 hover:text-white">Sobre mí</Link>
          <Link href="/projects" onClick={closeMenu} className="block text-gray-300 hover:text-white">Proyectos</Link>
          <Link href="/contact" onClick={closeMenu} className="block text-gray-300 hover:text-white">Contacto</Link>
        </div>
      )}
    </nav>
  )
}
