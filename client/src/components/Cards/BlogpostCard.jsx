import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";









const BlogpostCard = ({ title, author, image, bidders, userId, postId  }) => {
  
const [liked, setLiked] = useState(false);

// Check if user likes post
useEffect(() => {
const userLike = async (postId, userId) => {
  if (!userId) return;
  try {
    const response = await axios.get(`http://localhost:3001/api/posts/isliked/${postId}`, { userId });
    if(response.data.isLiked === true || "true"){
    setLiked(true);
    }else {
    setLiked(false);
    }

   } catch (error) {
    console.error("Error checking if user likes post:", error);
    throw error;
  }

} 
userLike(postId, userId);
}
, [postId, userId]);







// Function to like a post
 const likePost = async (postId, userId) => {
  
  try {
    const response = await axios.post('http://localhost:3001/api/posts/like', { postId, userId });
    return response.data,
    toast.success("Added to Favorites");
  } catch (error) {
    console.error("Error liking post:", error);
    throw error;
  }
};

// Function to unlike a post
 const unlikePost = async (postId, userId) => {
  try {
    const response = await axios.post(`http://localhost:3001/api/posts/unlike`, { postId, userId });
    return response.data,
    toast.success("Removed from Favorites");

  } catch (error) {
    console.error("Error unliking post:", error);
    throw error;
  }
};

const handleLike = async () => {
  try {
    await likePost(postId, userId);
    setLiked(true); // Update the local UI state to reflect the like
  } catch (error) {
    console.error("Failed to like the post:", error);
  }
};

const handleUnlike = async () => {
  try {
    await unlikePost(postId, userId);
    setLiked(false); // Update the local UI state to reflect the unlike
  } catch (error) {
    console.error("Failed to unlike the post:", error);
  }
};

  return (
    <div
      className="flex flex-col w-full h-full  !p-4 3xl:p-![18px] bg-white z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none "
    >
      <div className="h-full w-full">
        <div className="relative w-full">
          <img
            src={image}
            className="mb-3 h-full w-full max-h-48 min-h-48  rounded-xl 3xl:h-full 3xl:w-full"
            alt=""
          />
          <button
            onClick={liked ? handleUnlike : handleLike}
            className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-white p-2 text-[#11047A]-500 hover:cursor-pointer"
          >
            <div className="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50 dark:text-navy-900">
              {!liked ? (
                <IoHeartOutline />
              ) : (
                <IoHeart className="text-[#11047A]-500" />
              )}
            </div>
          </button>
        </div>

        <div className="mb-3 flex items-center justify-between px-1 md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col xl:items-start 3xl:flex-row 3xl:justify-between">
          <div className="mb-2">
            <p className="text-lg font-bold text-navy-700 dark:text-white">
              {" "}
              {title}{" "}
            </p>
            <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">
              By {author}{" "}
            </p>
          </div>

          <div className="flex flex-row-reverse md:mt-2 lg:mt-0">
            <span className="z-0 ml-px inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#E0E5F2] text-xs text-navy-700 dark:!border-navy-800 dark:bg-gray-800 dark:text-white">
              +5
            </span>
            {bidders.map((avt, key) => (
              <span
                key={key}
                className="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white dark:!border-navy-800"
              >
                <img
                  className="h-full w-full rounded-full object-cover"
                  src={avt}
                  alt=""
                />
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col 2xl:items-start 3xl:flex-row 3xl:items-center 3xl:justify-between">
          
          <Link
            to={`/main/viewing/post/${postId}`}
            className="linear rounded-[20px] bg-[#11047A] px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-[#11047A]-800 active:bg-[#11047A]-700 dark:bg-[#11047A]-400 dark:hover:bg-[#11047A]-300 dark:active:opacity-90"
          >
            Place Bid
          </Link>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default BlogpostCard
