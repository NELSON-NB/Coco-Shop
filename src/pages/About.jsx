import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Gem, HeartHandshake, Footprints, MapPin } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import Counter from '../components/Counter'
import { SHOP } from '../config/shop'

const values = [
  { icon: Gem, title: 'Qualité', text: 'Chaque paire est choisie pour sa finition et sa durabilité.' },
  { icon: Footprints, title: 'Style', text: 'Des modèles actuels pour exprimer votre personnalité.' },
  { icon: HeartHandshake, title: 'Proximité', text: 'Un accueil chaleureux et des conseils sincères, en boutique ou sur WhatsApp.' },
]

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="À propos"
        title="NOTRE HISTOIRE"
        subtitle="Une boutique née à Mokolo, pour que chacun trouve la paire qui lui ressemble."
        image="https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=1600&q=80"
      />

      {/* Story */}
      <section className="py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <Reveal x={-30} y={0} className="relative">
              <div className="relative h-[420px] md:h-[540px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=900&q=85"
                  alt="À propos de COCO BIBAN SHOP"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="hidden md:block absolute -bottom-6 -right-6 w-40 h-40 border-2 border-gold -z-10" />
              <div className="absolute -bottom-5 left-6 bg-black text-ivory px-6 py-4 flex items-center gap-3">
                <MapPin size={18} className="text-gold" />
                <span className="text-xs tracking-[0.2em] uppercase">Mokolo · Yaoundé</span>
              </div>
            </Reveal>

            <Reveal x={30} y={0}>
              <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Notre histoire</p>
              <h2 className="font-display text-4xl md:text-5xl mb-6 leading-tight">
                PLUS QUE DES CHAUSSURES.<br />C'EST VOTRE STYLE.
              </h2>
              <p className="text-black/70 leading-relaxed mb-5">
                COCO SHOP est une boutique spécialisée dans la vente de chaussures située à Mokolo, Yaoundé, au Cameroun. Nous réunissons une sélection de chaussures tendance pour hommes et femmes, afin de permettre à chacun de trouver la paire qui reflète sa personnalité, s'adapte à son mode de vie et affirme pleinement son style.
              </p>
              <p className="text-black/70 leading-relaxed mb-8">
                Mokolo est l'un des quartiers les plus vivants de Yaoundé. C'est là que nous avons choisi de nous installer : au milieu de l'énergie de la ville, pour être proches de vous.
              </p>
              <Link
                to="/boutique"
                className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 text-sm font-semibold tracking-wider uppercase hover:bg-gold hover:text-black transition-colors duration-300"
              >
                Discovrer Nos Collection <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-black text-ivory">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-3 gap-10 text-center">
          {SHOP.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.12}>
              <p className="font-display text-6xl text-gold mb-2">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="text-white/60 text-xs tracking-[0.2em] uppercase">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">Nos valeurs</p>
            <h2 className="font-display text-4xl md:text-5xl">NOS ENGAGEMENTS</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.12}>
                <motion.div whileHover={{ y: -6 }} className="text-center bg-white border border-beige/60 p-10 h-full hover:border-gold transition-colors">
                  <v.icon className="text-gold mx-auto mb-5" size={34} strokeWidth={1.3} />
                  <h3 className="font-display text-2xl mb-3">{v.title}</h3>
                  <p className="text-sm text-black/60 leading-relaxed">{v.text}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=1600&q=70"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/75" />
        <Reveal className="relative max-w-3xl mx-auto px-4 text-center">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-5">Notre promesse</p>
          <blockquote className="font-display text-3xl md:text-5xl text-white leading-tight">
            « Votre style, votre pas. Chaque paire doit vous donner envie d'avancer. »
          </blockquote>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-10 bg-gold text-black px-8 py-4 text-sm font-semibold tracking-wider uppercase hover:bg-white transition-colors"
          >
            Nous contacter <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>
    </>
  )
}