import React from 'react';
import {products} from "@/utils/Products";
import DetailClient from "@/app/components/detail/DetailClient";

type DetailProps = {
    productId?: string
}

const DetailPage = ({params}: {params: DetailProps}) => {
    const { productId } = params;
    const product = products.find((p) => p.id === productId);

    return (
        <div>
            <DetailClient product={product} />
        </div>
    );
};

export default DetailPage;