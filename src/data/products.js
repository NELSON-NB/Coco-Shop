export const products = [
  {
    id: 1,
    name: "Oxford Cuir Classique",
    category: "men",
    type: "Formal",
    price: 45000,
    sizes: [40, 41, 42, 43, 44],
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=85",
    label: "New",
    description: "Chaussures oxford en cuir véritable, finition élégante pour occasions formelles."
  },
  {
    id: 2,
    name: "Sneakers Urban Noir",
    category: "men",
    type: "Sneakers",
    price: 32000,
    sizes: [40, 41, 42, 43, 44, 45],
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=85",
    label: null,
    description: "Sneakers confortables et stylées pour le quotidien urbain."
  },
  {
    id: 3,
    name: "Loafers Premium Marron",
    category: "men",
    type: "Loafers",
    price: 38000,
    sizes: [40, 41, 42, 43],
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=85",
    label: "Sale",
    description: "Mocassins en cuir souple, style intemporel et confort maximal."
  },
  {
    id: 4,
    name: "Derby Noir Élégant",
    category: "men",
    type: "Formal",
    price: 42000,
    sizes: [41, 42, 43, 44],
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=85",
    label: null,
    description: "Derby en cuir noir brillant, parfait pour le bureau et les soirées."
  },
  {
    id: 5,
    name: "Baskets Sport Blanches",
    category: "men",
    type: "Sports",
    price: 28000,
    sizes: [40, 41, 42, 43, 44],
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=85",
    label: "New",
    description: "Baskets légères et respirantes pour le sport et le casual."
  },
  {
    id: 6,
    name: "Chelsea Boots Cuir",
    category: "men",
    type: "Boots",
    price: 52000,
    sizes: [40, 41, 42, 43, 44],
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=85",
    label: null,
    description: "Bottines Chelsea en cuir, style moderne et polyvalent."
  },
  {
    id: 7,
    name: "Escarpins Noirs Classiques",
    category: "women",
    type: "Heels",
    price: 35000,
    sizes: [36, 37, 38, 39, 40],
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=85",
    label: "New",
    description: "Escarpins élégants à talon moyen, silhouette raffinée."
  },
  {
    id: 8,
    name: "Sneakers Femme Blanches",
    category: "women",
    type: "Sneakers",
    price: 29000,
    sizes: [36, 37, 38, 39, 40],
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&q=85",
    label: null,
    description: "Sneakers blanches minimalistes, confort et style au quotidien."
  },
  {
    id: 9,
    name: "Sandales Élégantes Or",
    category: "women",
    type: "Sandals",
    price: 25000,
    sizes: [36, 37, 38, 39],
    image: "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=800&q=85",
    label: "Sale",
    description: "Sandales à brides fines, finition champagne gold."
  },
  {
    id: 10,
    name: "Ballerines Cuir Beige",
    category: "women",
    type: "Flats",
    price: 22000,
    sizes: [36, 37, 38, 39, 40],
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=85",
    label: null,
    description: "Ballerines souples en cuir, élégance discrète et confort."
  },
  {
    id: 11,
    name: "Bottes Hautes Noires",
    category: "women",
    type: "Boots",
    price: 48000,
    sizes: [36, 37, 38, 39],
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=85",
    label: "New",
    description: "Bottes hautes en cuir, look sophistiqué pour l'hiver."
  },
  {
    id: 12,
    name: "Mules Talon Nude",
    category: "women",
    type: "Heels",
    price: 31000,
    sizes: [36, 37, 38, 39, 40],
    image: "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=800&q=85",
    label: null,
    description: "Mules à talon nude, polyvalentes et ultra-féminines."
  }
];

export const formatPrice = (price) => {
  return new Intl.NumberFormat('fr-CM', {
    style: 'currency',
    currency: 'XAF',
    maximumFractionDigits: 0
  }).format(price);
};
