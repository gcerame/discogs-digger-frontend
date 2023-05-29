import Image from 'next/image';
import React from 'react';
import spinner from '../public/spinner.svg';

export default function Spinner (){
    return (
        <>
            <Image className='w-[200px] m-auto block' src={spinner} alt='loading..' />
        </>
    );
};