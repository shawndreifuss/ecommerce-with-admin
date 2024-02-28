import React, { useEffect, useState } from "react";

const Switch = (props) => {
    const { extra, color,tags, tag, ...rest  } = props;



    const [disable, setDisable] = useState(false)
useEffect(() => { 
  if(tags.length === 3 & !tags.includes(tag)){
    setDisable(true)
  }
  else if(tags.includes(tag)){
    setDisable(false)
  }
}
, [tags, tag])




return (
      <>
      {disable ? (
      <input
      
     disabled
        type="checkbox"
        className={`relative h-5 w-10 appearance-none rounded-[20px] bg-[#e0e5f2] outline-none transition duration-[0.5s]
        before:absolute before:top-[50%] before:h-4 before:w-4 before:translate-x-[2px] before:translate-y-[-50%] before:rounded-[20px]
        before:bg-white before:shadow-[0_2px_5px_rgba(0,_0,_0,_.2)] before:transition before:content-[""]
        checked:before:translate-x-[22px] hover:cursor-pointer
        dark:bg-white/5 ${
          color === "red"
            ? "checked:bg-red-500 dark:checked:bg-red-400"
            : color === "blue"
           
        } ${extra}`}  
        name="weekly"
        {...rest}
      />
       ) : (
        <input
          type="checkbox"
          className={`relative h-5 w-10 appearance-none rounded-[20px] bg-[#e0e5f2] outline-none transition duration-[0.5s]
          before:absolute before:top-[50%] before:h-4 before:w-4 before:translate-x-[2px] before:translate-y-[-50%] before:rounded-[20px]
          before:bg-white before:shadow-[0_2px_5px_rgba(0,_0,_0,_.2)] before:transition before:content-[""]
          checked:before:translate-x-[22px] hover:cursor-pointer
          dark:bg-white/5 ${
            color === "red"
              ? "checked:bg-red-500 dark:checked:bg-red-400"
              : color === "blue"
             
          } ${extra}`}  
          name="weekly"
          {...rest}
        />
        )}



      </>
    );
  };
  
  export default Switch;
  