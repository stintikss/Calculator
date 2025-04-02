import React, { useState, useEffect } from 'react';
import CalculatorButton from './CalculatorButton';
import History from './History';
import {saveHistory, getHistory} from '../utils/localstorage'


const Calculator: React.FC = () => {

    //ХУКИ:
      const [input, setInput] = useState<string>('')
      const [history, setHistory] = useState<string[]>([])
      const [visibleHis, setVisibleHid] = useState<boolean>(false)
      // const [alert, setAlert] = useState<boolean>(false)
    //
    useEffect(() => {
      const loadHistory = getHistory()
      setHistory(loadHistory)
    }, []);

    const handleButtonClick = (value: string) => {
      if(value === '÷') {
        value = '/'
      } else if(value === '×') {
        value = '*'
      }
      if(value === 'AC') {
        setInput('')
      } else if(value === '=') {
        try {
          const result = eval(input).toString()
          setInput(result)
          const newHistory = [...history, `${input} = ${result}`]
          setHistory(newHistory)
          saveHistory(newHistory)
          setVisibleHid(true)
        } catch (error) {
          setInput('Error')
        }
      } else {
        setInput(prevInput => prevInput + value);
      }
    }

    const clearHistory = () => {
      setHistory([])
    }
    return (
      <>
        <div className='bg-[white] h-[400px] w-[410px] px-[30px] rounded-[10px] py-[17px] flex flex-col gap-[15px]'>
          <input 
            type='text'
            value={input}
            readOnly
            className='bg-[#f4f3f4] w-full h-[50px] rounded-[10px] text-right px-[20px]'
          />
          <div className='flex-col flex gap-[11px]'>
            <div className='flex gap-[17px]'>
              {['AC', '÷', '×'].map(jjsss => (
                <CalculatorButton key={jjsss} value={jjsss} onClick={() => handleButtonClick(jjsss)} />
              ))}
            </div>
            <div className='flex gap-[17px]'>
              {['7', '8', '9', '-'].map(jjsss => (
                <CalculatorButton key={jjsss} value={jjsss} onClick={() => handleButtonClick(jjsss)} />
              ))}
            </div>
            <div className='flex gap-[17px]'>
              {['4', '5', '6', '+'].map(jjsss => (
                <CalculatorButton key={jjsss} value={jjsss} onClick={() => handleButtonClick(jjsss)} />
              ))}
            </div>
            <div className='flex gap-[17px]'>
              {['1', '2', '3', '='].map(jjsss => (
                <CalculatorButton key={jjsss} value={jjsss} onClick={() => handleButtonClick(jjsss)} />
              ))}
            </div>
            <div className='flex gap-[17px]'>
              {['0', '.'].map(jjsss => (
                <CalculatorButton key={jjsss} value={jjsss} onClick={() => handleButtonClick(jjsss)} />
              ))}
            </div>
            
          </div>
        </div>
        <History calcHistory={history} clearHistory={clearHistory} visible={visibleHis}/>
      </>
    );
};

export default Calculator;