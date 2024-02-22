export type Promo = {
    id: number;
    discount: number;
    title: string;
    categoriesId: number[];
    startDate: number;
    endDate: number;
}