// Charge automatiquement toutes les images du dossier src/assets/products
const images = import.meta.glob('../assets/products/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  import: 'default',
})

const img = (name) => {
  const src = images[`../assets/products/${name}`]
  if (!src) console.warn(`[products] Image introuvable : src/assets/products/${name}`)
  return src
}

// ---------- Descriptions réutilisables ----------
const DESC = {
  tennisNike: "Tennis Nike au design sportif et moderne, idéales pour le quotidien comme pour le sport.",
  nikeAir: "Modèle Nike Air au style urbain, confortable avec une allure affirmée.",
  jordan: "Air Jordan au look streetwear emblématique, pour un style affirmé au quotidien.",
  tennisAdidasHomme: "Tennis Adidas pour homme, au style sportif et moderne, légères et confortables pour tous les jours.",
  tennisAdidasFemme: "Tennis Adidas pour femme, au look tendance, confortables et légères pour toutes vos sorties.",
  newBalanceFemme: "Tennis New Balance pour femme, confort et maintien pour la marche comme pour le sport.",
  newBalanceHomme: "Tennis New Balance pour homme, confort et maintien pour la marche comme pour le sport.",
  tennis: "Tennis confortables et légères, au style moderne pour le quotidien.",
  timberland: "Timberland robuste et confortable, parfaite pour un style urbain résistant.",
  mocassins: "Mocassins pour homme, confortables et élégants, faciles à porter du bureau aux sorties.",
  mocassinsPompons: "Mocassins pour homme à pompons, un style raffiné avec une touche originale.",
  paireHomme: "Paire pour homme au design soigné, confortable et facile à assortir au quotidien.",
  ballerines: "Ballerines souples et confortables, une élégance simple pour tous les jours.",
  sandalesOuvertes: "Sandales ouvertes légères et confortables, idéales pour les journées chaudes.",
  escarpinsOuverts: "Escarpins ouverts au style féminin, élégants pour vos sorties et occasions spéciales.",
  coupeCarree: "Modèle à bout carré, à la silhouette moderne et élégante.",
  coupeCarreeBeige: "Modèle à bout carré en teinte beige, une élégance discrète qui s'accorde avec toutes les tenues.",
  mules: "Mules à talon nude, polyvalentes et ultra-féminines.",
  talons: "Chaussures à talon pour femme, pour une allure élégante et raffinée.",
  compensees: "Compensées confortables, de la hauteur sans sacrifier le confort.",
  piedsNus: "Modèle ouvert au style pieds nus, léger et élégant pour les beaux jours.",
  femme: "Chaussures pour femme au style tendance, confortables et faciles à assortir.",
}

const SIZES_F = [36, 37, 38, 39, 40]

// Modèle réutilisable : shoe(nom, catégorie, type, fichier, description, { price, sizes, label })
const shoe = (name, category, type, file, description, extra = {}) => ({
  name,
  category,
  type,
  price: 31000,
  sizes: SIZES_F,
  image: img(file),
  label: null,
  description,
  ...extra,
})

const rawProducts = [
  shoe('Tennis Nike', 'men', 'Tennis', 'hom 1.jpg', DESC.tennisNike,
    { price: 45000, sizes: [40, 41, 42, 43, 44], label: 'New' }),
  shoe('Paire de mocassins', 'men', 'Mocassins', 'IMG-20261112-WA0041.jpg', DESC.mocassins,
    { price: 32000, sizes: [40, 41, 42, 43, 44, 45] }),
  shoe('Ballerines', 'women', 'Ballerines', 'IMG-20261112-WA0037.jpg', DESC.ballerines,
    { price: 38000, sizes: [40, 41, 42, 43], label: 'Sale' }),
  shoe('Tennis Adidas Femme', 'women', 'Tennis', 'IMG-20261112-WA0038.jpg', DESC.tennisAdidasFemme,
    { price: 42000, sizes: [41, 42, 43, 44] }),
  shoe('Sandales ouvertes', 'women', 'Sandales', 'IMG-20261112-WA0039.jpg', DESC.sandalesOuvertes,
    { price: 28000, sizes: [40, 41, 42, 43, 44], label: 'New' }),
  shoe('Tennis Adidas Femme', 'women', 'Tennis', 'IMG-20261112-WA0040.jpg', DESC.tennisAdidasFemme,
    { price: 52000, sizes: [40, 41, 42, 43, 44] }),
  shoe('Coupe carrée', 'women', 'Escarpins', 'IMG-20261112-WA0034.jpg', DESC.coupeCarree,
    { price: 35000, label: 'New' }),
  shoe('Escarpins ouverts', 'women', 'Escarpins', 'fem 1.jpg', DESC.escarpinsOuverts,
    { price: 29000 }),
  shoe('Tennis Adidas Homme', 'men', 'Tennis', 'IMG-20261112-WA0035.jpg', DESC.tennisAdidasHomme,
    { price: 25000, sizes: [36, 37, 38, 39], label: 'Sale' }),
  shoe('Coupe carrée beige', 'women', 'Escarpins', 'IMG-20261112-WA0036.jpg', DESC.coupeCarreeBeige,
    { price: 22000 }),

  shoe('Tennis Adidas Femme', 'women', 'Tennis', 'IMG-20261112-WA0043.jpg', DESC.tennisAdidasFemme),
  shoe('Tennis Adidas Homme', 'men', 'Tennis', 'IMG-20261112-WA0044.jpg', DESC.tennisAdidasHomme),
  shoe('Mules à talon nude', 'women', 'Mules', 'IMG-20261112-WA0045.jpg', DESC.mules),
  shoe('Escarpins ouverts', 'women', 'Escarpins', 'IMG-20261112-WA0046.jpg', DESC.escarpinsOuverts),
  shoe('Escarpins ouverts', 'women', 'Escarpins', 'IMG-20261112-WA0047.jpg', DESC.escarpinsOuverts),
  shoe('Tennis', 'women', 'Tennis', 'IMG-20261112-WA0048.jpg', DESC.tennis),
  shoe('Talons', 'women', 'Talons', 'IMG-20261112-WA0049.jpg', DESC.talons),

  shoe('Air Jordan', 'men', 'Tennis', 'IMG-20261112-WA0053.jpg', DESC.jordan),
  shoe('Tennis Adidas', 'men', 'Tennis', 'IMG-20261112-WA0054.jpg', DESC.tennisAdidasHomme),
  shoe('Paire de mocassins', 'men', 'Mocassins', 'IMG-20261112-WA0055.jpg', DESC.mocassins),
  shoe('Compensées', 'women', 'Compensées', 'IMG-20261112-WA0056.jpg', DESC.compensees),
  // Ce modèle n'avait pas de nom : donnez-lui le bon nom
  shoe('Chaussures Femme', 'women', 'Talons', 'IMG-20261112-WA0057.jpg', DESC.femme),
  shoe('Talons', 'women', 'Talons', 'IMG-20261112-WA0058.jpg', DESC.talons),

  shoe('Talons', 'women', 'Talons', 'IMG-20261112-WA0060.jpg', DESC.talons),
  shoe('Escarpins ouverts', 'women', 'Escarpins', 'IMG-20261112-WA0061.jpg', DESC.escarpinsOuverts),
  shoe('Escarpins ouverts', 'women', 'Escarpins', 'IMG-20261112-WA0062.jpg', DESC.escarpinsOuverts),
  shoe('Escarpins ouverts', 'women', 'Escarpins', 'IMG-20261112-WA0063.jpg', DESC.escarpinsOuverts),
  shoe('Tennis Nike', 'men', 'Tennis', 'IMG-20261112-WA0064.jpg', DESC.tennisNike),
  shoe('Pieds nus', 'women', 'Sandales', 'IMG-20261112-WA0042.jpg', DESC.piedsNus),
  shoe('Tennis Adidas Femme', 'women', 'Tennis', 'IMG-20261112-WA0065.jpg', DESC.tennisAdidasFemme),
  shoe('Paire Homme', 'men', 'Classiques', 'IMG-20261112-WA0066.jpg', DESC.paireHomme),
  shoe('Tennis Adidas Homme', 'men', 'Tennis', 'IMG-20261112-WA0067.jpg', DESC.tennisAdidasHomme),
  shoe('Paire de mocassins à 2 pompons', 'men', 'Mocassins', 'IMG-20261112-WA0068.jpg', DESC.mocassinsPompons),
  shoe('Paire de mocassins', 'men', 'Mocassins', 'IMG-20261112-WA0069.jpg', DESC.mocassins),
  shoe('Paire de mocassins', 'men', 'Mocassins', 'IMG-20261112-WA0070.jpg', DESC.mocassins),
  shoe('Paire de mocassins', 'men', 'Mocassins', 'IMG-20261112-WA0071.jpg', DESC.mocassins),
  shoe('Tennis New Balance Femme', 'women', 'Tennis', 'IMG-20261112-WA0072.jpg', DESC.newBalanceFemme),
  shoe('Paire Homme', 'men', 'Classiques', 'IMG-20261112-WA0073.jpg', DESC.paireHomme),
  shoe('Paire Homme', 'men', 'Classiques', 'IMG-20261112-WA0074.jpg', DESC.paireHomme),
  shoe('Timberland', 'men', 'Bottines', 'IMG-20261112-WA0075.jpg', DESC.timberland),
  shoe('Paire Homme', 'men', 'Classiques', 'IMG-20261112-WA0076.jpg', DESC.paireHomme),
  shoe('Paire Homme', 'men', 'Classiques', 'IMG-20261112-WA0077.jpg', DESC.paireHomme),

  shoe('Tennis Adidas Homme', 'men', 'Tennis', 'ho 1.jpeg', DESC.tennisAdidasHomme),
  shoe('Tennis Adidas Femme', 'women', 'Tennis', 'ho 2.jpeg', DESC.tennisAdidasFemme),
  shoe('Tennis Adidas Femme', 'women', 'Tennis', 'ho 3.jpeg', DESC.tennisAdidasFemme),
  shoe('Tennis Adidas Homme', 'men', 'Tennis', 'ho 4.jpeg', DESC.tennisAdidasHomme),
  shoe('Nike Air', 'men', 'Tennis', 'ho 5.jpeg', DESC.nikeAir),
  shoe('Paire de mocassins', 'men', 'Mocassins', 'ho 6.jpeg', DESC.mocassins),
  shoe('Nike Air', 'men', 'Tennis', 'ho 7.jpeg', DESC.nikeAir),
  shoe('Paire de mocassins', 'men', 'Mocassins', 'ho 8.jpeg', DESC.mocassins),
  shoe('Paire Homme', 'men', 'Classiques', 'ho 9.jpeg', DESC.paireHomme),
  shoe('Paire Homme', 'men', 'Classiques', 'ho 10.jpeg', DESC.paireHomme),
  shoe('Paire Homme', 'men', 'Classiques', 'ho 11.jpeg', DESC.paireHomme),
  shoe('Paire Homme', 'men', 'Classiques', 'ho 12.jpeg', DESC.paireHomme),
  shoe('Paire Homme', 'men', 'Classiques', 'ho 13.jpeg', DESC.paireHomme),
  shoe('Paire Homme', 'men', 'Classiques', 'ho 14.jpeg', DESC.paireHomme),
  shoe('Paire Homme', 'men', 'Classiques', 'ho 15.jpeg', DESC.paireHomme),
  shoe('Paire Homme', 'men', 'Classiques', 'ho 16.jpeg', DESC.paireHomme),
  shoe('Paire Homme', 'men', 'Classiques', 'ho 17.jpeg', DESC.paireHomme),
  shoe('Paire Homme', 'men', 'Classiques', 'ho 18.jpeg', DESC.paireHomme),
  shoe('Paire Homme', 'men', 'Classiques', 'ho 19.jpeg', DESC.paireHomme),
  shoe('Paire Homme', 'men', 'Classiques', 'ho 20.jpeg', DESC.paireHomme),
  shoe('Paire Homme', 'men', 'Classiques', 'ho 21.jpeg', DESC.paireHomme),
  shoe('Tennis New Balance Homme', 'men', 'Tennis', 'ho 22.jpeg', DESC.newBalanceHomme),
];

// Identifiants automatiques dans l'ordre (1, 2, 3, ...) + contrôle des catégories
export const products = rawProducts.map((p, i) => {
  if (p.category !== 'men' && p.category !== 'women') {
    console.warn(`[products] Catégorie invalide "${p.category}" (produit ${i + 1}) : utilisez 'men' ou 'women'`)
  }
  return { ...p, id: i + 1 }
})

export const formatPrice = (price) => {
  return new Intl.NumberFormat('fr-CM', {
    style: 'currency',
    currency: 'XAF',
    maximumFractionDigits: 0
  }).format(price);
};