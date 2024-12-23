"use client"

import {useRouter} from "next/navigation";
import useLoading from "@/hooks/useLoading";

const Logo = () => {
    const router = useRouter();
    const { startLoading, stopLoading } = useLoading();

    const handleNavigation = async () => {
        try {
            startLoading();
            router.push(`/`);
        } catch (error) {
            console.error("Yönlendirme hatası:", error);
        } finally {
            stopLoading();
        }
    }

    return (
        <div onClick={handleNavigation} className='bg-customDarkBrown backdrop-blur-md px-2 py-1 rounded-md text-lg md:text-3xl cursor-pointer hover:text-4xl ease-in duration-150'>
            Depom<span className='text-sm'>.com</span>
        </div>
    );
}

export default Logo;