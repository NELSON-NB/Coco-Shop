import { motion } from 'framer-motion'
import { MapPin, Navigation, Clock, MessageCircle } from 'lucide-react'
import { SHOP, mapEmbedUrl, mapDirectionsUrl } from '../config/shop'
import { openWhatsApp } from '../lib/whatsapp'

export default function ShopMap({ height = 'h-[420px] md:h-[520px]', showCard = true }) {
  return (
    <div className="relative">
      <div className={`relative ${height} overflow-hidden border border-beige/60 shadow-xl`}>
        <iframe
          title="Localisation COCO BIBAN SHOP"
          src={mapEmbedUrl}
          className="w-full h-full grayscale-[30%] contrast-[1.05]"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>

      {showCard && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative md:absolute md:top-8 md:left-8 bg-black text-ivory p-7 md:max-w-xs shadow-2xl -mt-1 md:mt-0"
        >
          <div className="flex items-center gap-2 text-gold text-xs tracking-[0.25em] uppercase mb-3">
            <MapPin size={14} />
            Notre boutique
          </div>
          <h3 className="font-display text-2xl mb-2">COCO SHOP</h3>
          <p className="text-white/60 text-sm mb-5">{SHOP.address}</p>

          <div className="space-y-1.5 mb-6 text-sm text-white/70">
            {SHOP.hours.map((h) => (
              <div key={h.day} className="flex items-start gap-2">
                <Clock size={14} className="text-gold mt-0.5 shrink-0" />
                <span>
                  <span className="text-white">{h.day}</span> · {h.time}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <a
              href={mapDirectionsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gold text-black px-5 py-3 text-xs font-semibold tracking-wider uppercase hover:bg-white transition-colors"
            >
              <Navigation size={14} />
              Itinéraire
            </a>
            <button
              onClick={() =>
                openWhatsApp(
                  null,
                  "Bonjour COCO BIBAN SHOP, pouvez-vous m'indiquer précisément comment arriver à la boutique ?"
                )
              }
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-5 py-3 text-xs font-semibold tracking-wider uppercase hover:bg-white hover:text-black transition-colors"
            >
              <MessageCircle size={14} />
              Demander le chemin
            </button>
          </div>
        </motion.div>
      )}
    </div>
  )
}