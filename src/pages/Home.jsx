import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Footprints, Sparkles, MessageCircle, MapPin } from 'lucide-react'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import Reveal from '../components/Reveal'
import ShopMap from '../components/ShopMap'

const marqueeWords = ['ENTRER DANS VOTRE STYLE', 'MOKOLO · YAOUNDÉ', 'HOMMES & FEMMES', 'NOUVEAUTÉS', 'COCO SHOP']

function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])

  return (
    <section ref={ref} className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
      <motion.div style={{ y: imgY }} className="absolute inset-0 scale-110">
        <img
          src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=1600&q=85"
          alt="Fashion footwear"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30" />
      </motion.div>

      <motion.div
        style={{ y: textY }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4 font-medium flex items-center gap-2">
            <MapPin size={14} /> Mokolo · Yaoundé
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[0.95] mb-6">
            ENTRER DANS<br />VOTRE STYLE.
          </h1>
          <p className="text-white/80 text-base sm:text-lg max-w-md mb-10 leading-relaxed">
            Découvrez des chaussures qui reflètent votre personnalité. Explorez notre sélection exclusive de chaussures tendance pour hommes et femmes chez COCO SHOP.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/boutique?cat=men"
              className="inline-flex items-center gap-2 bg-gold text-black px-8 py-4 text-sm font-semibold tracking-wider uppercase hover:bg-white transition-colors duration-300"
            >
              Boutique Homme <ArrowRight size={16} />
            </Link>
            <Link
              to="/boutique?cat=women"
              className="inline-flex items-center gap-2 border border-white text-white px-8 py-4 text-sm font-semibold tracking-wider uppercase hover:bg-white hover:text-black transition-colors duration-300"
            >
              Boutique Femme
            </Link>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/60 text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gold"
        />
      </motion.div>
    </section>
  )
}

function Marquee() {
  const items = [...marqueeWords, ...marqueeWords]
  return (
    <div className="bg-black py-5 overflow-hidden border-y border-gold/30">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 28, ease: 'linear' }}
        className="flex whitespace-nowrap w-max"
      >
        {items.map((w, i) => (
          <span key={i} className="font-display text-xl md:text-2xl text-ivory/90 mx-8 flex items-center gap-8">
            {w}
            <span className="text-gold">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}

function Categories() {
  const cards = [
    {
      to: '/boutique?cat=men',
      img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=900&q=85',
      title: 'POUR LES HOMMES DE CATEGORIE',
      text: 'Découvrez des chaussures qui allient élégance, confort et style intemporel.',
      cta: "Explore Men's Shoes",
    },
    {
      to: '/boutique?cat=women',
      img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=900&q=85',
      title: 'ELEGANT A CHAQUE PAR',
      text: 'Trouvez la paire idéale pour révéler votre beauté, affirmer votre confiance et exprimer votre personnalité.',
      cta: "Explore Women's Shoes",
    },
  ]
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {cards.map((c, i) => (
            <Reveal key={c.to} delay={i * 0.15}>
              <Link to={c.to} className="group relative block h-[480px] md:h-[560px] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-4 border border-white/0 group-hover:border-gold/70 transition-colors duration-500 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                  <p className="text-gold text-xs tracking-[0.25em] uppercase mb-2">Collection</p>
                  <h2 className="font-display text-3xl md:text-4xl text-white mb-3">{c.title}</h2>
                  <p className="text-white/70 text-sm mb-6 max-w-xs">{c.text}</p>
                  <span className="inline-flex items-center gap-2 text-gold text-sm font-semibold tracking-wider uppercase group-hover:gap-3 transition-all">
                    {c.cta} <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function NewArrivals() {
  const news = products.filter((p) => p.label === 'New').slice(0, 4)
  const list = news.length ? news : products.slice(0, 4)
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">Juste Arriver</p>
            <h2 className="font-display text-4xl md:text-5xl">NOUVEAUTÉS – Nouvelle ARRIVAGES</h2>
          </div>
          <Link
            to="/boutique"
            className="text-sm font-semibold tracking-wider uppercase text-gold hover:text-black transition-colors flex items-center gap-2"
          >
            Voir toute la boutique <ArrowRight size={14} />
          </Link>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
          {list.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyUs() {
  const benefits = [
    { icon: Footprints, title: 'Mode Hommes & Femmes', desc: 'Une sélection soignée de chaussures tendance pour tous les styles.' },
    { icon: Sparkles, title: 'Styles soigneusement choisis', desc: 'Chaque paire est sélectionnée pour sa qualité et son caractère.' },
    { icon: MessageCircle, title: 'Achat simple', desc: 'Posez vos questions et réservez votre paire directement via WhatsApp.' },
    { icon: MapPin, title: 'Au cœur de Mokolo', desc: 'Venez essayer nos collections en boutique, à Yaoundé.' },
  ]
  return (
    <section className="py-16 md:py-24 bg-black text-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-14">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">Pourquoi nous</p>
          <h2 className="font-display text-4xl md:text-5xl text-white">POURQUOI COCO SHOP?</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.1}>
              <motion.div whileHover={{ y: -6 }} className="text-center p-6 border border-white/10 hover:border-gold/60 transition-colors">
                <b.icon className="text-gold mx-auto mb-5" size={30} strokeWidth={1.4} />
                <h3 className="font-display text-xl text-white mb-3">{b.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function FindUs() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-12">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">Où nous trouver</p>
          <h2 className="font-display text-4xl md:text-5xl">VISITER NOUS A MOKOLO</h2>
        </Reveal>
        <Reveal>
          <ShopMap />
        </Reveal>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Categories />
      <NewArrivals />
      <WhyUs />
      <FindUs />
    </>
  )
}