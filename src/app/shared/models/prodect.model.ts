export interface Product {
    id?: number
    title: string,
    price: number | null,
    description: string,
    category: string
    image?: string
}