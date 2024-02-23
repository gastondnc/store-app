import { useEffect, useState } from "react";
import { CATEGORIES_MOCK } from "../mocks/categories.mock";
import { PROMOS_MOCK } from "../mocks/promos.mock";
import { Promo } from "../models/promo.model";
import { Category } from "../models/category.model";


export const usePromo = () => {
    const [promo, setPromo] = useState<Promo | null>(null);
    const promos = PROMOS_MOCK;
    const categories = CATEGORIES_MOCK;
    const day = new Date().toLocaleDateString();

    const getPromoCategories = ():string[] => {
        if(!promo) return []
        const promocategories = promo!.categoriesId
        const nameCategories: string[] = []
            promocategories.forEach( catId => {
            const cat = categories.find( (category: Category)  => category.id === catId )
            if(cat){
                nameCategories.push(cat?.name) 
            } 
        }  )
        
        return nameCategories
    }

    useEffect(() => {
        const promoDay: Promo | undefined = promos.find(promo => {
            if (promo.startDate <= day && promo.endDate >= day) {
                return promo
            }
        })
        setPromo(promoDay || null)
    }, [])
    
    return { promo, getPromoCategories }

}
