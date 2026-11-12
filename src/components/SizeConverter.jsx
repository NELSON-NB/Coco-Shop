import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Valeurs indicatives (peuvent varier selon les marques)
const sizes = [
  { eu: 36, cm: 22.8, uk: 3.5, usM: 4.5, usW: 6 },
  { eu: 37, cm: 23.5, uk: 4, usM: 5, usW: 6.5 },
  { eu: 38, cm: 24.1, uk: 5, usM: 6, usW: 7.5 },
  { eu: 39, cm: 24.8, uk: 6, usM: 7, usW: 8.5 },
  { eu: 40, cm: 25.4, uk: 6.5, usM: 7.5, usW: 9 },
  { eu: 41, cm: 26.0, uk: 7.5, usM: 8.5, usW: 10 },
  { eu: 42, cm: 26.7, uk: 8, usM: 9, usW: 10.5 },
  { eu: 43, cm: 27.3, uk: 9, usM: 10, usW: 11.5 },
  { eu: 44, cm: 27.9, uk: 9.5, usM: 10.5, usW: 12 },
  { eu: 45, cm: 28.6, uk: 10.5, usM: 11.5, usW: 13 },
]

export default function SizeConverter() {
  const [eu, setEu] = useState(41)
  const s = sizes.find((x) => x.eu === eu)

  return (
    <div className="bg-white border border-beige/60 p-6 md:p-10 shadow-sm">
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {sizes.map((x) => (
          <button
            key={x.eu}
            onClick={() => setEu(x.eu)}
            className={`w-12 h-12 text-sm font-semibold border transition-all duration-300 ${
              eu === x.eu
                ? 'bg-black text-white border-black scale-110'
                : 'border-beige text-black/60 hover:border-gold hover:text-black'
            }`}
          >
            {x.eu}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={eu}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
        >
          {[
            { label: 'Longueur du pied', value: `${s.cm} cm` },
            { label: 'UK', value: s.uk },
            { label: 'US Hommes', value: s.usM },
            { label: 'US Femmes', value: s.usW },
          ].map((item) => (
            <div key={item.label} className="py-5 bg-ivory border border-beige/50">
              <p className="text-[10px] tracking-[0.2em] uppercase text-black/50 mb-1">{item.label}</p>
              <p className="font-display text-3xl text-gold">{item.value}</p>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      <p className="text-xs text-black/40 text-center mt-6">
        Valeurs indicatives : les tailles peuvent varier selon les modèles. En cas de doute, écrivez-nous sur WhatsApp.
      </p>
    </div>
  )
}