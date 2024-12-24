import React from 'react';

const AuthContainer = ({children, center = false}: {children: React.ReactNode, center?: boolean}) => {
    return (
        <div className={`${center ? "min-h-screen" : "min-h-fit"} h-full w-full mt-5 md:px-52 flex items-center justify-center`}>
            {children}
        </div>
    );
};

export default AuthContainer;