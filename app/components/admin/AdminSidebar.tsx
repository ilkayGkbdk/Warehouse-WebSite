"use client"

import React from 'react';
import AdminSidebarItem from "@/app/components/admin/AdminSidebarItem";
import { MdDashboard, MdCreate, MdOutlineBorderOuter, MdManageSearch } from "react-icons/md";
import {usePathname} from "next/navigation";

const AdminSidebar = () => {

    const pathname = usePathname();

    const adminPanel = [
        {
            name: 'Özetler',
            icon: MdDashboard,
            url: '/admin',
        },
        {
            name: 'Ürün Oluştur',
            icon: MdCreate,
            url: '/admin/create',
        },
        {
            name: 'Ürünleri Yönet',
            icon: MdManageSearch,
            url: '/admin/manage',
        },
        {
            name: 'Siparişlerim',
            icon: MdOutlineBorderOuter,
            url: '/admin/orders',
        }
    ];

    return (
        <div className='w-1/5 border-r border-r-black h-screen p-4 bg-customBrown'>
            <div className='space-y-4'>
                {
                    adminPanel.map((panel, i) => (
                        <AdminSidebarItem key={i} selected={pathname === panel.url} name={panel.name} url={panel.url} icon={panel.icon} />
                    ))
                }
            </div>
        </div>
    );
};

export default AdminSidebar;
