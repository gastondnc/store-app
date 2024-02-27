
export const getPriceWithDiscount = (price: number, discount: number = 0): string  => { // los parametros de una funcion pueden ser, obligatorios, opcionales o por defecto //
    const dis: number = price * discount / 100;
    const result: number = price - dis;
    return result.toFixed(2)
}

