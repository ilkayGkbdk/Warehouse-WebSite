import Header from "@/app/components/general/Header";
import {categories} from "@/utils/Categories";
import CategoryCard from "@/app/components/home/CategoryCard";

const Categories = () => {
    return (
        <div>
            <Header text='Tüm Depolar' center bold/>
            <div className='flex items-center flex-wrap gap-3 md:my-10 mx-3 md:mx-10'>
                {
                    categories.map(category => (
                        <CategoryCard category={category} key={category.id} />
                    ))
                }
            </div>
        </div>
    );
}

export default Categories;