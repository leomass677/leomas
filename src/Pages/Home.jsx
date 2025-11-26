import React from "react";
import Greatings from "../Component/Greatings";
import { SlSocialTwitter } from "react-icons/sl";
import icons from "../assets/icons";
import { path } from "framer-motion/client";
import { MdCall } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { FaFigma } from "react-icons/fa6";
import { Link } from "react-router-dom";
import images from "../assets/images";
import { FaLocationArrow } from "react-icons/fa6";
import Button from "../Component/Button";
import AnimatedButton from "../Component/AnimatedButton";
import Cycle from "../Component/Cycle";
import { li } from "framer-motion/m";
import MainButton from "../Component/MainButton";
const Home = () => {
  const listIcon = [
    {
      icons: <SlSocialTwitter />,
      path: "#",
      name: "Twitter",
    },
    {
      icons: <MdCall />,
      path: "#",
      name: "Phone",
    },
    {
      icons: <FiGithub />,
      path: "https://github.com/leomass677",
      name: "Github",
    },
    {
      icons: <FaFigma />,
      path: "#",
      name: "Figma",
    },
  ];

  return (
    <section>
      <div className="mx-auto max-w-[1440px]  flex  w-full px-4 md:px-5 lg:px-8 xl:px-10  ">
        <div className="flex-1 h-full w-full min-h-210 flex  items-center  ">
          {/*Hi there */}

          <div className="flex flex-col gap-5 h-full   ">
            {" "}
            <Greatings />
            <h2 className="text-[40px] font-semibold">
              I'm Muktar,
              <br />
              <span>Designer meets engineer.</span>
            </h2>
            <p className="font-bold text-[20px] text-gray-400 max-w-lg">
              I turn pixels and logic into seamless experiences built with
              empathy, precision and clean code
            </p>
            {/* mapping item */}
            <div className="flex gap-5">
              {listIcon.map((item, key) => (
                <Cycle icon={item?.icons} link={item?.path} key={key} />
              ))}
            </div>
            <MainButton />
          </div>
        </div>

        {/*  */}
        <div className="flex-1 relative">
          <img
            src={images.Profiler1}
            alt={images.Profiler1}
            className="w-full "
          />
          <img
            src={images.Ellipse}
            alt={images.Ellipse}
            className="absolute -z-20  top-1/2 -translate-y-1/2"
          />
          {/* buttons */}
          <div>
            <button className="px-4 py-3 text-[16px] font-bold  items-center justify-center text-shade flex absolute bottom-40 bg-primary-500 rounded-full">
              Web Design
              <span className="relative">
                <FaLocationArrow className="absolute -top-10 text-crayola-600 text-2xl" />
              </span>
            </button>
            {/*  */}
            <button className="px-4 py-3 text-[16px] font-bold  items-center justify-center text-shade flex absolute right-0 bottom-40 bg-primary-500 rounded-full">
              Frontend Developer
              <span className="relative">
                <FaLocationArrow className="absolute -top-10 text-crayola-600 text-2xl" />
              </span>
            </button>

            {/*  */}
            <button className="px-4 py-3 text-[16px] font-bold  items-center justify-center text-shade flex absolute right-1/2 translate-x-1/2 bottom-20 bg-crayola-600 rounded-full">
              UI/UX Designer
              <span className="relative">
                <FaLocationArrow className="absolute -top-10 text-primary-500 text-2xl" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
