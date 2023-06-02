export interface PaketType {
  name: string
  slug: string
  image: string
  price: number
  description?: string
  additionalInfo?: string
  category: string
}

export interface CartType extends PaketType {
  quantity: number
}

export interface GuestType {
  name: string
  phone?: number
  location: any
  address: string
}

export interface LocationType {
  lat: number
  lng: number
}