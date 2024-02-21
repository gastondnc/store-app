
type Props = {
    title: string;
    description: string;
    totalTitle: string;
    totalPrice: number;
    noItems: string
}

export const HeadboardCart = ({ title, description, totalTitle, totalPrice, noItems }: Props) => {

    return (
        <>
            <section className="bg-white dark:bg-gray-900 rounded-md shadow-lg">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{title}</h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">{description}</p>
                    {
                        totalPrice > 0
                            ? <div className="bg-gray-800 p-4 rounded-md shadow-lg md:max-w-96">
                                <h3 className="text-gray-200 font-bold text-2xl">{totalTitle} {totalPrice}</h3>
                            </div>
                            : <div className="bg-gray-800 p-4 rounded-md shadow-lg md:max-w-96">
                                <h3 className="text-gray-200 font-bold text-xl">{noItems}</h3>
                            </div>
                    }

                </div>
            </section>
        </>
    )
}
