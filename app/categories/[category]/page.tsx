import React from 'react';
import Products from "@/app/components/home/Products";

type CategoryPageProps = {
    category?: string
}

const CategoryPage = ({params}: {params: CategoryPageProps}) => {

    const { category } = params;

    return (
        <Products category={category} />
    );
};

export default CategoryPage;