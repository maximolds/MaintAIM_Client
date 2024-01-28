import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';


const Header = ({ category, title }) => {
  const { currentColor} = useStateContext();
  return (
    <div className="">
      <p className="text-lg text-gray-400">{category}</p>
      <p className="text-3xl font-extrabold tracking-tight underline"
      style={{color: currentColor, textDecorationColor: 'black'}}
     >
        {title}
      </p>
    </div>
  )

}



export default Header;