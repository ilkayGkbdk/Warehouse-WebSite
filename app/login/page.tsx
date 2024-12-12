import React from 'react';
import LoginClient from "@/app/components/auth/LoginClient";
import {getCurrentUser} from "@/app/actions/getCurrentUser";

const LoginPage = async () => {

    const currentUser = await getCurrentUser();

    return (
        <div>
            <LoginClient currentUser={currentUser} />
        </div>
    );
};

export default LoginPage;
