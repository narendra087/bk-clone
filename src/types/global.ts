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