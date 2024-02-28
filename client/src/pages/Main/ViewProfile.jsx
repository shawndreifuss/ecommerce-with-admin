import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Avatar,
  Typography,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import MessageCard from "../../components/Cards/MessageCard";
import ProfileInfoCard from "../../components/Cards/ProfileInfoCard";
import conversationsData from "../../data/conversations-data";
import { useUser } from "../../context/UserContext";
import StatCard from "../../components/Cards/StatCard";
import axios from "axios";

export function ViewProfile() {
  const params = useParams();

  //  Get user State
  const { state } = useUser();
  const { user } = state;
  const [posts, setPosts] = useState([]);
  const [profile, setProfile] = useState({});
  const [isFollowing, setIsFollowing] = useState();
  useEffect(() => {
    const findProfile = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/users/${params.id}`
        );
        const data = await response.json();
        setProfile(data);
        setPosts(data.posts);
        if (user.following.includes(params.id)) {
          setIsFollowing(true);
        }else setIsFollowing(false)
      } catch (error) {
        console.log(error);
      }
    };
    findProfile();
  }, []);


  const followUser = async () => {
    try {
        const response = await axios.post( `http://localhost:3001/api/users/${user._id}/follow/${params.id}` )
        setIsFollowing(true)
        } catch (error) {
        console.log(error);
        }
    }

    const unfollowUser = async () => {
        try {
            const response = await axios.post( `http://localhost:3001/api/users/${user._id}/unfollow/${params.id}` )
            
            setIsFollowing(false)
            } catch (error) {
            console.log(error);
            }
        }
    

  return (
    <>
      <Card className="mx-5  mt-10 mb-6 lg:mx-4 border border-blue-gray-100 overflow-y-scroll max-h-[150vh] ">
        <CardBody className="p-4">
          <div className="mb-10 flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center gap-6">
              <Avatar
                src={`${profile?.avatar}`}
                alt="bruce-mars"
                size="xl"
                variant="rounded"
                className="rounded-lg shadow-lg shadow-blue-gray-500/40"
              />
              <div>
                <Typography variant="h5" color="blue-gray" className="mb-1">
                  {profile?.username || "John Doe"}
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal text-blue-gray-600"
                >
                 {isFollowing ? (
                    <button
                    onClick={unfollowUser}
                    type="button"
                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
                  >
                    UnFollow
                  </button>
                    ) : (
                  <button
                    onClick={followUser}
                    type="button"
                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
                  >
                    Follow
                  </button>
                    )}
                </Typography>
              </div>
            </div>
          </div>
          <div className="gird-cols-1 mb-12 grid gap-12 px-4 lg:grid-cols-2 xl:grid-cols-3">
            <div>
              <ProfileInfoCard
                title="Profile Information"
                description="Hi, I'm Alec Thompson, Decisions: If you can't decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
                details={{
                  email: `${user?.email}`,
                  location: "USA",
                  social: (
                    <div className="flex items-center gap-4">
                      <i className="fa-brands fa-facebook text-blue-700" />
                      <i className="fa-brands fa-twitter text-blue-400" />
                      <i className="fa-brands fa-instagram text-purple-500" />
                    </div>
                  ),
                }}
              />
              <div className="flex flex-col gap-12"></div>
            </div>

            <div>
              <Typography variant="h6" color="blue-gray" className="mb-3">
                Followers
              </Typography>
              <ul className="flex flex-col gap-6">
                {conversationsData.map((props) => (
                  <MessageCard
                    key={props.name}
                    {...props}
                    action={
                      <Button variant="text" size="sm">
                        Add
                      </Button>
                    }
                  />
                ))}
              </ul>
            </div>
            {/* Add Stats cards */}
            <StatCard profile={profile} />
          </div>
          <div className="px-4 pb-4">
            {/* Add posts */}
            <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
              {posts.map(
                ({
                  img,
                  title,
                  description,
                  tags,
                  userId,
                  author,
                  createdAt,
                  category,
                  _id,
                }) => (
                  <Card key={_id} color="transparent" shadow={false}>
                    <CardHeader
                      floated={false}
                      color="gray"
                      className="mx-0 mt-0 mb-4 h-64 xl:h-40"
                    >
                      <img
                        src={img}
                        alt={title}
                        className="h-full w-full object-cover"
                      />
                    </CardHeader>
                    <CardBody className="py-0 px-1">
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        {tags ? tags : "No tags"}
                      </Typography>
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="mt-1 mb-2"
                      >
                        {title}
                      </Typography>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        {description}
                      </Typography>
                    </CardBody>
                    <CardFooter className="mt-6 flex items-center justify-between py-0 px-1">
                      <Link to="">
                        <Button variant="outlined" size="sm">
                          view project
                        </Button>
                      </Link>
                      <div>
                        {/*  To do ad Likes user images  */}
                        {/* {likes.map(({ id, index }, key) => (
                          <Tooltip key={name} content={name}>
                            <Avatar
                              src={img}
                              alt={name}
                              size="xs"
                              variant="circular"
                              className={`cursor-pointer border-2 border-white ${
                                key === 0 ? "" : "-ml-2.5"
                              }`} 
                            />
                          </Tooltip>
                            ))}*/}
                      </div>
                    </CardFooter>
                  </Card>
                )
              )}
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default ViewProfile;
