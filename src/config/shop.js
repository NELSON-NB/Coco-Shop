export const SHOP = {
  name: 'COCO BIBAN SHOP',
  whatsapp: '237658962599',
  phoneDisplay: '+237 658 962 599',
  address: 'Mokolo, Yaoundé, Cameroun',
  // À MODIFIER : mettez ici l'adresse exacte ou le nom du lieu tel qu'il apparaît sur Google Maps
  mapQuery: 'Mokolo, Yaoundé, Cameroun',
  // À MODIFIER : horaires réels de la boutique
  hours: [
    { day: 'Lundi – Samedi', time: '08h00 – 19h00' },
    { day: 'Dimanche', time: 'Sur rendez-vous' },
  ],
  instagram: '#',
  facebook: '#',
  // À MODIFIER : chiffres réels (affichés avec animation dans la page À propos)
  stats: [
    { value: 500, suffix: '+', label: 'Clients satisfaits' },
    { value: 2, suffix: '', label: 'Univers : Hommes & Femmes' },
    { value: 7, suffix: '/7', label: 'Réponse rapide sur WhatsApp' },
  ],
}

export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  SHOP.mapQuery
)}&z=16&output=embed`

export const mapDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  SHOP.mapQuery
)}`