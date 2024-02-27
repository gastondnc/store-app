import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { PROVINCES_MOCK } from "../../mocks/provinces.mock";
import { DELIVERY_MOCK } from "../../mocks/delivery.mock";
import { Delivery } from "../../models/delivery.model";

type Props = {
    setTotalShipping: (totalShipping: number) => void;
}

export const CheckOut = ({ setTotalShipping }: Props) => {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [shippingType, setShippingType] = useState<string>('standard');
    const [provinceCode, setProvinceCode] = useState<string>('');
    // console.log('PROVINCE-CODE',provinceCode);
    // console.log('SHIPPING_TYPE', shippingType);
    // console.log('ISCHECKED', isChecked);

    const provinces = PROVINCES_MOCK;
    const deliveryShipping: Delivery = DELIVERY_MOCK;
    // console.log('PROVINCES', provinces);
    // console.log('DELIVERY', deliveryShipping);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log('FORM-EVENT', event)
    }

    const handleChecked = () => {
        setIsChecked((prev) => !prev)
    }

    const handleShippingType = (event: ChangeEvent<HTMLInputElement>) => {
        setShippingType(event.target.value)
    }


    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setProvinceCode(event.target.value)
    }

    const zoneCode = (): boolean => {
        return deliveryShipping.location.zones.some(zone => zone === provinceCode)
    }

    const buildTotalShipping = () => {
        const shippingTypeValue: number = deliveryShipping[shippingType].value;
        const provinceCodeValue: number = zoneCode() ? deliveryShipping.location.value : 0;
        // console.log('SHI-VALUE', shippingTypeValue)
        // console.log('PRO-VALUE', provinceCodeValue)
        setTotalShipping(shippingTypeValue + provinceCodeValue)
    }

    useEffect(() => {
        if( isChecked === true){
            buildTotalShipping()
        }

    }, [shippingType, provinceCode])

    const mappedProvinces = () => {
        return provinces.map((province, index) => {
            return <option
                key={index}
                value={province.code}
            >
                {province.name}
            </option>
        })
    }

    return (
        <>

            <form className="bg-gray-800 p-4 rounded-lg my-4" onSubmit={handleSubmit}>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                        <input type="text" name="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" />
                    </div>
                    <div>
                        <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                        <input type="text" name="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" />
                    </div>
                    <div>
                        <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                        <input type="text" name="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Address" />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                        <input type="tel" name="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+034" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                        <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@correo.com" />
                    </div>
                </div>
                <div className="flex w-full">
                    <div className="flex items-start mb-6 flex-1">
                        <div className="flex items-center h-5">
                            <input name="remember" type="checkbox" onChange={handleChecked} checked={isChecked} className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
                        </div>
                        <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">You accept the shipment.</label>
                    </div>

                    {
                        isChecked
                            ?
                            <div className="flex-1">
                                <div>
                                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an province</label>
                                    <select name="city" onChange={(event) => handleSelectChange(event)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        {mappedProvinces()}
                                    </select>
                                </div>
                                <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Shipping Type</h3>
                                <ul className="p-4 items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                        <div className="flex flex-col items-start ps-3">
                                            <div >
                                                <input id="horizontal-list-radio-shippingType" type="radio" onChange={handleShippingType} checked={shippingType === 'standard'} value="standard" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label htmlFor="horizontal-list-radio-license" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Standard</label>
                                            </div>
                                            <p className="ml-6">Time: {deliveryShipping.standard.time} Days</p>
                                            <p className="ml-6">Cost: {deliveryShipping.standard.value}€</p>
                                        </div>
                                    </li>
                                    <li className="w-full dark:border-gray-600">
                                        <div className="flex flex-col items-start ps-3">
                                            <div>
                                                <input id="horizontal-list-radio-shippingType" type="radio" onChange={handleShippingType} checked={shippingType === 'premium'} value="premium" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label htmlFor="horizontal-list-radio-passport" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Premium</label>
                                            </div>
                                            <p className="ml-6">Time: {deliveryShipping.premium.time} Days</p>
                                            <p className="ml-6">Cost: {deliveryShipping.premium.value}€</p>
                                        </div>

                                    </li>
                                </ul>
                            </div>
                            : null
                    }

                </div>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

        </>
    )
}






