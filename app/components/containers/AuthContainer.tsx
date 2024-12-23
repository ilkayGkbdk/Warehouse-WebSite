import React from 'react';

const AuthContainer = ({children}: {children: React.ReactNode}) => {
    return (
        <div className='min-h-fit h-full w-full mt-5 md:px-52 flex items-center justify-center'>
            {children}
        </div>
    );
};

export default AuthContainer;