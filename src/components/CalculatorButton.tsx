import { motion } from 'framer-motion';
import React, { useState } from 'react';

interface CalculatorButtonProps {
    value: string;
    onClick: () => void; 
  }
  
  const CalculatorButton: React.FC<CalculatorButtonProps> = ({ value, onClick }) => {
    const [hover, setHover] = useState<boolean>(false)

    return (
      <motion.button
        className={`flex justify-center items-center rounded w-[75px] h-[50px] cursor-pointer
            ${value === 'AC' ? 'text-[#000000] bg-[#f4f3f4] w-[166px]'  : 
              (value === '+' || value === '-' || value === '=' || value === '÷' || value === '×'  ? 'bg-[#6e51a7]' : 
               value === '0' ? 'w-[166px] bg-[#9a7df8]' : 'bg-[#9a7df8]'
              )
            }`}
            
        onClick={onClick}
        animate={{scale: hover ? 1.2 : 1}}
        transition={{duration: 0.2, ease: 'easeInOut'}}
        onMouseEnter={() => (setHover(true))}
        onMouseLeave={() => (setHover(false))}
      >
        {value}
      </motion.button>
    );
  };
  
  export default CalculatorButton;
  