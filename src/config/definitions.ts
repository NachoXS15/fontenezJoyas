export interface ProductProps {
    id: string
    prodName: string
    precio: number
    desc: string
    img: string
    categoria?: string
}

export interface categoryProp{
    categoryProp?: string | undefined
    search?: string | undefined
}