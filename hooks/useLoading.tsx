"use client"

import NProgress from "nprogress";

import {createContext, useContext, useState} from "react";

interface LoadingContextProps {
    startLoading: () => void
    stopLoading: () => void
}

const LoadingContext = createContext<LoadingContextProps | null>(null);

interface Props {
    [propName: string]: any
}

export const LoadingContextProvider = (props: Props) => {
    const [loading, setLoading] = useState(false);

    const startLoading = () => {
        setLoading(true);
        NProgress.start();
    };

    const stopLoading = () => {
        setLoading(false);
        NProgress.done();
    };

    const value = {
        startLoading,
        stopLoading
    };

    return (
        <LoadingContext.Provider value={value} {...props} />
    );
}

const useLoading = () => {
    const context = useContext(LoadingContext);

    if (context === null || context === undefined) {
        throw new Error('null or undefined context');
    }
    return context;
}

export default useLoading;