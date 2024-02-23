
export const getPriceWithDiscount = (price: number, discount: number ): string  => {
    const dis: number = price * discount / 100;
    const result: number = price - dis;
    return result.toFixed(2)
}

