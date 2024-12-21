import React from 'react';
import {getCurrentUser} from "@/app/actions/getCurrentUser";
import WarningText from "@/app/components/general/WarningText";
import AuthContainer from "@/app/components/containers/AuthContainer";
import Form from "@/app/components/general/Form";

const CreateProductPage = async () => {

    const currentUser = await getCurrentUser();
    if (!currentUser || currentUser.role !== "ADMIN") {
        return (
            <WarningText text='Görüntülemek için admin girişi gerekli!' />
        )
    }

    return (
        <AuthContainer>
            <Form/>
        </AuthContainer>
    );
};

export default CreateProductPage;
