export type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
    stock: number;
    quantity?: number;
    totalPrice?: number;
    isFav: boolean;
}

export type Rating = {
    rate: number;
    count: number;
}

export enum Category {
    Electronics = "electronics",
    Jewelery = "jewelery",
    MenSClothing = "mens clothing",
    WomenSClothing = "womens clothing",
}

export type CategoryOption = {
    label: string;
    value: string;
}

export type StateProduct = {
    products: Product[];
    selectedCategory: string;
}







