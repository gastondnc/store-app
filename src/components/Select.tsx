import { ChangeEvent, useContext, useState } from "react";
import { CategoryOption } from "../models/product.model";
import { ProductsContext } from "../context/products/ProductsContext";

type Props = {
    options: CategoryOption[];
}

export const Select = ({ options }: Props) => {
    const {changeCategory} = useContext(ProductsContext);
    const[ selected, setSelected ] = useState(options[0].value);
    const onSelected = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelected(event.target.value);
        // cb(event.target.value);
        changeCategory(event.target.value)
    }

    return (
        <>
            <select
                onChange={(event) => onSelected(event)}
                value={selected}
                name="selectedItem"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {
                    options.map((option, index) => {
                        return (
                            <option
                                key={index}
                                value={option.value}
                            >
                                    {option.label}
                            </option>
                            )
                        })
                    }
                </select>
            </>
    )
}









