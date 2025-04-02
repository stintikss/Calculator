// Index.tsx

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Calculator from '../components/Calculator';
import { openExternalLink } from '../utils/handleClick'; 

const Index: React.FC = () => {
    const [hover, setHover] = useState<boolean>(false);

    useEffect(() => {

    }, []);

    return (
        <div className='w-full h-screen flex flex-col items-center'>
            <header className='w-full flex justify-center h-[200px] items-center'>
                <motion.h1
                    style={{ fontFamily: 'Winky Sans, sans-serif', transition: 'box-shadow 0.2s ease-in-out' }}
                    className={`font-bold ${hover ? 'text-[#ab8bdf]' : 'text-[#8b6dd3]'} text-[25px] cursor-pointer`}
                    animate={{ scale: hover ? 1.2 : 1 }}
                    transition={{ duration: 0.2, ease: 'easeInOut', type: 'tween' }}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    onClick={() => openExternalLink('https://t.me/Stintikss1')}  // Используем утилиту для клика
                >
                    Suvorov District
                </motion.h1>
            </header>
            <div className='h-screen flex items-center gap-[50px]'>
                <Calculator />
            </div>
        </div>
    );
};

export default Index;
