import { button } from '@material-tailwind/react'
import React, {useEffect, useState} from 'react'




const CATEGORIES = [
   {
      id: 1,
      name: 'LifeStyle',
      blogs: 54
   }, 
   {
      id: 2,
      name: 'Fashion',
      blogs: 234
   },
   {
      id: 3,
      name: 'Technology',
      blogs: 34
   },
   {

      id: 4,
      name: 'Health',
      blogs: 678
   },
   {
      id: 5,
      name: 'Travel',
      blogs: 3346
   },
   {
      id: 6,
      name: 'Business',
      blogs: 2332
   },
   {
      id: 7,
      name: 'Food',
      blogs: 45
   },
   {
      id: 8,
      name: 'Sports',
      blogs: 56
   },
   {
      id: 9,
      name: 'Entertainment',
      blogs: 232
   },
   {
      id: 10,
      name: 'Science',
      blogs: 2321
   },
   {
      id: 11,
      name: 'Education',
      blogs: 23213
   },
   {
      id: 12,
      name: 'Art',
      blogs: 131

   }
]
const Categories = ({catSearch, category, setCategory}) => {
//  Find categories with search 
const [filteredCategories, setFilteredCategories] = useState([])

useEffect(() => {
   if(catSearch ==='') {
      setFilteredCategories(CATEGORIES)
   } else {
      setFilteredCategories(CATEGORIES.filter(category => category.name.toLowerCase().includes(catSearch.toLowerCase())))
      const results = CATEGORIES.filter(category => category.name.toLowerCase().includes(catSearch.toLowerCase()))
      setFilteredCategories(results)
   }
}
, [catSearch])

  return (
    <>

Category Selected: {category}
<div className='overflow-y-scroll h-full p-5'>
<ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700 odd:bg-white even:bg-slate-50">
   {filteredCategories.map((category) => (  
   <li className="pb-3 sm:pb-4 cursor-pointer focus:text-white hover:bg-slate-50 focus:bg-slate-50 " key={category.id} onClick={(e) => setCategory(category.name)} value={category.name}>
      <div className="flex items-center space-x-4 rtl:space-x-reverse hover:bg-primary">
         <div className="flex-shrink-0">
            <img className="w-8 h-8 rounded-full" src="https://img.freepik.com/free-photo/vibrant-colors-flow-abstract-wave-pattern-generated-by-ai_188544-9781.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1708905600&semt=ais" alt=""/>
         </div>
         <div className="flex-1 min-w-0 focus:outline-none focus:ring focus:ring-violet-300">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
               {category.name}
            </p>
         </div>
         <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            {category.blogs}
         </div>
      </div>
   </li>
 
   ))}
</ul>
</div>
</>

  )
}


export default Categories