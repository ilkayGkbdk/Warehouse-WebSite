import Header from "@/app/components/general/Header";
import {products} from "@/utils/Products";
import ProductCard from "@/app/components/home/ProductCard";

const Products = () => {
    return (
        <div>
            <Header text='Tüm Depolar' center bold/>
            <div className='flex items-center flex-wrap gap-3 md:gap-10 md:my-10 px-3 md:px-10'>
                {
                    products.map(product => (
                        <ProductCard product={product} key={product.id} />
                    ))
                }
            </div>
        </div>
    );
}

export default Products;