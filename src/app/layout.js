import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Mi Portafolio',
  description: 'Portafolio personal de desarrollador web',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="">
      <body className="bg-black text-white font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
