"use client"

import { FaWarehouse } from "react-icons/fa6";
import useCart from "@/hooks/useCart";
import {useRouter} from "next/navigation";
import useLoading from "@/hooks/useLoading";

const CountCard = () => {

    const router = useRouter();
    const { startLoading, stopLoading } = useLoading();
    const {cartProducts} = useCart();

    const handleNavigation = async () => {
        try {
            startLoading();
            router.push(`/cart`);
        } catch (error) {
            console.error("Yönlendirme hatası:", error);
        } finally {
            stopLoading();
        }
    }

    return (
        <div className='hidden md:flex mr-6 items-center justify-center cursor-pointer relative'>
            <FaWarehouse size='36' className='hover:size-10 ease-in duration-150' onClick={handleNavigation} />
            <div className='absolute -top-1 -right-2 text-sm bg-red-700 w-5 h-5 flex items-center justify-center rounded-full'>{cartProducts ? cartProducts.length : 0}</div>
        </div>
    );
}

export default CountCard;