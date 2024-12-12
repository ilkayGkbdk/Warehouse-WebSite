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
    addToBasketIncrease: (product: CardProductProps) => void
    addToBasketDecrease: (product: CardProductProps) => void
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
    }, []);

    useEffect(() => {
        setTotalPrice(calculateTotalPrice(cartProducts))
    }, [cartProducts]);

    const addToCart = useCallback((product: CardProductProps) => {
        setCartProducts((prevState) => {
            let updatedCart;
            if (prevState) {
                updatedCart = [...prevState, product]
            }
            else {
                updatedCart = [product]
            }

            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        });

        setTimeout(() => toast.success('Depo sepete eklendi'), 0);
    }, [cartProducts]);

    const removeFromCart = useCallback((product: CardProductProps) => {
        if (cartProducts) {
            const filteredProducts = cartProducts.filter((cart) => cart.id !== product.id);

            setCartProducts(filteredProducts);
            toast.success('Depo sepetten kaldırıldı');
            localStorage.setItem('cart', JSON.stringify(filteredProducts));
        }
    }, [cartProducts]);

    const removeCart = useCallback(() => {
        setCartProducts(null);
        toast.success('Sepet temizlendi');
        localStorage.setItem('cart', JSON.stringify(null));
        setTotalPrice(0)
    }, []);

    const addToBasketIncrease = useCallback((product: CardProductProps) => {
        let updatedCart;
        if (product.quantity >= product.maxQuantity) {
            return toast.error('Daha Fazla Eklenemez...')
        }

        if (cartProducts) {
            updatedCart = [...cartProducts];
            const existingItem = cartProducts?.findIndex(item => item.id === product.id);

            if (existingItem > -1) {
                updatedCart[existingItem].quantity = ++updatedCart[existingItem].quantity;
            }
            setCartProducts(updatedCart);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
        }
    }, [cartProducts]);

    const addToBasketDecrease = useCallback((product: CardProductProps) => {
        let updatedCart;
        if (product.quantity <= 1) {
            return toast.error('Daha Az Eklenemez...')
        }

        if (cartProducts) {
            updatedCart = [...cartProducts];
            const existingItem = cartProducts?.findIndex(item => item.id === product.id);

            if (existingItem > -1) {
                updatedCart[existingItem].quantity = --updatedCart[existingItem].quantity;
            }
            setCartProducts(updatedCart);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
        }
    }, [cartProducts]);

    const value = {
        cartProducts,
        productCartQuantity,
        addToCart,
        removeFromCart,
        removeCart,
        totalPrice,
        addToBasketIncrease,
        addToBasketDecrease
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
