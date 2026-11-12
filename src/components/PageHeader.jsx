import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function PageHeader({ eyebrow, title, subtitle, image }) {
  return (
    <section className="relative h-[46vh] min-h-[340px] flex items-center overflow-hidden bg-black">
      <motion.img
        src={image}
        alt=""
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: 'easeOut' }}
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center gap-2 text-white/60 text-xs tracking-wider uppercase mb-4">
            <Link to="/" className="hover:text-gold transition-colors">Accueil</Link>
            <ChevronRight size={12} />
            <span className="text-gold">{eyebrow}</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-white leading-[0.95] mb-4">{title}</h1>
          {subtitle && <p className="text-white/70 max-w-xl text-base md:text-lg">{subtitle}</p>}
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-gold via-gold/40 to-transparent" />
    </section>
  )
}