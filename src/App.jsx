import { useRef } from 'react';
import { MyInput } from './components/MyInput';

export default function App() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <MyInput ref={inputRef} />
      {/* <input type="text" ref={inputRef} className='p-2 border border-indigo-200 rounded' /> */}
      <button onClick={handleClick} className='p-2 bg-indigo-300 text-white rounded'>
        Focus the input
      </button>
    </>
  );
}
