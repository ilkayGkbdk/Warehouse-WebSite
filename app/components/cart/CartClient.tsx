"use client"

import React from 'react';
import PageContainer from "@/app/components/containers/PageContainer";
import useCart from "@/hooks/useCart";
import Image from "next/image";
import Button from "@/app/components/general/Button";

const CartClient = () => {

    const { cartProducts, removeFromCart, removeCart, totalPrice } = useCart();

    if (!cartProducts || cartProducts.length === 0) {
        return (
            <div>
                <PageContainer>
                    Onaya gönderdiğiniz herhangi bir depo gözükmüyor...
                </PageContainer>
            </div>
        );
    }

    return (
        <div className='my-3 md:my-10'>
            <PageContainer>
                <div className='flex items-center gap-3 text-center border-b border-b-black py-3'>
                    <div className='w-1/5'>Ürün Resmi</div>
                    <div className='w-1/5'>Ürün Adı</div>
                    <div className='w-1/5'>Ürün Miktarı</div>
                    <div className='w-1/5'>Ürün Fiyatı</div>
                    <div className='w-1/5'></div>
                </div>
                <div>
                    {
                        cartProducts.map((product) => (
                            <div key={product.id} className='flex items-center justify-between text-center'>
                                <div className='w-1/5 flex items-center justify-center'>
                                    <Image width={100} height={50} src={product.imageUrl} alt={product.name}/>
                                </div>
                                <div className='w-1/5'>{product.name}</div>
                                <div className='w-1/5'>{product.quantity}</div>
                                <div className='w-1/5 text-green-500 text-lg'>{product.price}₺</div>
                                <div className='w-1/5'>
                                    <Button text='Satın Alma İptali' onClick={() => removeFromCart(product)} small />
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='flex items-center justify-between my-3 py-5 border-t border-t-black'>
                    <button onClick={() => removeCart()} className='w-1/5 underline'>Sepeti Temizle</button>
                    <div className='text-lg md:text-2xl text-green-500 font-bold'>{totalPrice}₺</div>
                </div>
            </PageContainer>
        </div>
    );
};

export default CartClient;
