import { Link } from 'react-router-dom'
import { MapPin, Phone, Instagram, Facebook } from 'lucide-react'
import { SHOP } from '../config/shop'
import { openWhatsApp } from '../lib/whatsapp'

export default function Footer() {
  return (
    <footer className="bg-black text-ivory pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="font-display text-2xl font-semibold mb-4">
              COCO <span className="text-gold">SHOP</span>
            </h3>
            <p className="text-white/50 text-sm leading-relaxed">
             Boutique de chaussures située à Mokolo, Yaoundé. Des chaussures tendance pour hommes et femmes.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-gold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link to="/" className="hover:text-gold transition-colors">Accueil</Link></li>
              <li><Link to="/boutique" className="hover:text-gold transition-colors">Boutique</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors">Services</Link></li>
              <li><Link to="/a-propos" className="hover:text-gold transition-colors">À propos</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-gold mb-4">Collections</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link to="/boutique?cat=men" className="hover:text-gold transition-colors">Men's Collection</Link></li>
              <li><Link to="/boutique?cat=women" className="hover:text-gold transition-colors">Women's Collection</Link></li>
              <li><Link to="/boutique?cat=new" className="hover:text-gold transition-colors">New Arrivals</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-gold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 text-gold shrink-0" />
                {SHOP.address}
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-gold shrink-0" />
                {SHOP.phoneDisplay}
              </li>
              <li>
                <button onClick={() => openWhatsApp()} className="hover:text-gold transition-colors">
                  WhatsApp
                </button>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href={SHOP.instagram} className="text-white/40 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href={SHOP.facebook} className="text-white/40 hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} COCO SHOP. Tous droits réservés.</p>
          <p>Démonstration – Produits et prix à titre d'exemple uniquement.</p>
        </div>
      </div>
    </footer>
  )
}