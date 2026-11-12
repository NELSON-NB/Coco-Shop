import { SHOP } from '../config/shop'

export const openWhatsApp = (productName = null, customMessage = null) => {
  const message =
    customMessage ||
    (productName
      ? `Bonjour COCO BIBAN SHOP, je suis intéressé(e) par le produit : ${productName}. Pouvez-vous me donner plus d'informations ?`
      : `Bonjour COCO BIBAN SHOP, j'aimerais avoir des informations sur vos chaussures.`)
  window.open(
    `https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent(message)}`,
    '_blank'
  )
}