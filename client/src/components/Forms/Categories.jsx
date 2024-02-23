import React, { useState } from 'react';

export const Categories = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isOptionSelected, setIsOptionSelected] = useState(false)


return (
<div className="mb-4.5">
      <label className="mb-2.5 block text-black dark:text-white">
        {' '}
        Category{' '}
      </label>

      <div className="relative z-20 bg-transparent dark:bg-form-input">
        <select
          value={selectedOption}
          onChange={(e) => {
            setSelectedOption(e.target.value);
          }}
          className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${
            isOptionSelected ? 'text-black dark:text-white' : ''
          }`}
        >
          <option value="" disabled className="text-body dark:text-bodydark">
            Select your Category
          </option>
          <option value="USA" className="text-body dark:text-bodydark">
            cat 1
          </option>
          <option value="UK" className="text-body dark:text-bodydark">
            cat 2 
          </option>
          <option value="Canada" className="text-body dark:text-bodydark">
            Cat 3 
          </option>
        </select>
      </div>
    </div>

    );
}