import React from 'react';
import RegisterClient from "@/app/components/auth/RegisterClient";
import {getCurrentUser} from "@/app/actions/getCurrentUser";

const RegisterPage = async () => {

    const currentUser = await getCurrentUser();

    return (
        <div>
            <RegisterClient currentUser={currentUser} />
        </div>
    );
};

export default RegisterPage;
