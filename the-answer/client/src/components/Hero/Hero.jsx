import {  Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/assets/img/header.png')] bg-cover bg-no-repeat">
    <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
    <div className="grid min-h-screen px-8">
      <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
        <Typography variant="h3" color="white" className="mb-2">
        Explore Tomorrow's Wealth Strategies.
        </Typography>
        <Typography variant="h1" color="white" className="lg:max-w-3xl">
        The Answer
        </Typography>
        <Typography
          variant="lead"
          color="white"
          className="mt-1 mb-12 w-full md:max-w-full lg:max-w-2xl"
        >
          Finance Reimagined: Navigating Tomorrow's Wealth Today.
        </Typography>
        <div className="flex items-center">
          <Button variant="gradient" color="white">
            Get started
          </Button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Hero;
