import React, { useEffect } from "react";
import { Card, CardBody } from "@material-tailwind/react";
import Categories from "../../components/Cards/Categories";
import { useState } from "react";
import axios from "axios";
import { useUser } from "../../context/UserContext";
import { MdFileUpload } from "react-icons/md";
import LayoutCard from "../../components/Cards/LayoutCard";
import CardMenu from "../../components/Cards/CardMenu";
import Upload from "../../components/Upload/Upload";
import General from "../../components/General";
import Notifications from "../../components/Notifications";
import { IconButton } from "@material-tailwind/react";
import { Cog6ToothIcon } from "@heroicons/react/20/solid";
import { Button } from "@material-tailwind/react";
import { toast, ToastContainer } from "react-toastify";


const addPost = () => {
  const [img, setImg] = useState(null);
  const [imgUrl, setImgUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState([]);
  const [isCategorySelected, setIsCategorySelected] = useState(false);
  const [isTagSelected, setIsTagSelected] = useState(false);
  const { state } = useUser();
  const { user } = state;
  const [loading, setLoading] = useState(false);

  // Get image url cloudinary
  useEffect(
    (i) => {
      if (img === null) {
        return;
      }
      handleUpload(i);
    },
    [img]
  );
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

  // Handle Error with toast
  const handleError = (error) => {
    toast.error(error, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
// Handle Success with toast
  const handleSuccess = () => {
      toast.success("Post uploaded" , {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
       

        });
  };

  const handleData = async () => {
    const data = {
      img: imgUrl,
      category,
      tags,
      title,
      description,
      body,
      author: user.username,
      userId: user._id,
    };
   
    
    try {
      const res = await axios.post("http://localhost:3001/api/posts", data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = () => {
    if (
     
      title === "" ||
      description === "" ||
      body === ""
    ) {
      alert("Please fill in all fields");
      if (img === null || img === "" || img === undefined) {
        prompt(
          "Please upload an image or we can generate an image for you. Select OK to generate an image or cancel to upload an image."
        );
        if (confirm) {
          setImg("https://via.placeholder.com/150");
        }
      } else return;
    }
    handleData();
    setLoading(true);
    handleSuccess();
    setTimeout(() => {
    setLoading(false);
    }, 5000);
    
  };

  return (
    <>
    {/* Submit */}
    {/* Small screen only  */}
       {/* <IconButton
          size="lg"
          color="purple"
          className="fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900/10 "
          ripple={false}
          
        >
          +
        </IconButton> */}
        {loading ? (
        <div className="fixed top-0 left-0 w-screen h-screen bg-white bg-opacity-50 z-50 flex items-center justify-center">
          </div>
          ) : (
        <form onSubmit={handleSubmit}>
        <Button
          size="lg"
          color="purple"
          className="fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900/10 "
          ripple={false} 
          type="submit"
          
        >
          Submit
        </Button> 
      <div className="flex w-full h-full flex-col gap-5">
        <div className="w-ful mt-3 flex h-fit flex-col gap-5 lg:grid lg:grid-cols-12">
          <div className="col-span-4 lg:!mb-0">
            {/* <Banner /> */}
            <LayoutCard
              extra={
                "items-center w-full h-full p-[16px] bg-cover flex flex-col gap-6"
              }
            >
              <div className="w-full h-16">
                <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="Title of Blog Post"
                  className="h-full w-full rounded-full bg-[#F4F7FE] text-lg font-lg text-[#1B254B] outline-none border-none placeholder:!text-gray-400 placeholder:!text-center dark:bg-navy-900 dark:text-white dark:placeholder:!text-white "
                />
              </div>
              <div className="w-full h-full">
                <textarea
                 onChange={(e) => setDescription(e.target.value)}
                 rows={8}
                 value={description}
                  type="text"
                  placeholder="Write a short description for Blog Post"
                  className="h-full w-full p-5 rounded-4 bg-[#F4F7FE] text-lg font-lg text-[#1B254B] outline-none border-none placeholder:!text-gray-400 placeholder:!align-center dark:bg-navy-900 dark:text-white dark:placeholder:!text-white "
                ></textarea>
              </div>
            </LayoutCard>
          </div>
          <div className="col-span-3 lg:!mb-0">
            <LayoutCard extra={" w-full h-96 overflow-hidden no-scrollbar p-4"}>
              <div className="flex justify-end w-full mb-10">
                <div className="flex items-center w-full mx-auto ">
                  <label htmlFor="simple-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="simple-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search branch name..."
                     
                    />
                  </div>
                </div>
                <CardMenu />
              </div>
              <Categories />
            </LayoutCard>
          </div>
          <div className="z-0 col-span-5 lg:!mb-0">


            {/* Where Upload will go  */}
             {/* <Upload onImageUpload={handleImageUpload} /> */}
            
             <LayoutCard className="border-[4px] border-white bg-gradient-to-b from-[#868CFF] to-brand-500 dark:!border-navy-800 grid h-full w-full grid-cols-1 gap-3 rounded-[20px]  bg-clip-border p-3 font-dm shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none 2xl:grid-cols-11">
      
       
    
      <div className="w-full h-full object-fit h-max-60 w-full  bg-lightPrimary dark:!bg-navy-700 2xl:col-span-6"> 
    {!imgUrl ? (
        <img 
        className="max-h-[22rem] w-full rounded-xl object-cover"
        src='https://res.cloudinary.com/dmvmccose/image/upload/v1708734639/images/ydl44ulk62pr6cdzv93w.png'/>
        ) : (
   <>
      <label htmlFor="file"> 
     
        <div className="flex h-full w-full flex-col items-center justify-center rounded-xl border-[2px] border-dashed border-gray-200 py-3 dark:!border-navy-700 lg:pb-0">
      
          <MdFileUpload  className="text-[80px] text-brand-500 dark:text-white"  />

          <input type="file" className="hidden" accept='image/*' id='file' onChange={(i) => setImg(i.target.files[0])} />
          <h4 className="text-xl font-bold text-brand-500 dark:text-white">
            Upload Files
          </h4>
          <p className="mt-2 text-sm font-medium text-gray-600">
            PNG, JPG and GIF files are allowed
          </p>
         

        </div> 
        </label>
        </>
        )}
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
    
          </div>
        </div>
        {/* all project & ... */}
        <div className="grid h-full grid-cols-1 gap-5 lg:!grid-cols-8">
          <div className="col-span-5 grid-cols-12 lg:col-span-6 lg:mb-0 3xl:col-span-5">
          <LayoutCard extra={"w-full h-full p-3"}>
      {/* Header */}
      <div className="mt-2 mb-8 w-full">
        <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
          {title ? title : "Title of Blog Post"}
        </h4>
        <p  className="mt-2 px-2 text-base text-gray-600">
          {description ? description : "Write a short description for Blog Post" }
        </p>
      </div>
      {/* Cards */}
      <div className="grid ">
        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                 <textarea
                  rows={14}
                  type="text"
                  onChange={(e) => setBody(e.target.value)}
                  value={body}
                  placeholder="Write a short description for Blog Post"
                  className="h-full w-full p-5 rounded-4 bg-[#F4F7FE] text-lg font-lg text-[#1B254B] outline-none border-none placeholder:!text-gray-400 placeholder:!text-center placeholder:!align-center dark:bg-navy-900 dark:text-white dark:placeholder:!text-white "
                ></textarea>
        </div>
      </div>
    </LayoutCard>


            {/* Where General will go  */}
            {/* <General  title={title}  body={body}  onChange={(e) => setBody(e.target.value)} />  */}
          </div><Notifications />
         
        </div>
      </div>
      </form>


      
      )}

      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default addPost;
