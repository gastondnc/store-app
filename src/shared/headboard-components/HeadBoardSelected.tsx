import { CategoryOption } from "../../models/product.model";
import { Select } from "../../components/select-component/Select";

type Props = {
    title: string;
    description: string;
    categories: CategoryOption[];
}

export const HeadBoardSelected = ({ title, description, categories }: Props) => {

    return (
        <>
            <section className="bg-white dark:bg-gray-900 rounded-md">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{title}</h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">{description}</p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        {
                            categories.length > 0
                            ? 
                            <Select
                                options={categories}
                            />
                            : null
                        }
                    </div>
                </div>
            </section>
        </>
    )
}


