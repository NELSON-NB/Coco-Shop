import { motion } from 'framer-motion'
import { formatPrice } from '../data/products'
import { openWhatsApp } from '../lib/whatsapp'
import { useCart } from '../context/CartContext'

export default function ProductCard({ product, index = 0 }) {
  const { addToCart } = useCart()

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.07 }}
      className="group"
    >
      <div className="relative overflow-hidden bg-beige/30 aspect-[3/4] mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        {product.label && (
          <span
            className={`absolute top-3 left-3 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 ${
              product.label === 'New' ? 'bg-gold text-black' : 'bg-black text-white'
            }`}
          >
            {product.label}
          </span>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-end justify-center pb-5 md:opacity-0 md:group-hover:opacity-100">
          <div className="flex gap-2">
            <button
              onClick={() => openWhatsApp(product.name)}
              className="bg-white text-black text-[11px] font-semibold px-4 py-2.5 tracking-wide uppercase hover:bg-gold transition-colors"
            >
              WhatsApp
            </button>
            <button
              onClick={() => addToCart(product)}
              className="bg-black text-white text-[11px] font-semibold px-4 py-2.5 tracking-wide uppercase hover:bg-gold hover:text-black transition-colors"
            >
              Ajouter
            </button>
          </div>
        </div>
      </div>
      <div className="space-y-1">
        <p className="text-[11px] text-black/50 tracking-wider uppercase">{product.type}</p>
        <h3 className="font-display text-lg font-medium leading-tight">{product.name}</h3>
        <p className="text-sm font-medium text-gold">{formatPrice(product.price)}</p>
        <p className="text-xs text-black/40">Tailles : {product.sizes.join(', ')}</p>
      </div>
    </motion.div>
  )
}