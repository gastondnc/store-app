
type Props = {
    title: string;
    description: string;
    totalTitle: string;
    totalPrice: number;
    noItems: string
    handleBuy: () => void
}

export const HeadboardCart = ({ title, description, totalTitle, totalPrice, noItems, handleBuy }: Props) => {

    return (
        <>
            <section className="bg-white dark:bg-gray-900 rounded-md shadow-lg flex flex-col">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{title}</h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">{description}</p>
                    <div className="flex justify-between" >
                        {
                            totalPrice > 0
                                ? <div className="bg-gray-800 p-4 rounded-md shadow-lg md:max-w-96">
                                    <h3 className="text-gray-200 font-bold text-2xl">{totalTitle} {totalPrice}</h3>
                                </div>
                                : <div className="bg-gray-800 p-4 rounded-md shadow-lg md:max-w-96">
                                    <h3 className="text-gray-200 font-bold text-xl">{noItems}</h3>
                                </div>
                        }

                        <button onClick={() => handleBuy()} type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900">Buy</button>
                    </div>
                </div>
            </section>
        </>
    )
}
