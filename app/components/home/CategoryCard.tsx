"use client"

import React from 'react';
import {useRouter} from "next/navigation";
import Image from "next/image";
import textClip from "@/utils/TextClip";
import {Rating} from "@mui/material";
import useLoading from "@/hooks/useLoading";
import axios from "axios";

interface CategoryCardProps {
    category: any
}

const CategoryCard:React.FC<CategoryCardProps> = ({category}) => {

    const router = useRouter();
    const { startLoading, stopLoading } = useLoading();
    const categoryRating = category?.reviews?.reduce((acc: number, item: any) => acc + item.rating, 0) / category?.reviews?.length;

    const handleNavigation = async () => {
        try {
            startLoading();
            await axios.post(`/categories/${category.category}`).then(() => {
                router.push(`/categories/${category.category}`);
                stopLoading();
            });
        } catch (error) {
            console.error("Yönlendirme hatası:", error);
        }
    }

    return (
        <div onClick={handleNavigation} className='w-[240px] bg-customGreen mx-auto cursor-pointer flex flex-col drop-shadow-xl p-2 rounded-md hover:scale-110 ease-in duration-150'>
            <div className='text-center mt-2 space-y-1'>
                <div className='font-bold text-lg md:text-2xl text-customWhite'>{textClip(category.name)}</div>
            </div>
            <div className='relative h-[200px]'>
                <Image src={category.image} fill sizes="600" alt=''/>
            </div>
            <div className='text-center mt-2 space-y-1'>
                <div className='text-customWhite text-left'>
                    <div className='font-bold px-3'>
                        {category.name} Özellikleri:
                    </div>
                    <ul className="list-disc list-inside pl-10">
                        <li>{`1 - ${category.maxEmployees} kişi,`}</li>
                        <li>{`${category.palletSize} palet,`}</li>
                        <li>{`${category.pricingMethod} ücretlendirme.`}</li>
                    </ul>
                </div>
                <Rating name='read-only' value={categoryRating} readOnly/>
                <div className='text-customWhite font-bold text-lg md:text-xl'>
                    {category.price}$
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;