"use client"

import {useRouter} from "next/navigation";

const Logo = () => {
    const router = useRouter();
    return (
        <div onClick={() => {router.push('/')}} className='bg-customDarkBrown backdrop-blur-md px-2 py-1 rounded-md text-lg md:text-3xl cursor-pointer hover:text-4xl ease-in duration-150'>
            Depom<span className='text-sm'>.com</span>
        </div>
    );
}

export default Logo;