export type API = {
  data: Categories[]
}

export type Categories = {
  _id: string
  name: string
  slug: string
  submenu?: SubCategory[]
  createdAt?: string
  updatedAt?: string
  __v?: number
  link: string
  image: string
}

export type SubCategory = {
  _id: string
  name: string
  link: string
}

export type Pages = {
  _id: string
  name: string
  slug: string
  link: string
  subpage?: SubPage[]
  __v: number
}

export type SubPage = {
  _id: string
  name: string
  slug: string
  link: string
  parent: string
  __v: number
  createdAt?: string
}

export type Products = {
  _id: string
  featured: boolean
  name: string
  slug: string
  description: string
  category: Categories
  subCategories: SubCategory[]
  brand: Brand
  details: Detail[]
  questions: any[]
  reviews: Review[]
  subProducts: SubProduct[]
  createdAt: string
  updatedAt: string
  __v: number
  content: string
}

export type SubProduct = {
  sku: string
  style: Style
  options: Option[]
  _id: string
}

export type Style = {
  color: string
  image: string
  name: string
}

export type Option = {
  qty: number
  price: number
  sold: number
  option: string
  images: string[]
  discount: number
  _id: string
}

export interface Brand {
  _id: string
  name: string
  slug: string
  link: string
  image: string
  createdAt: string
  updatedAt: string
  __v: number
}

export interface Detail {
  name: string
  value: string
  _id: string
}

export interface Review {
  _id: string
  rating: number
  review: string
  likes: string[]
  reviewBy: ReviewBy
  createdAt: string
  updatedAt: string
  __v: number
  images?: any[]
}

export interface ReviewBy {
  id: string
  imageUrl: string
  fullName?: string
}
