import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useUser } from "../../context/UserContext";

//  Components Imports
import Banner from "./Components/Banner";
import ProfileCard from "./Components/ProfileCard";
import RecentViewed from "./Components/RecentViewed";
import BlogpostCard from "../../components/Cards/BlogpostCard";

//  Future to remove
const avatar1 =
  "https://png.pngtree.com/background/20220730/original/pngtree-night-mixed-forest-tree-moon-picture-image_1882830.jpg";
const avatar2 =
  "https://img.freepik.com/free-photo/natures-beauty-reflected-tranquil-mountain-waters-generative-ai_188544-7867.jpg";
const avatar3 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkaYHcyUWvVrZDXDTTG0VpOoHMxCapZj1nkAZMrfN4N7RrXWfxxeEGHB6Ec1zqg6oUtV4&usqp=CAU";

export function Home() {
  const { state } = useUser();
  const { user } = state;
  const [posts, setPosts] = useState([]);

  // Gett all posts 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/posts");
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  

  return (
    <>
      <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
        <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
          {/* NFt Banner */}
          <Banner />

          {/* NFt Header */}
          <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
            <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
              Trending NFTs
            </h4>
            <ul className="mt-4 flex items-center justify-between md:mt-0 md:justify-center md:!gap-5 2xl:!gap-12">
              <li>
                <Link
                  className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                  href=" "
                >
                  Art
                </Link>
              </li>
              <li>
                <Link
                  className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                  href=" "
                >
                  Music
                </Link>
              </li>
              <li>
                <Link
                  className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                  href=" "
                >
                  Collection
                </Link>
              </li>
              <li>
                <Link
                  className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                  href=" "
                ></Link>
              </li>
            </ul>
          </div>

          {/*Trending Blog post card */}
          <div className="z-20 grid grid-cols-1 gap-5 md:grid-cols-4">
            <BlogpostCard
              bidders={[avatar1, avatar2, avatar3]}
              title="Abstract Colors"
              author="Esthera Jackson"
              price="0.91"
              image="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
            />
            <BlogpostCard
              bidders={[avatar1, avatar2, avatar3]}
              title="ETH AI Brain"
              author="Nick Wilson"
              price="0.7"
              image="https://www.bhmpics.com/downloads/wallpaper-thiet-ke/1.3b8ad2c7b1be2caf24321c852103598a-scaled.jpg"
            />
            <BlogpostCard
              bidders={[avatar1, avatar2, avatar3]}
              title="Mesh Gradients"
              author="Will Smith"
              price="2.91"
              image="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
            />
            <BlogpostCard
              bidders={[avatar1, avatar2, avatar3]}
              title="Mesh Gradients"
              author="Will Smith"
              price="2.91"
              image="https://www.bhmpics.com/downloads/wallpaper-thiet-ke/1.3b8ad2c7b1be2caf24321c852103598a-scaled.jpg"
            />
          </div>

          {/* Recenlty Added setion */}
          <div className="mb-5 mt-5 flex items-center justify-between px-[26px]">
            <h4 className="text-2xl font-bold text-navy-700 dark:text-white">
              Recently Added
            </h4>
          </div>

          {/* Recently Added blogs  */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
            {posts.map((post) => {
              return (
                <BlogpostCard
                  key={post._id}
                  postId={post._id}
                  userId={user ? user?._id : "60f3d1f3e6b6f3b3e8b0b3e8"}
                  bidders={[avatar1, avatar2, avatar3]}
                  title={post.title}
                  author={post.author}
                  likes={post.likes}
                  image={
                    post.img
                      ? post.img
                      : "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
                  }
                />
              );
              // Size 628 x by 358
            })}
          </div>
        </div>

        {/* right side section */}

        <div className=" h-fit overflow-y-hidden  right-12 rounded-xl 2xl:col-span-1 sm:hidden md:hidden lg:hidden xl:block xxl:hidden">
          <div className="flex flex-col fixed w-[27%]">
            <div className="mb-4">
              <ProfileCard />
            </div>
            <div>
              <RecentViewed />
            </div>
            {/* <Ads/> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
