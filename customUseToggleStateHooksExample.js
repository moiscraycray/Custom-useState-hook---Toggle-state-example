import React, { useState } from 'react';

// custom useState hook: toggling a state is used frequently. Creating a generic custom hook in a seperate file will make the code DRY
// in seperate folder: 'hooks/useToggle.js'
const useToggle = (initialValue = false) => {
  const [state, setstate] = useState(initialValue);
  const toggle = () => {
    setstate(!state);
  };
  return [state, toggle];
}
export default useToggle;

// in seperate folder: 'components/ToggleExample.js'
import useToggle from 'hooks/useToggle'; // import generic reusable custom hook

const ToggleExample = () => {
  const [isHappy, toggleIsHappy] = useToggle(true);
  const [isDog, toggleIsDog] = useToggle(false);
  const [isBanana, toggleIsBanana] = useToggle(true);
  
  return (
    <div>
      <p onClick={toggleIsHappy}>{isHappy ? 'Happy' : 'Sad'}</p>
      <p onClick={toggleIsDog}>{isDog ? 'WOOF' : 'Meow~'}</p>
      <p onClick={toggleIsBanana}>{isBanana ? 'BANANANAN' : 'apple'}</p>
    </div>
  )
}