import './App.css'
import { useState } from 'react';
import { Button } from 'antd';

export default function App() {
    const [firstCount, setFirstCount] = useState(0)
    const [secondCount, setSecondCount] = useState(0)
    const [thirdCount, setThirdCount] = useState(0)

  return (
    <>
        <div className="content">
            <div className='row-button'>
                <Button type="primary" onClick={() => setFirstCount(firstCount + 1)}>{firstCount}</Button>
                <div className='exercise-row-button'>
                    <Button type="primary" onClick={() => setSecondCount(secondCount + 1)}>+ 1</Button>            
                    <p>{secondCount}</p>
                </div>
            </div>
            <div className='row-button exercise-row-button'>
                <Button type="primary" onClick={() => setThirdCount(thirdCount + 10)}>+ 10</Button>
                <Button type="primary" onClick={() => setThirdCount(thirdCount - 100)}>- 100</Button>
                <Button type="primary" onClick={() => setThirdCount(thirdCount + 25)}>+ 25</Button>
                <p>{thirdCount}</p>
            </div>
        </div>
    </>        
  )
}