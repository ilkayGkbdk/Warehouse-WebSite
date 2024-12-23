import React from 'react';
import {LoadingContextProvider} from "@/hooks/useLoading";

const LoadingProvider = ({children}: {children: React.ReactNode}) => {
    return (
        <LoadingContextProvider>
            {children}
        </LoadingContextProvider>
    );
};

export default LoadingProvider;
