export interface Restaurant {
    id: number;
    name: string;
    description: string;
}

export interface Section {
    id: number;
    name: string;
}

export interface Product {
    id: number;
    sectionId: number;
    restaurantId: number;
    name: string;
    detail: string;
    price: number;
    quantity?: number;
}