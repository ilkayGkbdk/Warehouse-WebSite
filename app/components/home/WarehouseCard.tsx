"use client"

import React from 'react';
import {useRouter} from "next/navigation";
import Image from "next/image";
import textClip from "@/utils/TextClip";
import {Rating} from "@mui/material";

interface WarehouseCardProps {
    warehouse: any
}

const WarehouseCard:React.FC<WarehouseCardProps> = ({warehouse}) => {

    const router = useRouter();
    const warehouseRating = warehouse?.reviews?.reduce((acc: number, item: any) => acc + item.rating, 0) / warehouse?.reviews?.length;

    return (
        <div onClick={() => router.push(`/products/${warehouse.id}`)} className='w-[240px] bg-customGreen mx-auto cursor-pointer flex flex-col drop-shadow-xl p-2 rounded-md hover:scale-110 ease-in duration-150'>
            <div className='text-center mt-2 space-y-1'>
                <div className='font-bold text-lg md:text-2xl text-customWhite'>{textClip(warehouse.name)}</div>
            </div>
            <div className='relative h-[200px]'>
                <Image src={warehouse.image} fill alt=''/>
            </div>
            <div className='text-center mt-2 space-y-1'>
                <Rating name='read-only' value={warehouseRating} readOnly/>
                <div className='text-customWhite font-bold text-lg md:text-xl'>
                    {warehouse.price}₺
                </div>
            </div>
        </div>
    );
};

export default WarehouseCard;