import Header from "@/app/components/general/Header";
import ProductCard from "@/app/components/home/ProductCard";
import React from "react";
import getProducts from "@/app/actions/getProducts";
import PageContainer from "@/app/components/containers/PageContainer";

interface ProductsProps {
    category: string | undefined | null
}

const Products:React.FC<ProductsProps> = async ({category}) => {

    const products = await getProducts({category: category});

    if (!products || products.length === 0) {
        return (
            <PageContainer>
                Depo bulunamadı.
            </PageContainer>
        );
    }

    return (
        <div>
            <Header text='Tüm Depolar' center bold/>
            <div className='flex items-center flex-wrap gap-3 md:my-10 mx-3 md:mx-10'>
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