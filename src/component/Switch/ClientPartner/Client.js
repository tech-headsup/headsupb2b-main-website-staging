import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

export default function Client({ clientCompanyList = [] }) {
    const client = clientCompanyList || [];
    
    return (
        <div className="w-full py-8">
            <Marquee pauseOnHover={true} speed={50} gradient={false}>
                {client?.map((ele, index) => (
                    ele?.imageUrl?.src && (
                        <div 
                            key={index} 
                            className="inline-flex items-center justify-center mx-8"
                            style={{
                                width: '150px',
                                height: '80px',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Image 
                                height={80}
                                width={150}
                                src={ele?.imageUrl?.src}
                                alt="Client brand Picture"
                                sizes="150px"
                                quality={70}
                                loading={index < 4 ? "eager" : "lazy"}
                                style={{
                                    maxWidth: '150px',
                                    maxHeight: '80px',
                                    width: 'auto',
                                    height: 'auto',
                                    objectFit: 'contain',
                                    display: 'block'
                                }}
                                unoptimized={ele?.imageUrl?.src?.endsWith('.svg')}
                                priority={index < 4}
                            />
                        </div>
                    )
                ))}
            </Marquee>
        </div>
    );
}
