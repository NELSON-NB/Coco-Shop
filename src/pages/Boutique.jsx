import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Ruler } from 'lucide-react'
import { products } from '../data/products'
import PageHeader from '../components/PageHeader'
import ProductCard from '../components/ProductCard'
import Reveal from '../components/Reveal'
import SizeConverter from '../components/SizeConverter'

const filters = [
  { id: 'all', label: 'Tous' },
  { id: 'men', label: 'Hommes' },
  { id: 'women', label: 'Femmes' },
  { id: 'new', label: 'Nouveautés' },
]

export default function Boutique() {
  const [params, setParams] = useSearchParams()
  const cat = params.get('cat') || 'all'
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('default')

  const filtered = useMemo(() => {
    let list = [...products]
    if (cat === 'men') list = list.filter((p) => p.category === 'men')
    if (cat === 'women') list = list.filter((p) => p.category === 'women')
    if (cat === 'new') list = list.filter((p) => p.label === 'New')
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter((p) => p.name.toLowerCase().includes(q) || p.type.toLowerCase().includes(q))
    }
    if (sort === 'asc') list.sort((a, b) => a.price - b.price)
    if (sort === 'desc') list.sort((a, b) => b.price - a.price)
    return list
  }, [cat, search, sort])

  return (
    <>
      <PageHeader
        eyebrow="Boutique"
        title="NOS COLLECTION"
        subtitle="Des chaussures sélectionnées une à une pour les hommes et les femmes qui aiment se démarquer."
        image="https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1600&q=80"
      />

      {/* Toolbar */}
      <div className="bg-white border-b border-beige/40 sticky top-16 md:top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setParams(f.id === 'all' ? {} : { cat: f.id })}
                className="relative px-5 py-2 text-xs font-semibold tracking-wider uppercase"
              >
                {cat === f.id && (
                  <motion.span layoutId="filter-pill" className="absolute inset-0 bg-black" />
                )}
                <span className={`relative ${cat === f.id ? 'text-white' : 'text-black/60 hover:text-black'}`}>
                  {f.label}
                </span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 border-b border-beige focus-within:border-gold transition-colors flex-1 md:w-64">
              <Search size={16} className="text-black/40" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Rechercher une chaussure..."
                className="w-full bg-transparent py-2 text-sm focus:outline-none"
              />
            </div>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-transparent border border-beige text-xs py-2 px-3 focus:outline-none focus:border-gold"
            >
              <option value="default">Trier par</option>
              <option value="asc">Prix croissant</option>
              <option value="desc">Prix décroissant</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="flex items-end justify-between mb-10">
            <div>
              <p className="text-gold text-xs tracking-[0.3em] uppercase mb-2">Collection</p>
              <h2 className="font-display text-3xl md:text-4xl">TROUVE TA CHAUSSURE</h2>
            </div>
            <p className="text-sm text-black/50">
              <span className="text-gold font-semibold">{filtered.length}</span> paire{filtered.length > 1 ? 's' : ''}
            </p>
          </Reveal>

          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-center text-black/50 py-16">Aucun produit trouvé.</p>
          )}

          <p className="text-center text-xs text-black/40 mt-14">
            Démonstration de produits – les prix et stocks sont des exemples.
          </p>
        </div>
      </section>

      {/* Size guide */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-10">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3 flex items-center justify-center gap-2">
              <Ruler size={14} /> Guide des pointures
            </p>
            <h2 className="font-display text-4xl">TROUVE TA POINTURE</h2>
            <p className="text-black/50 text-sm mt-3">
              Choisissez votre pointure européenne pour voir l'équivalent en cm, UK et US.
            </p>
          </Reveal>
          <Reveal>
            <SizeConverter />
          </Reveal>
        </div>
      </section>
    </>
  )
}