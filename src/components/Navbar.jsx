import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ShoppingBag, Menu, X, MessageCircle } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { openWhatsApp } from '../lib/whatsapp'
import logo from '../assets/logo.png'

const navLinks = [
  { label: 'Accueil', to: '/' },
  { label: 'Boutique', to: '/boutique' },
  { label: 'Services', to: '/services' },
  { label: 'À propos', to: '/a-propos' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const { cart } = useCart()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className="bg-black text-ivory text-center py-2 text-[10px] sm:text-xs tracking-[0.2em] uppercase font-medium">
        WELCOME TO COCO BIBAN SHOP – YOUR STYLE, YOUR STEP.
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-ivory/95 backdrop-blur-md shadow-sm' : 'bg-ivory'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-500 ${
              isScrolled ? 'h-16 md:h-20' : 'h-24 md:h-36'
            }`}
          >
            {/* Logo + nom */}
            <Link
              to="/"
              className="group flex items-center gap-3 md:gap-4 shrink-0"
              aria-label="COCO BIBAN SHOP - Accueil"
            >
              <img
                src={logo}
                alt="COCO BIBAN Logo"
                className={`object-contain transition-all duration-500 group-hover:scale-105 ${
                  isScrolled ? 'h-10 w-10 md:h-14 md:w-14' : 'h-20 w-20 md:h-32 md:w-32'
                }`}
              />
              <span
                className={`hidden min-[420px]:block font-display font-semibold tracking-wide text-black leading-none transition-all duration-500 ${
                  isScrolled ? 'text-xl md:text-3xl' : 'text-2xl md:text-4xl'
                }`}
              >
                COCO <span className="text-gold">SHOP</span>
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-9">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className="relative text-sm font-medium tracking-wide text-black/80 hover:text-gold transition-colors py-1"
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-gold"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Link to="/boutique" className="p-2 hover:text-gold transition-colors" aria-label="Rechercher">
                <Search size={20} />
              </Link>
              <Link to="/boutique" className="p-2 hover:text-gold transition-colors relative" aria-label="Panier">
                <ShoppingBag size={20} />
                {cart.length > 0 && (
                  <motion.span
                    key={cart.length}
                    initial={{ scale: 0.4 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-gold text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center"
                  >
                    {cart.length}
                  </motion.span>
                )}
              </Link>
              <button className="lg:hidden p-2" onClick={() => setMobileOpen(true)} aria-label="Menu">
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/50 lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="absolute right-0 top-0 h-full w-80 bg-ivory p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-12">
                <div className="flex items-center gap-3">
                  <img src={logo} alt="COCO BIBAN Logo" className="h-14 w-14 object-contain" />
                  <span className="font-display text-2xl font-semibold">Menu</span>
                </div>
                <button onClick={() => setMobileOpen(false)} aria-label="Fermer">
                  <X size={24} />
                </button>
              </div>
              <nav className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                  >
                    <NavLink
                      to={link.to}
                      end={link.to === '/'}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive }) =>
                        `text-lg font-medium tracking-wide transition-colors ${
                          isActive ? 'text-gold' : 'hover:text-gold'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-12 pt-8 border-t border-beige">
                <button
                  onClick={() => {
                    openWhatsApp()
                    setMobileOpen(false)
                  }}
                  className="flex items-center gap-2 text-sm font-medium text-gold"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}