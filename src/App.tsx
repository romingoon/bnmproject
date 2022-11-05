import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { BeakerIcon } from '@heroicons/react/24/outline';
function App() {
  const [count, setCount] = useState(0);

  return (
  <div>
    <h1 className='text-3xl font-bold underline'>Hello world!</h1>
    <BeakerIcon></BeakerIcon>
    </div>
  )
}

export default App;
