export interface PaketType {
  name: string
  slug: string
  image: string
  price: number
  description?: string
  additionalInfo?: string
  category: string
}

const paketList:PaketType[] = [
  //!!! Kings Chicken
  {
    name: 'Paket Crispy 1',
    slug: 'paket-crispy-1',
    image: 'kc-crispy-1',
    price: 25000,
    description: '1 pc Ayam Crispy + Nasi + Jasmine Tea Medium [ Rasa Baru, Enaknya sampe gigitan terakhir ! ]',
    additionalInfo:'Potongan ayam yang tersedia tergantung ketersediaan di toko pada saat pemesanan/pengiriman',
    category: 'kings-chicken-rasa-baru'
  },
  {
    name: 'Paket Crispy 2',
    slug: 'paket-crispy-2',
    image: 'kc-crispy-2',
    price: 45000,
    description: '',
    category: 'kings-chicken-rasa-baru'
  },
  {
    name: 'Paket Crispy 5',
    slug: 'paket-crispy-5',
    image: 'kc-crispy-5',
    price: 115000,
    description: '',
    category: 'kings-chicken-rasa-baru'
  },
  {
    name: '5 Pcs Ayam Crispy',
    slug: '5-bic-crispy',
    image: 'kc-5-crispy',
    price: 90909,
    description: '',
    category: 'kings-chicken-rasa-baru'
  },
  {
    name: '5 pcs Ayam Spicy 🌶️',
    slug: '5-bic-spicy',
    image: 'kc-5-spicy',
    price: 90909,
    description: '',
    category: 'kings-chicken-rasa-baru'
  },
  {
    name: 'Paket Spicy 1 🌶️',
    slug: 'paket-spicy-1',
    image: 'kc-spicy-1',
    price: 25000,
    description: '',
    category: 'kings-chicken-rasa-baru'
  },
  {
    name: 'Paket Spicy 2 🌶️',
    slug: 'paket-spicy-2',
    image: 'kc-spicy-2',
    price: 45000,
    description: '',
    category: 'kings-chicken-rasa-baru'
  },
  {
    name: 'Paket Spicy 5 🌶️',
    slug: 'paket-spicy-5',
    image: 'kc-spicy-5',
    price: 115000,
    description: '',
    category: 'kings-chicken-rasa-baru'
  },

  //!!! Special Menu
  {
    name: 'Paket 1 Pcs Ayam Madura Medium',
    slug: 'paket-1-madura-med',
    image: 'kc-crispy-1',
    price: 35909,
    description: '',
    category: 'special-menu'
  },
  {
    name: 'Paket 2 Pcs Ayam Madura Medium',
    slug: 'paket-2-madura-med',
    image: 'kc-crispy-1',
    price: 35909,
    description: '',
    category: 'special-menu'
  },
  {
    name: 'King Box Ayam Madura Regular',
    slug: 'paket-kb-madura-reg',
    image: 'kc-crispy-1',
    price: 35909,
    description: '',
    category: 'special-menu'
  },
  {
    name: 'King Box Ayam Madura Large',
    slug: 'paket-kb-madura-large',
    image: 'kc-crispy-1',
    price: 35909,
    description: '',
    category: 'special-menu'
  },
]

export default paketList