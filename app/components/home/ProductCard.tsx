"use client"

import React from 'react';
import {useRouter} from "next/navigation";
import Image from "next/image";
import textClip from "@/utils/TextClip";
import {Rating} from "@mui/material";

interface WarehouseCardProps {
    product: any
}

const ProductCard:React.FC<WarehouseCardProps> = ({product}) => {

    const router = useRouter();
    const productRating = product?.reviews?.reduce((acc: number, item: any) => acc + item.rating, 0) / product?.reviews?.length;

    return (
        <div onClick={() => router.push(`/products/${product.id}`)} className='w-[240px] bg-customGreen mx-auto cursor-pointer flex flex-col drop-shadow-xl p-2 rounded-md hover:scale-110 ease-in duration-150'>
            <div className='text-center mt-2 space-y-1'>
                <div className='font-bold text-lg md:text-2xl text-customWhite'>{textClip(product.name)}</div>
            </div>
            <div className='relative h-[200px]'>
                <Image src={product.image} fill alt=''/>
            </div>
            <div className='text-center mt-2 space-y-1'>
                <Rating name='read-only' value={productRating} readOnly/>
                <div className='text-customWhite font-bold text-lg md:text-xl'>
                    {product.price}₺
                </div>
            </div>
        </div>
    );
};

export default ProductCard;