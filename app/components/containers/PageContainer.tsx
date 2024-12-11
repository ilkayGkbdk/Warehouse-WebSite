import React from 'react';

const PageContainer = ({children}: {children: React.ReactNode}) => {
    return (
        <div className='px-3 md:px-12'>
            {children}
        </div>
    );
};

export default PageContainer;