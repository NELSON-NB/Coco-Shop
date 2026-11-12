import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { openWhatsApp } from '../lib/whatsapp'

export default function WhatsAppFloat() {
  return (
    
<motion.button
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ delay: 1.5, type: 'spring' }}
  onClick={() => openWhatsApp()}
  className="fixed bottom-6 right-6 z-50 h-14 px-4 bg-[#25D366] rounded-full flex flex-row items-center justify-center gap-2 shadow-lg hover:scale-110 transition-transform"
  aria-label="WhatsApp"
>
  <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />

  <MessageCircle
    size={22}
    className="text-white relative shrink-0"
  />

  <span className="relative text-white text-xs font-semibold leading-none whitespace-nowrap">
    WhatsApp
  </span>
</motion.button>

  )
}