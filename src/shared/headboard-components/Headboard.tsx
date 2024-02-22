import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PROMOS_MOCK } from "../../mocks/promos.mock";
import { Promo } from "../../models/promo.model";
import { CATEGORIES_MOCK} from "../../mocks/categories.mock";
import { Category } from "../../models/category.model";

type Props = {
    title: string;
    description: string;
}

export const Headboard = ({ title, description }: Props) => {
    const [promo, setPromo] = useState<Promo>();
    const promos = PROMOS_MOCK;
    const categories = CATEGORIES_MOCK;
    const day = new Date().getDate()

    const getCategories = ():string => {
        const promocategories = promo!.categoriesId
        const nameCategories: string[] = []
            promocategories.forEach( catId => {
            const cat = categories.find( (category: Category)  => category.id === catId )
            if(cat){
                nameCategories.push(cat?.name) 
            } 
        }  )
        console.log('NAMECATEGORIES',nameCategories)
        let result: string = '' //"electronics y mens clothing"
        nameCategories.forEach( (nameCat: string) => {
            result = `${result} ${nameCat}`
        } ) 
        console.log('RESULT',result)
        return result
    }

    useEffect(() => {
        const promoDay = promos.find(promo => {
            if (promo.startDate <= day && promo.endDate >= day) {
                return promo
            }
        })
        setPromo(promoDay)
    }, [])
    
    console.log(promo)
    console.log('DAY', day);
    
    return (
        <>
            <section className="bg-white dark:bg-gray-900 rounded-md shadow-lg">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{title}</h1>
                    {
                        promo
                            ? <div className="bg-gray-800 p-4 my-4 rounded-md flex flex-col items-center">
                                <h3 className="mb-4  text-white text-3xl font-bold ">{promo.title}</h3>
                                <p className="mb-4 text-lg font-medium text-gray-200 lg:text-lg sm:px-16 lg:px-48">Entre el día {promo.startDate} y el {promo.endDate} de este mes</p>
                                <p className="mb-4 text-lg font-medium text-gray-200 lg:text-xl sm:px-16 lg:px-48">{promo.discount}% de descuento en<span className="text-red-500 text-xl font-bold">{getCategories()}</span></p>
                            </div>
                            : <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">{description}</p>
                    }
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <Link to="products" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            Get started
                            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

        </>
    )
}


