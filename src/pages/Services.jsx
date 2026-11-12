import { motion } from 'framer-motion'
import {
  MessageCircle, Ruler, BookmarkCheck, Truck, RefreshCw, Sparkles,
} from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import SizeConverter from '../components/SizeConverter'
import { openWhatsApp } from '../lib/whatsapp'

const services = [
  { icon: MessageCircle, title: 'Commande par WhatsApp', text: 'Envoyez-nous le modèle qui vous plaît, nous vous répondons rapidement avec disponibilité et prix.' },
  { icon: Ruler, title: 'Conseil de pointure', text: 'Pas sûr de votre taille ? Nous vous guidons pour trouver la paire qui vous va parfaitement.' },
  { icon: BookmarkCheck, title: 'Réservation de paire', text: 'Mettez votre coup de cœur de côté et passez l\'essayer en boutique à Mokolo.' },
  { icon: Truck, title: 'Livraison à Yaoundé', text: 'Recevez votre commande là où vous êtes (conditions et frais à confirmer avec la boutique).' },
  { icon: RefreshCw, title: 'Échange de pointure', text: 'Une pointure qui ne convient pas ? Demandez un échange selon les conditions de la boutique.' },
  { icon: Sparkles, title: 'Conseils de style', text: 'Besoin d\'aide pour assortir vos chaussures à une tenue ou une occasion ? Nous sommes là.' },
]

const steps = [
  { n: '01', title: 'Choisissez', text: 'Parcourez la boutique et repérez votre modèle.' },
  { n: '02', title: 'Écrivez-nous', text: 'Cliquez sur WhatsApp depuis la fiche du produit.' },
  { n: '03', title: 'Confirmez', text: 'Validez la pointure, le prix et le mode de remise.' },
  { n: '04', title: 'Portez-les !', text: 'Récupérez en boutique ou recevez votre paire.' },
]

const care = [
  { title: 'Cuir', tip: 'Essuyez avec un chiffon doux et nourrissez le cuir régulièrement pour éviter les craquelures.' },
  { title: 'Toile & tissu', tip: 'Brossez doucement avec de l\'eau tiède et un savon doux, puis séchez à l\'ombre.' },
  { title: 'Baskets', tip: 'Retirez les lacets et les semelles avant nettoyage, ne les exposez jamais au soleil direct pour sécher.' },
  { title: 'Rangement', tip: 'Alternez vos paires et rangez-les dans un endroit aéré pour garder leur forme.' },
]

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="PLUS QU'NE BOUTIQUE"
        subtitle="Un accompagnement simple et personnalisé, du choix de la paire jusqu'à votre porte."
        image="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1600&q=80"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">Ce que nous faisons pour vous</p>
            <h2 className="font-display text-4xl md:text-5xl">NOS SERVICES</h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group h-full bg-white border border-beige/60 p-8 hover:border-gold hover:shadow-xl transition-all duration-500"
                >
                  <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-500">
                    <s.icon size={24} className="text-gold group-hover:text-black transition-colors duration-500" />
                  </div>
                  <h3 className="font-display text-xl mb-3">{s.title}</h3>
                  <p className="text-sm text-black/60 leading-relaxed">{s.text}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How to order */}
      <section className="py-16 md:py-24 bg-black text-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">Simple & rapide</p>
            <h2 className="font-display text-4xl md:text-5xl text-white">Comment Commander</h2>
          </Reveal>

          <div className="relative grid md:grid-cols-4 gap-10">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: 'easeInOut' }}
              className="hidden md:block absolute top-8 left-[12%] right-[12%] h-px bg-gold/50 origin-left"
            />
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.15} className="relative text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-black border border-gold text-gold font-display text-xl flex items-center justify-center mb-5 relative z-10">
                  {s.n}
                </div>
                <h3 className="font-display text-xl text-white mb-2">{s.title}</h3>
                <p className="text-white/60 text-sm">{s.text}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="text-center mt-14">
            <button
              onClick={() => openWhatsApp()}
              className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-4 text-sm font-semibold tracking-wider uppercase hover:bg-[#1da851] transition-colors"
            >
              <MessageCircle size={20} />
              Commencer sur WhatsApp
            </button>
          </Reveal>
        </div>
      </section>

      {/* Size converter */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-10">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">Outil pratique</p>
            <h2 className="font-display text-4xl">VOS POINTURE</h2>
          </Reveal>
          <Reveal><SizeConverter /></Reveal>
        </div>
      </section>

      {/* Care tips */}
      <section className="py-16 md:py-24 bg-beige/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">Prenez-en soin</p>
            <h2 className="font-display text-4xl md:text-5xl">CONSEILS D’ENTRETIEN DES CHAUSSURES</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {care.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="bg-white p-7 border-t-2 border-gold h-full">
                  <h3 className="font-display text-xl mb-2">{c.title}</h3>
                  <p className="text-sm text-black/60 leading-relaxed">{c.tip}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}