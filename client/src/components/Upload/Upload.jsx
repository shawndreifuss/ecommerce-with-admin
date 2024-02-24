import { useState, useEffect } from "react";
import { MdFileUpload } from "react-icons/md";
import LayoutCard from "../../components/Cards/LayoutCard";
import React from "react";
import axios from "axios";

const Upload = () => {

  const [img, setImg] = useState(null); // If img is internal state
  const [imgUrl, setImgUrl] = useState(''); // If imgUrl is internal state
  const [loading, setLoading] = useState(false);


useEffect(() => {
  if (img !== null) {
    handleUpload();
  }
  }, [img]);


  // Get image url cloudinary
  const handleUpload = async () => {
    const data = new FormData(); 
    data.append("file", img);
    data.append("upload_preset", "images_preset");

    try {
      const cloudName = "dmvmccose";
      const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
      const res = await axios.post(url, data);
      const secure_url = res.data.url;
      setImgUrl(secure_url);

      return;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
   
try {
    setLoading(true);
   
 const imgUrl = await handleUpload();
   
  }catch (error) {
    console.log(error);
  }

  setLoading(false);
}




  return (
    <LayoutCard className="border-[4px] border-white bg-gradient-to-b from-[#868CFF] to-brand-500 dark:!border-navy-800 grid h-full w-full grid-cols-1 gap-3 rounded-[20px]  bg-clip-border p-3 font-dm shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none 2xl:grid-cols-11">
      <div className="col-span-5 h-full w-full rounded-xl bg-lightPrimary dark:!bg-navy-700 2xl:col-span-6"> 
      <label htmlFor="file">
        <div className="flex h-full w-full flex-col items-center justify-center rounded-xl border-[2px] border-dashed border-gray-200 py-3 dark:!border-navy-700 lg:pb-0">
        
          <MdFileUpload  className="text-[80px] text-brand-500 dark:text-white"  />


          <h4 className="text-xl font-bold text-brand-500 dark:text-white">
            Upload Files
          </h4>
          <p className="mt-2 text-sm font-medium text-gray-600">
            PNG, JPG and GIF files are allowed
          </p>
        </div>
        </label> 
        <div className="hideen">
        <input className="hidden" type="file" accept='image/*' id='file' onChange={(e) => setImg(e.target.files[0])} />
      </div>
      </div>
     
      <div className="bg-gradient-to-br from-[#868CFF] via-[#432CF3] to-brand-500 col-span-5 flex h-full w-full flex-col justify-center overflow-hidden rounded-xl bg-white pl-3 pb-4 dark:!bg-navy-800">
        <h5 className="text-left text-xl font-bold leading-9 text-navy-700 dark:text-white">
          Complete Your Profile
        </h5>
        <p className="leading-1 mt-2 text-base font-normal text-gray-600">
          Add a photo or we can generate one for you!
        </p>
        <button
          href=" "
          className="linear mt-4 flex items-center justify-center rounded-xl bg-brand-500 px-2 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
        >
          
        </button>
      </div>
    </LayoutCard>
  );
};


export default Upload;
