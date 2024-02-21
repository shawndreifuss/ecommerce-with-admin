import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
} from "@material-tailwind/react";
import { FingerPrintIcon} from "@heroicons/react/24/solid";



const About = () => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center">
        <div className=" w-3/5 mt-32 flex flex-wrap items-center">
          <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
              <FingerPrintIcon className="h-8 w-8 text-white " />
            </div>
            <Typography
              variant="h3"
              className="mb-3 font-bold"
              color="blue-gray"
            >
              Working with us is a pleasure
            </Typography>
            <Typography className="mb-8 font-normal text-blue-gray-500">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum 
              <br />
              <br />
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident.
            </Typography>
            <Link to="/about">
            <Button variant="filled">read more</Button>
            </Link>
          </div>
          <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
            <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
              <CardHeader floated={true} className="relative h-56">
                <img
                  alt="Card Image"
                  src="https://media.istockphoto.com/id/864246672/photo/owners-using-digital-tablet-in-furniture-store.webp?b=1&s=170667a&w=0&k=20&c=fIBTQBWknvX1vMjJ-44zzPlzyOYrFFYkbwNEJheF-0E="
                  className="h-full w-full"
                />
              </CardHeader>
              <CardBody>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                 Company Name
                </Typography>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-3 mt-2 font-bold"
                >
                  White Glove Experience 
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident.
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
      <section className="relative bg-white py-24 px-4">
      </section>
    </>
  );
};

export default About;
