import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center">
            <div className={`m-4 my-32 animate-spin rounded-full w-8 h-8 border-2 border-[#4A3772] border-t-transparent`}></div>
            <span className='text-2xl'>Loading...</span>
        </div>
    );
};

export default LoadingSpinner;