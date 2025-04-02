import React from 'react';
import { motion } from 'framer-motion';

interface HistoryPromps {
    calcHistory: string[];
    clearHistory: () => void;
    visible: boolean;
}

const History: React.FC<HistoryPromps> = ({ calcHistory, clearHistory, visible }) => {
    return (
        visible && (
            <motion.div 
                className='h-[400px] w-[250px] rounded-[10px] bg-[white] flex flex-col items-center overflow-y-auto py-[20px] px-[30px]'
                initial={{opacity: 0, scale: 0}}
                animate={{opacity: visible && 1, scale: visible && 1}}
                transition={{duration: 0.5}}
            >
                <header className='w-full flex justify-between items-center'>
                    <h1 className='font-[500] text-[20px]' style={{ fontFamily: 'Roboto, sans-serif' }}>History</h1>
                    <motion.h1 className='text-[17px] text-[#a58cec] cursor-pointer' onClick={clearHistory} style={{ fontFamily: 'Roboto, sans-serif' }}
                        whileTap={{ scale: 0.95 }}
                        transition={{duration: 0.1}}
                    >
                        Clear
                    </motion.h1>
                </header>
                <div className='w-full flex-1 overflow-y-auto mt-2 mx-[-30px]'>
                    {calcHistory.length > 0 ? (
                        calcHistory.map((entry) => (
                            <motion.div className='w-full flex justify-center h-[50px] items-center bg-[#f4f4f4] rounded-[10px] mb-[10px]'>
                                <div className='w-full text-center'>{entry}</div>
                            </motion.div>
                        ))
                    ) : (
                        <p className="text-gray-500 text-sm text-center py-2">История пуста</p>
                    )}
                </div>
            </motion.div>
        )
    );
};

export default History;
