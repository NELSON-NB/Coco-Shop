// Charge automatiquement toutes les images du dossier src/assets/site
const images = import.meta.glob('../assets/site/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  import: 'default',
})

const img = (name) => {
  const src = images[`../assets/site/${name}`]
  if (!src) console.warn(`[images] Image introuvable : src/assets/site/${name}`)
  return src
}

// Remplacez uniquement les noms de fichiers à droite par les vôtres
export const siteImages = {
  heroHome: img('hero.jpg'),                 // grande image de la page d'accueil
  categoryMen: img('categorie-hommes.jpg'),
  categoryWomen: img('categorie-femmes.jpg'),
  headerBoutique: img('header-boutique.jpg'),
  headerServices: img('header-services.jpg'),
  headerAbout: img('header-apropos.jpg'),
  headerContact: img('header-contact.jpg'),
  aboutStory: img('apropos-histoire.jpg'),   // photo à côté du texte "Our story"
  promise: img('promesse.jpg'),              // fond de la citation "Notre promesse"
}