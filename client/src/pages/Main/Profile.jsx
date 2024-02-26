import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Avatar,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
  Switch,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import {
  HomeIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import MessageCard from "../../components/Cards/MessageCard";
import ProfileInfoCard from "../../components/Cards/ProfileInfoCard";
import platformSettingsData from "../../data/platform-settings-data";
import conversationsData from "../../data/conversations-data";
import projectsData from "../../data/projects-data";
import  {useUser } from "../../context/UserContext"

export function Profile() {
  //  Get user State
  const { state } = useUser()
  const { user } = state

  const [posts, setPosts] = useState([])
  console.log(posts) 


  const [activeTab, setActiveTab] = useState("myPosts");
console.log(activeTab)
  const makeTabActive = (e) => {
    setActiveTab(e.target.value);
  };

  console.log(activeTab)

  useEffect(() => {
    if(!user)
    return
  const getPosts = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/users/${user?._id}/posts`)
      const posts = await response.json()
      setPosts(posts)
      


    } catch (error) {
      console.error('Error during logout:', error);
      // Optionally handle logout error, maybe by showing a message to the user
    }
  }
  getPosts()

  } , [user])

  


  return (
    <>
      <Card className="mx-5  mt-10 mb-6 lg:mx-4 border border-blue-gray-100 overflow-y-scroll max-h-[150vh] ">
        <CardBody className="p-4">
          <div className="mb-10 flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center gap-6">
              <Avatar
                src={`${user?.avatar}`}
                alt="bruce-mars"
                size="xl"
                variant="rounded"
                className="rounded-lg shadow-lg shadow-blue-gray-500/40"
              />
              <div>
                <Typography variant="h5" color="blue-gray" className="mb-1">
                  {user?.username || "John Doe"}
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal text-blue-gray-600"
                >
                  {user?.createdAt}
                </Typography>
              </div>
            </div>
            <div className="w-96">
              <Tabs value="app">
                <TabsHeader>
                  <Tab value="app">
                    <HomeIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                    App
                  </Tab>
                  <Tab value="message">
                    <ChatBubbleLeftEllipsisIcon className="-mt-0.5 mr-2 inline-block h-5 w-5" />
                    Message
                  </Tab>
                  <Tab value="settings">
                    <Cog6ToothIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                    Settings
                  </Tab>
                </TabsHeader>
              </Tabs>
            </div>
          </div>
          <div className="gird-cols-1 mb-12 grid gap-12 px-4 lg:grid-cols-2 xl:grid-cols-3">
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-3">
                Platform Settings
              </Typography>
              <div className="flex flex-col gap-12">
                {platformSettingsData.map(({ title, options }) => (
                  <div key={title}>
                    <Typography className="mb-4 block text-xs font-semibold uppercase text-blue-gray-500">
                      {title}
                    </Typography>
                    <div className="flex flex-col gap-6">
                      {options.map(({ checked, label }) => (
                        <Switch
                          key={label}
                          id={label}
                          label={label}
                          defaultChecked={checked}
                          labelProps={{
                            className: "text-sm font-normal text-blue-gray-500",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <ProfileInfoCard
              title="Profile Information"
              description="Hi, I'm Alec Thompson, Decisions: If you can't decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
              details={{
                "first name": `${user?.username}`,
                mobile: "(44) 123 1234 123",
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
              action={
                <Tooltip content="Edit Profile">
                  <PencilIcon className="h-4 w-4 cursor-pointer text-blue-gray-500" />
                </Tooltip>
              }
            />
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-3">
                Platform Settings
              </Typography>
              <ul className="flex flex-col gap-6">
                {conversationsData.map((props) => (
                  <MessageCard
                    key={props.name}
                    {...props}
                    action={
                      <Button variant="text" size="sm">
                        reply
                      </Button>
                    }
                  />
                ))}
              </ul>
            </div>
          </div>
          <div className="px-4 pb-4">
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Projects
            </Typography>
            <Tabs value={activeTab} onChange={(value) => setActiveTab(value)} className="w-[50%] h-fit text-sm">
              <TabsHeader>
                <Tab value="myPosts" onClick={(value) => setActiveTab(value)}>My Posts</Tab>
                <Tab value="favorites" onClick={(e) => setActiveTab(e.value)}>Favorites</Tab>
                <Tab value="trending"onChange={(value) => setActiveTab(value)}>Trending</Tab>
              </TabsHeader>
            </Tabs>
            <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
              {activeTab === "myPosts" ? (
              posts.map(
                ({ img, title, description, tags, userId, author, createdAt, category, _id}) => (
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
                      <Link to=''>
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
              )
              ) : (
                <></>
              )}

              
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default Profile;
