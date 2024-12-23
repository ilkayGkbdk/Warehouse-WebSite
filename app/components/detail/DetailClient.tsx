"use client"

import React, {useEffect, useState} from 'react';
import PageContainer from "@/app/components/containers/PageContainer";
import Image from "next/image";
import Counter from "@/app/components/general/Counter";
import Button from "@/app/components/general/Button";
import {Rating} from "@mui/material";
import useCart from "@/hooks/useCart";
import toast from "react-hot-toast";

export type CardProductProps = {
    id: string
    name: string
    description: string
    price: number
    quantity: number
    imageUrl: string
    inStock: boolean
}

const DetailClient = ({product}: {product: any}) => {

    const { cartProducts, productCartQuantity, addToCart } = useCart();
    const [displayButton, setDisplayButton] = useState(true);

    const [cardProduct, setCardProduct] = useState<CardProductProps>({
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        quantity: 1,
        imageUrl: product.image,
        inStock: product.inStock
    });

    useEffect(() => {
        setDisplayButton(false);
        const controlDisplay: any = cartProducts?.findIndex((cart) => cart.id === product.id);
        if (controlDisplay > -1 ) {
            setDisplayButton(false);
        }
        else {
            setDisplayButton(true);
        }
    }, [cartProducts]);

    const increaseFunc = () => {
        if (cardProduct.quantity === 5) {
            toast.error("Daha fazla eklenemez");
            return;
        }
        setCardProduct((prevState) => ({ ...prevState, quantity: prevState.quantity + 1 }));
    }

    const decreaseFunc = () => {
        if (cardProduct.quantity === 1) return;
        setCardProduct((prevState) => ({ ...prevState, quantity: prevState.quantity - 1 }));
    }

    const productRating = product?.reviews?.reduce((acc: number, item: any) => acc + item.rating, 0) / product?.reviews?.length;

    return (
        <div className='my-10'>
            <PageContainer>
                <div className='block md:flex gap-10 justify-center'>
                    <div className='relative h-[400px] w-[400px] mb-3 md:mb-0'>
                        <Image src={product?.image} fill alt={product?.name} />
                    </div>
                    <div className='w-full md:w-1/2 space-y-3'>
                        <div className='text-xl md:text-2xl'>{product?.name}</div>
                        <Rating name='read-only' value={productRating} readOnly/>
                        <div className='text-slate-500'>{product?.description}</div>
                        <div className='flex items-center gap-2'>
                            <div>STOK DURUMU:</div>
                            {
                                product?.inStock ? <div className='text-green-500 font-bold'>Stokta</div> :
                                    <div className='text-red-500 font-bold'>Tükenmiş</div>
                            }
                        </div>
                        <div className='text-customGreen text-opacity-110 text-xl md:text-2xl'>{product?.price} ₺</div>
                        {
                            product?.inStock ?
                                <>
                                    {
                                        displayButton ?
                                            <>
                                                <Counter cardProduct={cardProduct} increaseFunc={increaseFunc} decreaseFunc={decreaseFunc}/>
                                                <Button text='Sipariş Oluştur' onClick={() => addToCart(cardProduct)}/>
                                            </> :
                                            <>
                                                <Button text='Onay Bekleyen Siparişler Var' disabled onClick={() => addToCart(cardProduct)}/>
                                            </>
                                    }
                                </> :
                                <>
                                    <Button text='Stokta Yok' disabled onClick={() => {}}/>
                                </>

                        }
                    </div>
                </div>
            </PageContainer>
        </div>
    );
};

export default DetailClient;