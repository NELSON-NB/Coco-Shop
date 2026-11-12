import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, MapPin, Phone, Clock, ChevronDown, Send } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import ShopMap from '../components/ShopMap'
import { SHOP } from '../config/shop'
import { openWhatsApp } from '../lib/whatsapp'

const faqs = [
  { q: 'Comment commander une paire ?', a: 'Choisissez un modèle dans la boutique, puis cliquez sur « WhatsApp » : nous confirmons la pointure, le prix et la remise.' },
  { q: 'Puis-je essayer avant d\'acheter ?', a: 'Oui, venez en boutique à Mokolo. Vous pouvez aussi réserver une paire à l\'avance via WhatsApp.' },
  { q: 'Comment trouver la boutique ?', a: 'Utilisez le bouton « Itinéraire » sur la carte, ou écrivez-nous sur WhatsApp : nous vous guiderons jusqu\'à l\'entrée.' },
  { q: 'Livrez-vous ?', a: 'Contactez-nous sur WhatsApp pour connaître les possibilités de livraison à Yaoundé et les frais éventuels.' },
]

function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <div className="divide-y divide-beige/60 border-y border-beige/60">
      {faqs.map((f, i) => (
        <div key={f.q}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 py-5 text-left"
          >
            <span className="font-display text-lg">{f.q}</span>
            <motion.span animate={{ rotate: open === i ? 180 : 0 }} className="text-gold shrink-0">
              <ChevronDown size={20} />
            </motion.span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="pb-5 text-sm text-black/60 leading-relaxed">{f.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', subject: 'Information sur un produit', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = `Bonjour COCO BIBAN SHOP,\nJe m'appelle ${form.name || '(nom)'}.\nSujet : ${form.subject}\n\n${form.message}`
    openWhatsApp(null, text)
  }

  const inputCls =
    'w-full bg-white border border-beige focus:border-gold focus:outline-none px-4 py-3 text-sm transition-colors'

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="LET'S TALK"
        subtitle="Une question sur un modèle, une pointure ou la disponibilité ? Nous répondons avec plaisir."
        image="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-12">
          {/* Info */}
          <Reveal x={-30} y={0} className="lg:col-span-2 space-y-8">
            <div>
              <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">Coordonnées</p>
              <h2 className="font-display text-4xl mb-6">A TU TROUVER TA PAIR PARFAIT?</h2>
              <p className="text-black/60 leading-relaxed">
                Vous avez des questions sur un produit, une pointure ou la disponibilité ? Contactez COCO BIBAN SHOP et nous vous aiderons à trouver la paire idéale.
              </p>
            </div>

            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <span className="w-11 h-11 bg-black text-gold flex items-center justify-center shrink-0"><MapPin size={18} /></span>
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-black/40">Adresse</p>
                  <p>{SHOP.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-11 h-11 bg-black text-gold flex items-center justify-center shrink-0"><Phone size={18} /></span>
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-black/40">Téléphone / WhatsApp</p>
                  <a href={`tel:+${SHOP.whatsapp}`} className="hover:text-gold transition-colors">{SHOP.phoneDisplay}</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-11 h-11 bg-black text-gold flex items-center justify-center shrink-0"><Clock size={18} /></span>
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-black/40">Horaires</p>
                  {SHOP.hours.map((h) => (
                    <p key={h.day}>{h.day} · <span className="text-black/60">{h.time}</span></p>
                  ))}
                </div>
              </li>
            </ul>

            <button
              onClick={() => openWhatsApp()}
              className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 text-sm font-semibold tracking-wider uppercase hover:bg-[#1da851] transition-colors"
            >
              <MessageCircle size={20} />
              Causer avec nous sur WhatsApp
            </button>
          </Reveal>

          {/* Form */}
          <Reveal x={30} y={0} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-ivory border border-beige/60 p-7 md:p-10 space-y-5">
              <div>
                <p className="text-gold text-xs tracking-[0.3em] uppercase mb-2">Message rapide</p>
                <h3 className="font-display text-2xl">Écrivez-nous</h3>
                <p className="text-xs text-black/50 mt-1">Votre message s'ouvrira dans WhatsApp, prêt à être envoyé.</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <input name="name" value={form.name} onChange={handleChange} placeholder="Votre nom" className={inputCls} required />
                <select name="subject" value={form.subject} onChange={handleChange} className={inputCls}>
                  <option>Information sur un produit</option>
                  <option>Disponibilité d'une pointure</option>
                  <option>Réservation d'une paire</option>
                  <option>Livraison</option>
                  <option>Autre</option>
                </select>
              </div>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Votre message..."
                className={inputCls}
                required
              />
              <motion.button
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 text-sm font-semibold tracking-wider uppercase hover:bg-gold hover:text-black transition-colors"
              >
                <Send size={16} /> Envoyer sur WhatsApp
              </motion.button>
            </form>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-10">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">Localisation</p>
            <h2 className="font-display text-4xl md:text-5xl">RETROUVEZ-NOUS SUR LA CARTE</h2>
          </Reveal>
          <Reveal><ShopMap height="h-[460px] md:h-[560px]" /></Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-beige/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-10">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">FAQ</p>
            <h2 className="font-display text-4xl">QUESTIONS FRÉQUENTES</h2>
          </Reveal>
          <Reveal><Faq /></Reveal>
        </div>
      </section>
    </>
  )
}