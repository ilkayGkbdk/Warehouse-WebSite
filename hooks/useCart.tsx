"use client"

import {createContext, useCallback, useContext, useEffect, useState} from "react";
import {CardProductProps} from "@/app/components/detail/DetailClient";
import toast from "react-hot-toast";

interface CartContextProps {
    cartProducts: CardProductProps[] | null
    productCartQuantity: number
    addToCart: (product: CardProductProps) => void
    removeFromCart: (product: CardProductProps) => void
    removeCart: () => void
    totalPrice: number | undefined
}

const CartContext = createContext<CartContextProps | null>(null)

interface Props {
    [propName: string]: any;
}

const calculateTotalPrice = (products: CardProductProps[] | null): number => {
    return products?.reduce((acc, product) => acc + product.quantity * product.price, 0) || 0;
};

export const CartContextProvider = (props: Props) => {

    const [cartProducts, setCartProducts] = useState<CardProductProps[] | null>(null);
    const [productCartQuantity, setProductCartQuantity] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const getItem: any = localStorage.getItem('cart');
        const getItemParse: CardProductProps[] | null = JSON.parse(getItem);
        setCartProducts(getItemParse);
        setTotalPrice(calculateTotalPrice(getItemParse))
    }, []);

    const addToCart = useCallback((product: CardProductProps) => {
        setCartProducts((prevState) => {
            let updatedCart;
            if (prevState) {
                updatedCart = [...prevState, product]
            }
            else {
                updatedCart = [product]
            }

            toast.success('Depo sepete eklendi');
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            setTotalPrice(calculateTotalPrice(updatedCart))
            return updatedCart;
        });
    }, [cartProducts]);

    const removeFromCart = useCallback((product: CardProductProps) => {
        if (cartProducts) {
            const filteredProducts = cartProducts.filter((cart) => cart.id !== product.id);

            setCartProducts(filteredProducts);
            toast.success('Depo sepetten kaldırıldı');
            localStorage.setItem('cart', JSON.stringify(filteredProducts));
            setTotalPrice(calculateTotalPrice(filteredProducts))
        }
    }, [cartProducts]);

    const removeCart = useCallback(() => {
        setCartProducts(null);
        toast.success('Sepet temizlendi');
        localStorage.setItem('cart', JSON.stringify(null));
        setTotalPrice(0)
    }, [])

    const value = {
        cartProducts,
        productCartQuantity,
        addToCart,
        removeFromCart,
        removeCart,
        totalPrice
    }

    return (
        <CartContext.Provider value={value} {...props} />
    );
}

const useCart = () => {
    const context = useContext(CartContext);
    
    if (context === null || context === undefined) {
        throw new Error('null or undefined context');
    }
    return context;
};

export default useCart;
