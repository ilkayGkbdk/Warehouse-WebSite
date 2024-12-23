import React from 'react';
import {getCurrentUser} from "@/app/actions/getCurrentUser";
import WarningText from "@/app/components/general/WarningText";
import AuthContainer from "@/app/components/containers/AuthContainer";
import ManageClient from "@/app/components/admin/ManageClient";
import getProducts from "@/app/actions/getProducts";

const ManagePage = async () => {

    const products = await getProducts({category: null});

    const currentUser = await getCurrentUser();
    if (!currentUser || currentUser.role !== "ADMIN") {
        return (
            <WarningText text='Görüntülemek için admin girişi gerekli!' />
        )
    }

    return (
        <div className='w-full m-2'>
            <ManageClient products={products} />
        </div>
    );
};

export default ManagePage;
