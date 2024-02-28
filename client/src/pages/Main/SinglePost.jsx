import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useUser } from '../../context/UserContext'







const SinglePost = () => {
const {state } = useUser()
const { user } = state


console.log(user)
  const [post, setPost] = useState({})
  const params = useParams()

useEffect(() => {
  if(!params.postId) {
    return
  }
  const getPost = async  () => {
    try {
    const response = await axios.get(`http://localhost:3001/api/posts/${params.postId}`)
    const addView = await axios.post(`http://localhost:3001/api/posts/addview/${params.postId}`, 
    {userId: user._id})
    setPost(response.data)
    
    }catch(err) {
      console.log(err)
    }
  }
  getPost()
}
, [params.postId])



  



  return (
    <>  
    <div className="flex w-full h-full  justify-center">
      <div>
    <div
      className="w-full z-10 overflow-hidden dark:bg-dark md:pt-[130px] lg:pt-10"
    >
      <div
        className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-stroke/0 via-stroke to-stroke/0 dark:via-dark-3"
      ></div>
      <div className="container">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full px-4">
            <div className="text-center">
              <h1
                className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]"
              >
                {post.title}
              </h1>
              <p className="mb-5 text-base text-body-color dark:text-dark-6">
                {post.category}
              </p>

              <ul className="flex items-center justify-center gap-[10px]">
                <li>
                  <a
                    href="/"
                    className="flex items-center gap-[10px] text-base font-medium text-dark dark:text-white"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="flex items-center gap-[10px] text-base font-medium text-body-color"
                  >
                    <span className="text-body-color dark:text-dark-6"> / </span>
                    Blog Details
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <section className="pb-10  dark:bg-dark lg:pb-20 pt-5 ">
      <div className="container">
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp relative z-20 mb-[50px] h-[300px] overflow-hidden rounded-[5px] md:h-[400px] lg:h-[500px]"
              data-wow-delay=".1s
              "
            >
              <img
                src={post.img || "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"}
                alt="image"
                className="object-cover object-center w-full h-full"
              />
              <div
                className="absolute top-0 left-0 z-10 flex items-end w-full h-full bg-gradient-to-t from-dark-700 to-transparent"
              >
                <div className="flex flex-wrap items-center p-4 pb-4 sm:px-8">
                  <div className="flex items-center mb-4 mr-5 md:mr-10">
                    <div className="w-10 h-10 mr-4 overflow-hidden rounded-full">
                      {/* <img
                        src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
                        alt="image"
                        className="w-full"
                      /> */}
                    </div>
                    <p className="text-base font-medium text-white">
                      By 
                      <a
                        href="javascript:void(0)"
                        className="text-white hover:opacity-70"
                      >
                         {` ${post.author}`}
                      </a>
                    </p>
                  </div>
                  <div className="flex items-center mb-4">
                    <p
                      className="flex items-center mr-5 text-sm font-medium text-white md:mr-6"
                    >
                      <span className="mr-3">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-current"
                        >
                          <path
                            d="M13.9998 2.6499H12.6998V2.0999C12.6998 1.7999 12.4498 1.5249 12.1248 1.5249C11.7998 1.5249 11.5498 1.7749 11.5498 2.0999V2.6499H4.4248V2.0999C4.4248 1.7999 4.1748 1.5249 3.8498 1.5249C3.5248 1.5249 3.2748 1.7749 3.2748 2.0999V2.6499H1.9998C1.1498 2.6499 0.424805 3.3499 0.424805 4.2249V12.9249C0.424805 13.7749 1.1248 14.4999 1.9998 14.4999H13.9998C14.8498 14.4999 15.5748 13.7999 15.5748 12.9249V4.1999C15.5748 3.3499 14.8498 2.6499 13.9998 2.6499ZM1.5748 7.2999H3.6998V9.7749H1.5748V7.2999ZM4.8248 7.2999H7.4498V9.7749H4.8248V7.2999ZM7.4498 10.8999V13.3499H4.8248V10.8999H7.4498V10.8999ZM8.5748 10.8999H11.1998V13.3499H8.5748V10.8999ZM8.5748 9.7749V7.2999H11.1998V9.7749H8.5748ZM12.2998 7.2999H14.4248V9.7749H12.2998V7.2999ZM1.9998 3.7749H3.2998V4.2999C3.2998 4.5999 3.5498 4.8749 3.8748 4.8749C4.1998 4.8749 4.4498 4.6249 4.4498 4.2999V3.7749H11.5998V4.2999C11.5998 4.5999 11.8498 4.8749 12.1748 4.8749C12.4998 4.8749 12.7498 4.6249 12.7498 4.2999V3.7749H13.9998C14.2498 3.7749 14.4498 3.9749 14.4498 4.2249V6.1749H1.5748V4.2249C1.5748 3.9749 1.7498 3.7749 1.9998 3.7749ZM1.5748 12.8999V10.8749H3.6998V13.3249H1.9998C1.7498 13.3499 1.5748 13.1499 1.5748 12.8999ZM13.9998 13.3499H12.2998V10.8999H14.4248V12.9249C14.4498 13.1499 14.2498 13.3499 13.9998 13.3499Z"
                          />
                        </svg>
                      </span>
                      {post.createdAt}
                    </p>

                    <p
                      className="flex items-center mr-5 text-sm font-medium text-white md:mr-6"
                    >
                      <span className="mr-3">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-current"
                        >
                          <path
                            d="M11.1002 4.875H4.6502C4.3502 4.875 4.0752 5.125 4.0752 5.45C4.0752 5.775 4.3252 6.025 4.6502 6.025H11.1252C11.4252 6.025 11.7002 5.775 11.7002 5.45C11.7002 5.125 11.4252 4.875 11.1002 4.875Z"
                          />
                          <path
                            d="M9.8002 7.92505H4.6502C4.3502 7.92505 4.0752 8.17505 4.0752 8.50005C4.0752 8.82505 4.3252 9.07505 4.6502 9.07505H9.8002C10.1002 9.07505 10.3752 8.82505 10.3752 8.50005C10.3752 8.17505 10.1002 7.92505 9.8002 7.92505Z"
                          />
                          <path
                            d="M13.9998 1.9751H1.9998C1.1498 1.9751 0.424805 2.6751 0.424805 3.5501V12.9751C0.424805 13.3751 0.649805 13.7501 1.0248 13.9251C1.1748 14.0001 1.3248 14.0251 1.4748 14.0251C1.7248 14.0251 1.9498 13.9501 2.1498 13.7751L4.2748 12.0251H13.9998C14.8498 12.0251 15.5748 11.3251 15.5748 10.4501V3.5501C15.5748 2.6751 14.8498 1.9751 13.9998 1.9751ZM14.4498 10.4501C14.4498 10.7001 14.2498 10.9001 13.9998 10.9001H4.0748C3.9498 10.9001 3.8248 10.9501 3.7248 11.0251L1.5748 12.8001V3.5501C1.5748 3.3001 1.7748 3.1001 2.0248 3.1001H14.0248C14.2748 3.1001 14.4748 3.3001 14.4748 3.5501V10.4501H14.4498Z"
                          />
                        </svg>
                      </span>
                      {post?.comments?.length || 1}
                    </p>
                    <p className="flex items-center text-sm font-medium text-white">
                      <span className="mr-3">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-current"
                        >
                          <path
                            d="M7.9998 5.92505C6.8498 5.92505 5.9248 6.85005 5.9248 8.00005C5.9248 9.15005 6.8498 10.075 7.9998 10.075C9.1498 10.075 10.0748 9.15005 10.0748 8.00005C10.0748 6.85005 9.1498 5.92505 7.9998 5.92505ZM7.9998 8.95005C7.4748 8.95005 7.0498 8.52505 7.0498 8.00005C7.0498 7.47505 7.4748 7.05005 7.9998 7.05005C8.5248 7.05005 8.9498 7.47505 8.9498 8.00005C8.9498 8.52505 8.5248 8.95005 7.9998 8.95005Z"
                          />
                          <path
                            d="M15.3 7.1251C13.875 5.0001 11.9 2.8501 8 2.8501C4.1 2.8501 2.125 5.0001 0.7 7.1251C0.35 7.6501 0.35 8.3501 0.7 8.8751C2.125 10.9751 4.1 13.1501 8 13.1501C11.9 13.1501 13.875 10.9751 15.3 8.8751C15.65 8.3251 15.65 7.6501 15.3 7.1251ZM14.375 8.2501C12.55 10.9251 10.725 12.0251 8 12.0251C5.275 12.0251 3.45 10.9251 1.625 8.2501C1.525 8.1001 1.525 7.9001 1.625 7.7501C3.45 5.0751 5.275 3.9751 8 3.9751C10.725 3.9751 12.55 5.0751 14.375 7.7501C14.45 7.9001 14.45 8.1001 14.375 8.2501Z"
                          />
                        </svg>
                      </span>
                      {post?.views?.length || 1}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4 lg:w-8/12">
                <div>
                  <h2
                    className="wow fadeInUp mb-8 text-2xl font-bold text-dark dark:text-white sm:text-3xl md:text-[35px] md:leading-[1.28]"
                    data-wow-delay=".1s
                    "
                  >
                    {post.description}
                  </h2>
                  <p
                    className="mb-6 text-base wow fadeInUp text-body-color dark:text-dark-6"
                    data-wow-delay=".1s"
                  >
                    {post.body}
                  </p>
                  

                  <h3
                    className="wow fadeInUp mb-6 text-2xl font-semibold text-dark dark:text-white sm:text-[28px] sm:leading-[40px]"
                    data-wow-delay=".1s"
                  >
                    What is it with your ideas?
                  </h3>

                  <p
                    className="mb-6 text-base wow fadeInUp text-body-color dark:text-dark-6"
                    data-wow-delay=".1s"
                  >
                    At quo cetero fastidii. Usu ex ornatus corpora sententiae,
                    vocibus deleniti ut nec. Ut enim eripuit eligendi est, in
                    iracundia signiferumque quo. Sed virtute suavitate
                    suscipiantur ea, dolor this can eloquentiam ei pro. Suas
                    adversarium interpretaris eu sit, eum viris impedit ne.
                    Erant appareat corrumpit ei vel.
                  </p>
                  <p
                    className="mb-10 text-base wow fadeInUp text-body-color dark:text-dark-6"
                    data-wow-delay=".1s"
                  >
                    At quo cetero fastidii. Usu ex ornatus corpora sententiae,
                    vocibus deleniti ut nec. Ut enim eripuit eligendi est, in
                    iracundia signiferumque quo. Sed virtute suavitate
                    suscipiantur ea, dolor this can eloquentiam ei pro. Suas
                    adversarium interpretaris eu sit, eum viris impedit ne.
                    Erant appareat corrumpit ei vel.
                  </p>

                  <div className="flex flex-wrap items-center mb-12 -mx-4">
                    <div className="w-full px-4 md:w-1/2">
                      <div
                        className="flex flex-wrap items-center gap-3 mb-8 wow fadeInUp md:mb-0"
                        data-wow-delay=".1s"
                      >
                        <a
                          href="javascript:void(0)"
                          className="block rounded-md bg-primary/[0.08] px-[14px] py-[5px] text-base text-dark hover:bg-primary hover:text-white dark:text-white"
                        >
                          tag1
                        </a>
                        <a
                          href="javascript:void(0)"
                          className="block rounded-md bg-primary/[0.08] px-[14px] py-[5px] text-base text-dark hover:bg-primary hover:text-white dark:text-white"
                        >
                          tag2
                        </a>
                        <a
                          href="javascript:void(0)"
                          className="block rounded-md bg-primary/[0.08] px-[14px] py-[5px] text-base text-dark hover:bg-primary hover:text-white dark:text-white"
                        >
                          tag3
                        </a>
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div
                        className="flex items-center wow fadeInUp md:justify-end"
                        data-wow-delay=".1s"
                      >
                        <span
                          className="mr-5 text-sm font-medium text-body-color dark:text-dark-6"
                        >
                          Share This Post
                        </span>
                        <div className="flex items-center gap-[10px]">
                          <a href="javascript:void(0)">
                            <svg
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
                                fill="#1877F2"
                              />
                              <path
                                d="M17 15.5399V12.7518C17 11.6726 17.8954 10.7976 19 10.7976H21V7.86631L18.285 7.67682C15.9695 7.51522 14 9.30709 14 11.5753V15.5399H11V18.4712H14V24.3334H17V18.4712H20L21 15.5399H17Z"
                                fill="white"
                              />
                            </svg>
                          </a>
                          <a href="javascript:void(0)">
                            <svg
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
                                fill="#55ACEE"
                              />
                              <path
                                d="M24.2945 11.375C24.4059 11.2451 24.2607 11.0755 24.0958 11.1362C23.728 11.2719 23.3918 11.3614 22.8947 11.4166C23.5062 11.0761 23.7906 10.5895 24.0219 9.99339C24.0777 9.84961 23.9094 9.71915 23.7645 9.78783C23.1759 10.0669 22.5408 10.274 21.873 10.3963C21.2129 9.7421 20.272 9.33331 19.2312 9.33331C17.2325 9.33331 15.6117 10.8406 15.6117 12.6993C15.6117 12.9632 15.6441 13.2202 15.7051 13.4663C12.832 13.3324 10.2702 12.1034 8.49031 10.2188C8.36832 10.0897 8.14696 10.1068 8.071 10.2643C7.86837 10.6846 7.7554 11.1509 7.7554 11.6418C7.7554 12.8093 8.39417 13.8395 9.36518 14.4431C8.92981 14.4301 8.51344 14.3452 8.12974 14.2013C7.94292 14.1312 7.72877 14.2543 7.75387 14.4427C7.94657 15.8893 9.11775 17.0827 10.6295 17.3647C10.3259 17.442 10.0061 17.483 9.67537 17.483C9.59517 17.483 9.51567 17.4805 9.43688 17.4756C9.23641 17.4632 9.07347 17.6426 9.15942 17.8141C9.72652 18.946 10.951 19.7361 12.376 19.7607C11.1374 20.6637 9.57687 21.2017 7.88109 21.2017C7.672 21.2017 7.5823 21.4706 7.7678 21.5617C9.20049 22.266 10.832 22.6666 12.5656 22.6666C19.2231 22.6666 22.8631 17.5377 22.8631 13.0896C22.8631 12.944 22.8594 12.7984 22.8528 12.6542C23.3932 12.2911 23.8789 11.8595 24.2945 11.375Z"
                                fill="white"
                              />
                            </svg>
                          </a>
                          <a href="javascript:void(0)">
                            <svg
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
                                fill="#007AB9"
                              />
                              <path
                                d="M11.7836 10.1666C11.7833 10.8452 11.3716 11.4559 10.7426 11.7106C10.1137 11.9654 9.39306 11.8134 8.92059 11.3263C8.44811 10.8392 8.31813 10.1143 8.59192 9.49341C8.86572 8.87251 9.48862 8.4796 10.1669 8.49996C11.0678 8.527 11.784 9.26533 11.7836 10.1666ZM11.8336 13.0666H8.50024V23.4999H11.8336V13.0666ZM17.1003 13.0666H13.7836V23.4999H17.0669V18.0249C17.0669 14.9749 21.0419 14.6916 21.0419 18.0249V23.4999H24.3336V16.8916C24.3336 11.75 18.4503 11.9416 17.0669 14.4666L17.1003 13.0666Z"
                                fill="white"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 lg:w-4/12">
                <div>
                  <div className="flex flex-wrap mb-8 -mx-4">
                    <div className="w-full px-4">
                      <h2
                        className="wow fadeInUp relative pb-5 text-2xl font-semibold text-dark dark:text-white sm:text-[28px]"
                        data-wow-delay=".1s
                        "
                      >
                        Popular Articles
                      </h2>
                      <span
                        className="mb-10 inline-block h-[2px] w-20 bg-primary"
                      ></span>
                    </div>

                    <div className="w-full px-4 md:w-1/2 lg:w-full">
                      <div
                        className="flex items-center w-full pb-5 mb-5 border-b wow fadeInUp border-stroke dark:border-dark-3"
                        data-wow-delay=".1s
                        "
                      >
                        <div
                          className="mr-5 h-20 w-full max-w-[80px] overflow-hidden rounded-full"
                        >
                          <img
                            src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
                            alt="image"
                            className="w-full"
                          />
                        </div>
                        <div className="w-full">
                          <h4>
                            <a
                              href="javascript:void(0)"
                              className="inline-block mb-1 text-lg font-medium leading-snug text-dark hover:text-primary dark:text-dark-6 dark:hover:text-primary lg:text-base xl:text-lg"
                            >
                              Create engaging online courses your student…
                            </a>
                          </h4>
                          <p className="text-sm text-body-color dark:text-dark-6">
                            Glomiya Lucy
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2 lg:w-full">
                      <div
                        className="flex items-center w-full pb-5 mb-5 border-b wow fadeInUp border-stroke dark:border-dark-3"
                        data-wow-delay=".1s
                        "
                      >
                        <div
                          className="mr-5 h-20 w-full max-w-[80px] overflow-hidden rounded-full"
                        >
                          <img
                            src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
                            alt="image"
                            className="w-full"
                          />
                        </div>
                        <div className="w-full">
                          <h4>
                            <a
                              href="javascript:void(0)"
                              className="inline-block mb-1 text-lg font-medium leading-snug text-dark hover:text-primary dark:text-dark-6 dark:hover:text-primary lg:text-base xl:text-lg"
                            >
                              The ultimate formula for launching online course
                            </a>
                          </h4>
                          <p className="text-sm text-body-color dark:text-dark-6">
                            Andrio jeson
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2 lg:w-full">
                      <div
                        className="flex items-center w-full pb-5 mb-5 border-b wow fadeInUp border-stroke dark:border-dark-3"
                        data-wow-delay=".1s
                        "
                      >
                        <div
                          className="mr-5 h-20 w-full max-w-[80px] overflow-hidden rounded-full"
                        >
                          <img
                            src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
                            alt="image"
                            className="w-full"
                          />
                        </div>
                        <div className="w-full">
                          <h4>
                            <a
                              href="javascript:void(0)"
                              className="inline-block mb-1 text-lg font-medium leading-snug text-dark hover:text-primary dark:text-dark-6 dark:hover:text-primary lg:text-base xl:text-lg"
                            >
                              50 Best web design tips & tricks that will help
                              you
                            </a>
                          </h4>
                          <p className="text-sm text-body-color dark:text-dark-6">
                            Samoyel Dayno
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2 lg:w-full">
                      <div
                        className="flex items-center w-full pb-5 mb-5 border-0 wow fadeInUp border-stroke dark:border-dark-3 md:border-b lg:border-0"
                        data-wow-delay=".1s
                        "
                      >
                        <div
                          className="mr-5 h-20 w-full max-w-[80px] overflow-hidden rounded-full"
                        >
                          <img
                            src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
                            alt="image"
                            className="w-full"
                          />
                        </div>
                        <div className="w-full">
                          <h4>
                            <a
                              href="javascript:void(0)"
                              className="inline-block mb-1 text-lg font-medium leading-snug text-dark hover:text-primary dark:text-dark-6 dark:hover:text-primary lg:text-base xl:text-lg"
                            >
                              The 8 best landing page builders, reviewed
                            </a>
                          </h4>
                          <p className="text-sm text-body-color dark:text-dark-6">
                            Andrio Glori
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 wow fadeInUp mt-14" data-wow-delay=".2s">
            <h2
              className="relative pb-5 text-2xl font-semibold text-dark dark:text-white sm:text-[36px]"
            >
              Related Articles
            </h2>
            <span className="mb-10 inline-block h-[2px] w-20 bg-primary"></span>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mb-10 wow fadeInUp group" data-wow-delay=".1s">
              <div className="mb-8 overflow-hidden rounded-[5px]">
                <a href="blog-details.html" className="block">
                  <img
                    src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
                    alt="image"
                    className="w-full transition group-hover:rotate-6 group-hover:scale-125"
                  />
                </a>
              </div>
              <div>
                <span
                  className="mb-6 inline-block rounded-[5px] bg-primary px-4 py-0.5 text-center text-xs font-medium leading-loose text-white"
                >
                  Dec 22, 2023
                </span>
                <h3>
                  <a
                    href="blog-details.html"
                    className="inline-block mb-4 text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
                  >
                    Meet AutoManage, the best AI management tools
                  </a>
                </h3>
                <p
                  className="max-w-[370px] text-base text-body-color dark:text-dark-6"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mb-10 wow fadeInUp group" data-wow-delay=".15s">
              <div className="mb-8 overflow-hidden rounded-[5px]">
                <a href="blog-details.html" className="block">
                  <img
                    src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
                    alt="image"
                    className="w-full transition group-hover:rotate-6 group-hover:scale-125"
                  />
                </a>
              </div>
              <div>
                <span
                  className="mb-6 inline-block rounded-[5px] bg-primary px-4 py-0.5 text-center text-xs font-medium leading-loose text-white"
                >
                  Mar 15, 2023
                </span>
                <h3>
                  <a
                    href="blog-details.html"
                    className="inline-block mb-4 text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
                  >
                    How to earn more money as a wellness coach
                  </a>
                </h3>
                <p
                  className="max-w-[370px] text-base text-body-color dark:text-dark-6"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mb-10 wow fadeInUp group" data-wow-delay=".2s">
              <div className="mb-8 overflow-hidden rounded-[5px]">
                <a href="blog-details.html" className="block">
                  <img
                    src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
                    alt="image"
                    className="w-full transition group-hover:rotate-6 group-hover:scale-125"
                  />
                </a>
              </div>
              <div>
                <span
                  className="mb-6 inline-block rounded-[5px] bg-primary px-4 py-0.5 text-center text-xs font-medium leading-loose text-white"
                >
                  Jan 05, 2023
                </span>
                <h3>
                  <a
                    href="blog-details.html"
                    className="inline-block mb-4 text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
                  >
                    The no-fuss guide to upselling and cross selling
                  </a>
                </h3>
                <p
                  className="max-w-[370px] text-base text-body-color dark:text-dark-6"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    </div>
    </>
  )
  }

export default SinglePost