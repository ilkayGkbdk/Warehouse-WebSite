import React from 'react';
import AuthContainer from "@/app/components/containers/AuthContainer";
import Header from "@/app/components/general/Header";

const LoadingMessage = () => {
    return (
        <AuthContainer center>
            <Header text='YÜKLENİYOR...' center bold />
        </AuthContainer>
    );
};

export default LoadingMessage;
