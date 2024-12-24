import React from 'react';
import {IconType} from "react-icons";
import Link from "next/link";
import {useRouter} from "next/navigation";
import useLoading from "@/hooks/useLoading";
import axios from "axios";

interface AdminSidebarItemProps {
    selected?: boolean
    name: string
    icon: IconType
    url: string
}

const AdminSidebarItem:React.FC<AdminSidebarItemProps> = ({selected, name, url, icon:Icon}) => {

    const router = useRouter();
    const { startLoading, stopLoading } = useLoading();

    const handleNavigation = async () => {
        try {
            startLoading();
            await axios.post(url).then(() => {
                router.push(url);
                stopLoading();
            });
        }
        catch (error) {
            console.error("Yönlendirme hatası: ", error);
        }
    }

    return (
        <div onClick={handleNavigation}>
            <Link className={`cursor-pointer flex items-center gap-2 ${selected ? "text-black font-bold" : "text-slate-500 font-medium"}`} href={url}>
                <Icon size={"25"} />
                <div>{name}</div>
            </Link>
        </div>
    );
};

export default AdminSidebarItem;
